import * as path from 'path';
import * as fs from 'fs';

import * as vscode from 'vscode';

import patterns from './patterns';

enum FileType {
    empty,
    isOld,
    isNew
}

class Pattern {
    private config: any = vscode.workspace.getConfiguration('headerpattern');

    private getCssContent = (): string =>
        fs.readFileSync(path.join(path.dirname(require.main!.filename), 'vs', 'workbench', 'workbench.main.css'), 'utf-8')

    private saveCssContent(content: string): void {
        fs.writeFileSync(path.join(path.dirname(require.main!.filename), 'vs', 'workbench', 'workbench.main.css'), content, 'utf-8');
    }

    private initialize(): void {
        const firstload = this.checkFirstload();
        const fileType = this.getFileType();

        if (firstload || fileType === FileType.isOld || fileType === FileType.empty) {
            this.install(true);
        }
    }

    private checkFirstload(): boolean {
        const configPath = path.join(__dirname, '../assets/config.json');
        let info: { firstload: boolean } = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

        if (!info.firstload) {
            return false;
        } 
        vscode.window.showInformationMessage('Hey, you can configure what header pattern is shown in the settings.json file.');
        info.firstload = false;
        fs.writeFileSync(configPath, JSON.stringify(info, null, '    '), 'utf-8');

        return true;
    }

    private getFileType(): FileType {
        let cssContent = this.getCssContent();

        if (!~cssContent.indexOf(`headerpatterns.ver`)) {
            return FileType.empty;
        }

        if (!~cssContent.indexOf(`/*headerpatterns.ver.1.0*/`)) {
            fs.writeFileSync(path.join(__dirname, '../xxx.css'), cssContent, 'utf-8');
            return FileType.isOld;
        }

        return FileType.isNew;
    }

    private install(refresh?: boolean): void {
        let lastConfig = this.config;
        let config = vscode.workspace.getConfiguration('headerpattern');

        if ((!refresh && JSON.stringify(lastConfig) === JSON.stringify(config)) || (!lastConfig.enabled && !config.enabled)) {
            return;
        }

        this.config = config;
        if (!config.enabled) {
            this.uninstall();
            vscode.window.showInformationMessage('Deinstalled Header Patterns - please restart.', { title: "Restart vscode" })
                .then(this.reload);
            return;
        }

        let pickedPattern = '';
        for (let prop in patterns) {
            if (patterns.hasOwnProperty(prop) && config.pattern.toLowerCase() === prop.toLowerCase()) {
                pickedPattern = (<any>patterns)[prop];
            }
        }

        let pickedLeftPattern = '';
        for (let prop in patterns) {
            if (patterns.hasOwnProperty(prop) && config.leftpattern.toLowerCase() === prop.toLowerCase()) {
                pickedLeftPattern = (<any>patterns)[prop];
            }
        }

        let sidebarPattern = '';
        for (let prop in patterns) {
            if (patterns.hasOwnProperty(prop) && config.sidebarPattern.toLowerCase() == prop.toLowerCase()) {
                sidebarPattern = (<any>patterns)[prop];
            }
        }
        
        let content = `
            /*css-pattern-start*/
            /*headerpatterns.ver.1.0*/
            [id="workbench.parts.titlebar"] { background-image: url(\"${pickedPattern}\") !important; }
            [id="workbench.parts.activitybar"] { background-image: url(\"${pickedLeftPattern}\") !important; }
            [id="workbench.parts.sidebar"] { background-image: url(\"${sidebarPattern}\") !important; }
            /*css-pattern-end*/
        `; 
        
        this.saveCssContent(this.clearCssContent(this.getCssContent()) + content);
        vscode.window.showInformationMessage('Pattern has been changed! Please restart.', { title: "Restart vscode" })
            .then(this.reload);
    }

    private uninstall(): boolean {
        try {
            this.saveCssContent(this.clearCssContent(this.getCssContent()));
            return true;
        }
        catch (ex) {
            console.log(ex);
            return false;
        }
    }
    
    private reload = (item: any) => {
        if (!item) {
            return;
        }
        vscode.commands.executeCommand('workbench.action.reloadWindow');
    }

    private clearCssContent = (content: string): string => content.replace(/\/\*css-pattern-start\*\/[\s\S]*?\/\*css-pattern-end\*\//g, '').replace(/\s*$/, '');
    
    public watch(): vscode.Disposable {
        this.initialize();
        return vscode.workspace.onDidChangeConfiguration(() => this.install());
    }
}

export default new Pattern();