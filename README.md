# Patterns

Patterns is an extension that sets the background of your header and/or menu bars to a background pattern. It works by editing the CSS file used by Visual Code and looks pretty cool.

> If you get a warning saying: "Your Code installation appears to be corrupt. Please reinstall." try running as admin or hiding the message (it displays due to the CSS system file being changed).

## Status

[![Installs](https://vsmarketplacebadge.apphb.com/installs/futs.headerpatterns.svg)](https://marketplace.visualstudio.com/items?itemName=futs.headerpatterns)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/futs.headerpatterns.svg)](https://vsmarketplacebadge.apphb.com/rating/futs.headerpatterns.svg)

## Screenies

![](https://imgur.com/e0dYYk2.png)
![](https://imgur.com/O7Aw5Xt.png)
![](https://imgur.com/bbjBzBy.png)

## Settings.json properties

| Name                          | Type    | Description                                                                 |
| :---------------------------- | :-----: | :-------------------------------------------------------------------------- |
| headerpattern.enabled         | boolean | `true` to enable the extension, `false` to uninstall.                       |
| headerpattern.pattern         | string  | `""` for no pattern, any from: https://www.heropatterns.com/ for a pattern. |
| headerpattern.leftpattern     | string  | `""` for no pattern, any from: https://www.heropatterns.com/ for a pattern. |
| headerpattern.sidebarPattern  | string  | `""` for no pattern, any from: https://www.heropatterns.com/ for a pattern. |

> See the bottom of this page for a list of all the supported patterns.

## Credits

* Steve Schoger: For creating all the patterns and making these freely available.
* shalldie: Multiple parts of the codebase.

## Extension Settings

This extension contributes the following settings:

* `headerpattern.enable`: Enable/disable this extension.
* `headerpattern.pattern`: The header pattern to be used.
* `headerpattern.leftpattern`: The left menu pattern to be used.
* `headerpattern.sidebarPattern`: The sidebar pattern to be used.

## Known Issues

If a warning appears simply agree to it, if the extension does not work: try to open visual code as admin.

## Supported patterns

| Supported patterns                  |
| :---------------------------------: |
| Jigsaw                              |
| Overcast                            |
| FormalInvitation                    |
| Topography                          |
| Texture                             |
| Jupiter                             |
| Architect                           |
| Cutout                              |
| Hideout                             |
| GraphPaper                          |
| YYY                                 |
| Squares                             |
| FallingTriangles                    |
| PianoMan                            |
| PieFactory                          |
| Dominos                             |
| Hexagons                            |
| CharlieBrown                        |
| Autumn                              |
| Temple                              |
| StampCollection                     |
| DeathStar                           |
| ChurchonSunday                      |
| ILikeFood                           |
| OverlappingHexagons                 |
| FourPointStars                      |
| Bamboo                              |
| BathroomFloor                       |
| CorkScrew                           |
| HappyIntersection                   |
| Kiwi                                |
| Lips                                |
| Lisbon                              |
| RandomShapes                        |
| SteelBeams                          |
| TinyCheckers                        |
| XEquals                             |
| AnchorsAway                         |
| BevelCircle                         |
| BrickWall                           |
| FancyRectangles                     |
| HeavyRain                           |
| OverlappingCircles                  |
| Plus                                |
| Rounded PlusConnected               |
| VolcanoLamp                         |
| Wiggle                              |
| Bubbles                             |
| Cage                                |
| Connections                         |
| Current                             |
| DiagonalStripes                     |
| FlippedDiamonds                     |
| FloatingCogs                        |
| Glamorous                           |
| Houndstooth                         |
| Leaf                                |
| LinesInMotion                       |
| Moroccan                            |
| MorphingDiamonds                    |
| Rails                               |
| Rain                                |
| Skulls                              |
| SquaresInSquares                    |
| Stripes                             |
| TicTacToe                           |
| ZigZag                              |
| Aztec                               |
| BankNote                            |
| Boxes                               |
| CirclesAndSquares                   |
| CircuitBoard                        |
| Curtain                             |
| DiagonalLines                       |
| EndlessClouds                       |
| Eyes                                |
| FloorTile                           |
| Groovy                              |
| IntersectingCircles                 |
| Melt                                |
| OverlappingDiamonds                 |
| ParkayFloor                         |
| PixelDots                           |
| PolkaDots                           |
| Signal                              |
| SlantedStars                        |
| Wallpaper                           |

## Release Notes

Changes are described here.

### 1.1.1

Set default for left bar to hexagon so something works right off the bat.

### 1.1.0

Added `headerPattern.sidebarPattern`to set the sidebar pattern.

### 1.0.0

Initial release

