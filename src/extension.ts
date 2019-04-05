// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import pattern from './pattern';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.headerpatterns.info', () => {
		vscode.window.showInformationMessage('Header Patterns is loaded and configurable in the settings.json file!');
	});

    context.subscriptions.push(disposable);
    
    context.subscriptions.push(pattern.watch());
}

// this method is called when your extension is deactivated
export function deactivate() {}
