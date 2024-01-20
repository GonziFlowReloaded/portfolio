const svg = [
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="118" height="28" role="img" aria-label="Python"><title>Python</title><g shape-rendering="crispEdges"><rect width="118" height="28" fill="#306998"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><text x="59" y="21.5" fill="#000">Python</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="118" height="28" role="img" aria-label="JavaScript"><title>JavaScript</title><g shape-rendering="crispEdges"><rect width="118" height="28" fill="#f7df1e"/></g><g fill="#000" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><text x="59" y="21.5" fill="#000">JS</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="118" height="28" role="img" aria-label="React"><title>React</title><g shape-rendering="crispEdges"><rect width="118" height="28" fill="#61dafb"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><text x="59" y="21.5" fill="#000">React</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="118" height="28" role="img" aria-label="ANACONDA"><title>ANACONDA</title><g shape-rendering="crispEdges"><rect width="118" height="28" fill="#44a833"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkFuYWNvbmRhPC90aXRsZT48cGF0aCBkPSJNMTIuMDQ1LjAzM2ExMi4xODEgMTIuMTgyIDAgMDAtMS4zNjEuMDc4IDE3LjUxMiAxNy41MTMgMCAwMTEuODEzIDEuNDMzbC40OC40MzgtLjQ2NS40NWExNS4wNDcgMTUuMDQ4IDAgMDAtMS4xMjYgMS4yMDVsLS4xNzguMjE1YTguNTI3IDguNTI3IDAgMDEuODYtLjA1IDguMTU0IDguMTU1IDAgMTEtNC4yODYgMTUuMTQ5IDE1Ljc2NCAxNS43NjUgMCAwMS0xLjg0MS4xMDZoLS44NmEyMS44NDcgMjEuODQ4IDAgMDAuMjY0IDIuODY2IDExLjk2NiAxMS45NjcgMCAxMDYuNy0yMS44OXpNOC4xNy42NzhhMTIuMTgxIDEyLjE4MiAwIDAwLTIuNjI0IDEuMjc1IDE1LjUwNiAxNS41MDcgMCAwMTEuODEzLjQzQTE4LjU1MSAxOC41NTIgMCAwMTguMTcuNjc4ek05LjQyMy43NWExNi4yMzcgMTYuMjM4IDAgMDAtLjk5NSAxLjk5OCAxNi4xNSAxNi4xNTIgMCAwMDEuNjA1LjY2IDYuOTggNi45OCAwIDAxLjQzLS41MDljLjIzNC0uMjg2LjQ3Mi0uNTU5LjcxNi0uODE3QTE1LjA0NyAxNS4wNDggMCAwMDkuNDIzLjc1ek00LjY4IDIuOTQ5YTE0Ljk2OSAxNC45NyAwIDAwMCAyLjMzNmMuNTg3LS4wNjUgMS4xOTYtLjEgMS44MTItLjEwN2ExNi42MTcgMTYuNjE3IDAgMDEuNDgtMS43NDggMTYuNDggMTYuNDgxIDAgMDAtMi4yOTItLjQ4MXpNMy42MiAzLjVBMTEuOTM4IDExLjkzOCAwIDAwMS43NjIgNS44OGExNy4wMDQgMTcuMDA0IDAgMDExLjg3Ny0uNDQ0QTE3LjM5IDE3LjM5MSAwIDAxMy42MiAzLjV6bTQuNDA2LjI4N2MtLjE0My40MzctLjI2NS44ODgtLjM4IDEuMzQ3YTguMjU1IDguMjU1IDAgMDEuMjgzLTEuNjYyem0tMi41NS0uMjE5Yy0uMTgyLjQzOC0uMzU2LjY0My0uNTU1LjcxMy0uODE3YTEyLjgxMiAxMi44MTIgMCAwMC0xLjM2MS4wNzggMTcuNTEyIDE3LjUxMiAwIDAxMS44MTMgMS40MzNsLjQ4LjQzOC40NjUtLjQ1YTE1LjA0NyAxNS4wNDggMCAwMC0xLjEyNi4xMjVhOS4wNDMgOS4wNDMgMCAwMS4zODUtLjAxNiAxNS4wNDcgMTUuMDQ3IDAgMDAxLjA5OC4wNzV6Ii8+PC9zdmc+</svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="118" height="28" role="img" aria-label="Arch Linux"><title>Arch Linux</title><g shape-rendering="crispEdges"><rect width="118" height="28" fill="#1793d1"/><rect x="95" width="23" height="28" fill="#333" fill-opacity=".1"/><rect width="94" height="28" fill="#fff"/><circle cx="6" cy="14" r="6" fill="#1793d1"/><circle cx="101" cy="14" r="6" fill="#fff"/><circle cx="6" cy="14" r="5" fill="#fff"/><circle cx="101" cy="14" r="5" fill="#333"/><rect x="21" y="6" width="72" height="16" fill="#333"/></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="118" height="28" role="img" aria-label="Golang"><title>Golang</title><g shape-rendering="crispEdges"><rect width="118" height="28" fill="#00acd7"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><text x="14" y="21.5" fill="#333">Go</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="110.75" height="28" role="img" aria-label="MONGODB"><title>MONGODB</title><g shape-rendering="crispEdges"><rect width="110.75" height="28" fill="#4ea94b"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPk1vbmdvREI8L3RpdGxlPjxwYXRoIGQ9Ik0xNy4xOTMgOS41NTVjLTEuMjY0LTUuNTgtNC4yNTItNy40MTQtNC41NzMtOC4xMTUtLjI4LS4zOTQtLjUzLS45NTQtLjczNS0xLjQ0LS4wMzYuNDk1LS4wNTUuNjg1LS41MjMgMS4xODQtLjcyMy41NjYtNC40MzggMy42ODItNC43NCAxMC4wMi0uMjgyIDUuOTEyIDQuMjcgOS40MzUgNC44ODggOS44ODRsLjA3LjA1QTczLjQ5IDczLjQ5IDAgMDExMS45MSAyNGguNDgxYy4xMTQtMS4wMzIuMjg0LTIuMDU2LjUxLTMuMDcuNDE3LS4yOTYuNjA0LS40NjMuODUtLjY5M2ExMS4zNDIgMTEuMzQyIDAgMDAzLjYzOS04LjQ2NGMuMDEtLjgxNC0uMTAzLTEuNjYyLS4xOTctMi4yMTh6bS01LjMzNiA4LjE5NXMwLTguMjkxLjI3NS04LjI5Yy4yMTMgMCAuNDkgMTAuNjk1LjQ5IDEwLjY5NS0uMzgxLS4wNDUtLjc2NS0xLjc2LS43NjUtMi40MDV6Ii8+PC9zdmc+</svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92.5" height="28" role="img" aria-label="SQLITE"><title>SQLITE</title><g shape-rendering="crispEdges"><rect width="92.5" height="28" fill="#07405e"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlNRTGl0ZTwvdGl0bGU+PHBhdGggZD0iTTIxLjY3OC41MjFjLTEuMDMyLS45Mi0yLjI4LS41NS0zLjUxMy41NDRhOC43MSA4LjcxIDAgMCAwLS41NDcuNTM1Yy0yLjEwOSAyLjIzNy00LjA2NiA2LjM4LTQuNjc0IDkuNTQ0LjIzNy40OC40MjIgMS4wOTMuNTQ0IDEuNTYxYTEzLjA0NCAxMy4wNDQgMCAwIDEgLjE2NC43MDNzLS4wMTktLjA3MS0uMDk2LS4yOTZsLS4wNS0uMTQ2YTEuNjg5IDEuNjg5IDAgMCAwLS4wMzMtLjA4Yy0uMTM4LS4zMi0uNTE4LS45OTUtLjY4Ni0xLjI4OS0uMTQzLjQyMy0uMjcuODE4LS4zNzYgMS4xNzYuNDg0Ljg4NC43NzggMi40Ljc3OCAyLjRzLS4wMjUtLjA5OS0uMTQ3LS40NDJjLS4xMDctLjMwMy0uNjQ0LTEuMjQ0LS43NzItMS40NjQtLjIxNy44MDQtLjMwNCAxLjM0Ni0uMjI2IDEuNDc4LjE1Mi4yNTYuMjk2LjY5OC40MjIgMS4xODYuMjg2IDEuMS40ODUgMi40NC40ODUgMi40NGwuMDE3LjIyNGEyMi40MSAyMi40MSAwIDAgMCAuMDU2IDIuNzQ4Yy4wOTUgMS4xNDYuMjczIDIuMTMuNSAyLjY1N2wuMTU1LS4wODRjLS4zMzQtMS4wMzgtLjQ3LTIuMzk5LS40MS0zLjk2Ny4wOS0yLjM5OC42NDItNS4yOSAxLjY2MS04LjMwNCAxLjcyMy00LjU1IDQuMTEzLTguMjAxIDYuMy05Ljk0NS0xLjk5MyAxLjgtNC42OTIgNy42My01LjUgOS43ODgtLjkwNCAyLjQxNi0xLjU0NSA0LjY4NC0xLjkzMSA2Ljg1Ny42NjYtMi4wMzcgMi44MjEtMi45MTIgMi44MjEtMi45MTJzMS4wNTctMS4zMDQgMi4yOTItMy4xNjZjLS43NC4xNjktMS45NTUuNDU4LTIuMzYyLjYyOS0uNi4yNTEtLjc2Mi4zMzctLjc2Mi4zMzdzMS45NDUtMS4xODQgMy42MTMtMS43MkMyMS42OTUgNy45IDI0LjE5NSAyLjc2NyAyMS42NzguNTIxbS0xOC41NzMuNTQzQTEuODQyIDEuODQyIDAgMCAwIDEuMjcgMi45djE2LjYwOGExLjg0IDEuODQgMCAwIDAgMS44MzUgMS44MzRoOS40MThhMjIuOTUzIDIyLjk1MyAwIDAgMS0uMDUyLTIuNzA3Yy0uMDA2LS4wNjItLjAxMS0uMTQxLS4wMTYtLjJhMjcuMDEgMjcuMDEgMCAwIDAtLjQ3My0yLjM3OGMtLjEyMS0uNDctLjI3NS0uODk4LS4zNjktMS4wNTctLjExNi0uMTk3LS4wOTgtLjMxLS4wOTctLjQzMiAwLS4xMi4wMTUtLjI0NS4wMzctLjM4NmE5Ljk4IDkuOTggMCAwIDEgLjIzNC0xLjA0NWwuMjE3LS4wMjhjLS4wMTctLjAzNS0uMDE0LS4wNjUtLjAzMS0uMDk3bC0uMDQxLS4zODFhMzIuOCAzMi44IDAgMCAxIC4zODItMS4xOTRsLjItLjAxOWMtLjAwOC0uMDE2LS4wMS0uMDM4LS4wMTgtLjA1M2wtLjA0My0uMzE2Yy42My0zLjI4IDIuNTg3LTcuNDQzIDQuOC05Ljc5MS4wNjYtLjA2OS4xMzMtLjEyOC4xOTgtLjE5NFoiLz48L3N2Zz4="/><text transform="scale(.1)" x="562.5" y="175" textLength="485" fill="#fff" font-weight="bold">SQLITE</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="105.75" height="28" role="img" aria-label="PYTORCH"><title>PYTORCH</title><g shape-rendering="crispEdges"><rect width="105.75" height="28" fill="#ee4c2c"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlB5VG9yY2g8L3RpdGxlPjxwYXRoIGQ9Ik0xMi4wMDUgMEw0Ljk1MiA3LjA1M2E5Ljg2NSA5Ljg2NSAwIDAwMCAxNC4wMjIgOS44NjYgOS44NjYgMCAwMDE0LjAyMiAwYzMuOTg0LTMuOSAzLjk4Ni0xMC4yMDUuMDg1LTE0LjAyM2wtMS43NDQgMS43NDNjMi45MDQgMi45MDUgMi45MDQgNy42MzQgMCAxMC41MzhzLTcuNjM0IDIuOTA0LTEwLjUzOCAwLTIuOTA0LTcuNjM0IDAtMTAuNTM4bDQuNjQ3LTQuNjQ2LjU4Mi0uNjY1em0zLjU2OCAzLjg5OWExLjMyNyAxLjMyNyAwIDAwLTEuMzI3IDEuMzI3IDEuMzI3IDEuMzI3IDAgMDAxLjMyNyAxLjMyOEExLjMyNyAxLjMyNyAwIDAwMTYuOSA1LjIyNiAxLjMyNyAxLjMyNyAwIDAwMTUuNTczIDMuOXoiLz48L3N2Zz4="/><text transform="scale(.1)" x="628.75" y="175" textLength="617.5" fill="#fff" font-weight="bold">PYTORCH</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="87.25" height="28" role="img" aria-label="KERAS"><title>KERAS</title><g shape-rendering="crispEdges"><rect width="87.25" height="28" fill="#d00000"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPktlcmFzPC90aXRsZT48cGF0aCBkPSJNMjQgMEgwdjI0aDI0VjB6TTguNDUgNS4xNmwuMi4xN3Y2LjI0bDYuNDYtNi40NWgxLjk2bC4yLjQtNS4xNCA1LjEgNS40NyA3Ljk0LS4yLjNoLTEuOTRsLTQuNjUtNi44OC0yLjE2IDIuMDh2NC42bC0uMTkuMkg3bC0uMi0uMlY1LjMzbC4xNy0uMTdoMS40OHoiLz48L3N2Zz4="/><text transform="scale(.1)" x="536.25" y="175" textLength="432.5" fill="#fff" font-weight="bold">KERAS</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90.25" height="28" role="img" aria-label="NUMPY"><title>NUMPY</title><g shape-rendering="crispEdges"><rect width="90.25" height="28" fill="#013243"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPk51bVB5PC90aXRsZT48cGF0aCBkPSJNMTAuMzE1IDQuODc2TDYuMzA0OCAyLjg1MTdsLTQuNDAxIDIuMTk2NSA0LjExODYgMi4wNjgzem0xLjgzODEuOTI3N2w0LjIwNDUgMi4xMjIzLTQuMzYyMiAyLjE5MDYtNC4xMjUtMi4wNzE4em01LjYxNTMtMi45MjEzbDQuMzE5MyAyLjE2NTgtMy44NjMgMS45NDAyLTQuMjEzMS0yLjEyNTJ6bS0xLjg1OS0uOTMyOUwxMi4wMjEgMCA4LjE3NDIgMS45MTkzbDQuMDA2OCAyLjAyMDh6bS0zLjA0MDEgMTYuNzQ0M1YyNGw0LjcxMDctMi4zNTA3LS4wMDUzLTUuMzA4NXptNC43MDM3LTQuMjA1N2wtLjAwNTItNS4yNTI4LTQuNjk4NSAyLjMzNTZ2NS4yNTQ2em01LjY1NTMtLjk4NDV2NS4zMjdsLTQuMDE3OCAyLjAwNS0uMDAyOS01LjMwMjggbTEtMS44NjI2VjYuNDIxNGwtNC4wMjUzIDIuMDAxLjAwMzQgNS4yNjMzek0xMS4yMDYyIDExLjU3MUw4LjAzMzMgOS45NzU2djYuODk1eS0zLjg4MDQtOC4yNTY0LTQuMjM5OS04Ljk5OGMtLjA0NjMtLjA5NTctLjIzNzEtLjIwMDctLjI4NTgtLjIyNjJDMi44MTE4IDcuMjgxMi43NzMgNi4yNDg1Ljc3MyA2LjI0ODVWMTE4LjQzbDIuODIwNCAxLjUwNzZ2LTYuMzY3NHMzLjgzOTIgNy4zNzc1IDMuODc4IDcuNDU4Yy4wMzg5LjA4MDcuNDI0NS44NTgyLjgzNjIgMS4xMzE0LjU0ODUuMzYzIDIuODk5MiAxLjc3NjYgMi44OTkyIDEuNzc2NnoiLz48L3N2Zz4=</image><text transform="scale(.1)" x="551.25" y="175" textLength="462.5" fill="#fff" font-weight="bold">NUMPY</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="97.5" height="28" role="img" aria-label="PANDAS"><title>PANDAS</title><g shape-rendering="crispEdges"><rect width="97.5" height="28" fill="#150458"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPnBhbmRhczwvdGl0bGU+PHBhdGggZD0iTTE2LjkyMiAwaDIuNjIzdjE4LjEwNGgtMi42MjN6bS00LjEyNiAxMi45NGgyLjYyM3YyLjU3aC0yLjYyM3ptMC03LjAzN2gyLjYyM3Y1LjQ0NmgtMi42MjN6bTAgMTEuMTk3aDIuNjIzdjUuNDQ2aC0yLjYyM3pNNC40NTYgNS44OTZoMi42MjJWMjRINC40NTV6bTQuMjEzIDIuNTU5aDIuNjIzdjIuNTdIOC42N3ptMCA0LjE1MWgyLjYyM3Y1LjQ0N0g4LjY3em0wLTExLjE4N2gyLjYyM3Y1LjQ0Nkg4LjY3WiIvPjwvc3ZnPg=="/><text transform="scale(.1)" x="587.5" y="175" textLength="535" fill="#fff" font-weight="bold">PANDAS</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="93.5" height="28" role="img" aria-label="PLOTLY"><title>PLOTLY</title><g shape-rendering="crispEdges"><rect width="93.5" height="28" fill="#3f4f75"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBsb3RseTwvdGl0bGU+PHBhdGggZD0iTTIuMDIxIDBDLjk2NyAwIC4xMTEuODgzLjExMSAxLjk3M3YyMC4wNTRjMCAxLjA5Ljg1NyAxLjk3MyAxLjkxIDEuOTczSDIxLjk4YzEuMDU0IDAgMS45MS0uODg0IDEuOTEtMS45NzNWMS45NzNDMjMuODkuODgzIDIzLjAzNCAwIDIxLjk4IDBIMi4wMnpNMTAuMSA0LjY0OGEuNzIuNzIgMCAwIDEgLjMwNC4xMjcgMS4xOTYgMS4xOTYgMCAwIDEgLjM1Ni4zNzMuMjEyLjIxMiAwIDAgMSAuMDg0LjE2M2MuMTY1LjM4OC4xMzUuODU3LS4xNDkgMS4yMDMtLjE5LjIzMi0uNDI5LjMwNS0uNjQ4LjI2M2EuMjQxLjI0MSAwIDAgMS0uMDk2LjA0Yy0uNDEuMTMtLjg4NC0uMjE4LS45OTQtLjY2My0uMDY1LS4yNi0uMDg3LS42NzQuMDc2LS45MDhhLjM2Ny4zNjcgMCAwIDEgLjA4Mi0uMDg2LjkxNy45MTcgMCAwIDEgLjA1LS4yNjRjLjA3Ny0uMjE0LjI1Ni0uMjE0LjQyNS0uMTQ4YS41NDIuNTQyIDAgMCAxIC4wOS0uMDA2IDEuOTM4IDEuOTM4IDAgMCAxIC4xNTguMDA4LjI3Ny4yNzcgMCAwIDEgLjI2Mi0uMTAyem04LjQzIDBjLjA5OC4wMTIuMjA0LjA2LjMwNC4xMjdhMS4xOTYgMS4xOTYgMCAwIDEgLjM1NS4zNzMuMjEyLjIxMiAwIDAgMSAuMDg0LjE2M2MuMTY2LjM4OC4xMzYuODU3LS4xNDggMS4yMDMtLjE5LjIzMi0uNDMuMzA1LS42NDguMjYzYS4yNDEuMjQxIDAgMCAxLS4wOTYuMDRjLS40MS4xMy0uODg1LS4yMTgtLjk5NC0uNjYzLS4wNjUtLjI2LS4wODctLjY3NC4wNzYtLjkwOGEuMzY3LjM2NyAwIDAgMSAuMDgyLS4wODYuOTEuOTEgMCAwIDEgLjA0OS0uMjY0Yy4wNzctLjIxNC4yNTYtLjIxNC40MjQtLjE0OGEuNTcuNTcgMCAwIDEgLjA5MS0uMDA2IDEuOTM4IDEuOTM4IDAgMCAxIC4xNTkuMDA4LjI3Ny4yNzcgMCAwIDEgLjI2MS0uMTAyem0tMTMuMTU5LjE2Yy4yMjQtLjAxMy40NjEuMDYzLjY0OS4xOThhMS4wNjkgMS4wNjkgMCAwIDEgLjIzLjIyMyAxLjUxOCAxLjUxOCAwIDAgMSAuMDU5LjAzOWMuMzQxLjI0NC4zMTIuNjc5LjA3NC45OTJsLS4wMDQuMDA4YS45MS45MSAwIDAgMS0uODk3LjU1OGMtLjMwMi0uMDA4LS42MTEtLjA4NC0uODItLjI3MS0uMi0uMTQzLS4zNC0uMzU2LS4zMzItLjYyN2EuMTMxLjEzMSAwIDAgMSAuMDkyLS4xMjcgMS4wNDIgMS4wNDIgMCAwIDEgLjM0Mi0uNi43MDQuNzA0IDAgMCAxIC42MDctLjM5M3ptOC42ODIuMDAzYy4yMjQtLjAxNC40NjEuMDYuNjQ4LjE5NWExLjA2OSAxLjA2OSAwIDAgMSAuMjI5LjIyNCAxLjUxOCAxLjUxOCAwIDAgMSAuMDU4LjA0Yy4zNDIuMjQ0LjMxNS42NzkuMDc2Ljk5MmwtLjAwNS4wMDZhLjkwNy45MDcgMCAwIDEtLjg5NS41NThjLS4zMDItLjAwOC0uNjE0LS4wODQtLjgyMi0uMjcxYS43My43MyAwIDAgMS0uMzMtLjYyNy4xMzEuMTMxIDAgMCAxIC4wOTItLjEyNSAxLjA0IDEuMDQgMCAwIDEgLjM0LS42LjcwNS43MDUgMCAwIDEgLjYxLS4zOTN6bS04LjI4Mi40OTZhLjU2My41NjMgMCAwIDEgLjAzNC4wNGwuMDExLjAwNWEuMTI2LjEyNiAwIDAgMSAuMDg4LjA3Ni41OTYuNTk2IDAgMCAxIC4yMjUuMTI1LjY1OS42NTkgMCAwIDAtLjA3OC0uMTM1IDEuMTYxIDEuMTYxIDAgMCAwLS4yOC0uMTExem04LjY4IDBhLjU2My41NjMgMCAwIDEgLjAzMy4wNGwuMDEyLjAwNWMuMDM5LjAwNy4wNy4wMzguMDg4LjA3NmEuNTk2LjU5NiAwIDAgMSAuMjI1LjEyNS42NTkuNjU5IDAgMCAwLS4wNzktLjEzNSAxLjE1MyAxLjE1MyAwIDAgMC0uMjc5LS4xMTF6bS00LjU1My4xMTlhMS45MTIgMS45MTIgMCAwIDAtLjAwNS4yOTVjLjA3NS0uMDQyLjA4MS0uMTcuMDY0LS4yNjJhLjMyMi4zMjIgMCAwIDAtLjA1OS0uMDMzem04LjQyOCAwYTEuOTQzIDEuOTQzIDAgMCAwLS4wMDQuMjk1Yy4wNzYtLjA0Mi4wOC0uMTcuMDYzLS4yNjJsLS4wMi0uMDE0YS4zMDMuMzAzIDAgMCAwLS4wMzktLjAyek01LjU1IDUuNjVsLS4wODYuMDI4LjAxLjA0Yy4wNTctLjAzMi4xMzMtLjAyOC4xNzUuMDI4YS40MzUuNDM1IDAgMCAwLS4wMDMtLjA1Ny4zMzUuMzM1IDAgMCAxLS4wNzUtLjAyM2MtLjAwOC0uMDA0LS4wMTQtLjAxLS4wMjEtLjAxNnptOC42OCAwbC0uMDg2LjAyOC4wMTEuMDRjLjA1Ny0uMDMyLjEzNC0uMDI4LjE3Ni4wMjhhLjQzNS40MzUgMCAwIDAtLjAwNC0uMDU3LjMzNS4zMzUgMCAwIDEtLjA3NC0uMDIzLjE1My4xNTMgMCAwIDEtLjAyMy0uMDE2em0tOS4wMzIuMDg4Yy4wMDMuMDE3LjAwNS4wMzYuMDEuMDUzYS44ODguODg4IDAgMCAwIC4wMjMuMDc4Yy0uMDI2LS4wMjktLjAzOC0uMDczLS4wMzMtLjEzem04LjY4LjAwMmEuODY2Ljg2NiAwIDAgMCAuMDMzLjEzYy0uMDI2LS4wMjktLjAzOC0uMDcyLS4wMzMtLjEzem0tMy4xOC4wMmwtLjAxMS4wMTdhLjM4LjM4IDAgMCAxLS4xMy4yMzcuMTgzLjE4MyAwIDAgMC0uMDAxLjAwNi4xMTkuMTE5IDAgMCAxLS4wNC4xMTkuOS45IDAgMCAxLS4wMjkuMDY0IDEuODYyIDEuODYyIDAgMCAxLS4xNDguMjg1LjU3Mi41NzIgMCAwIDAgLjIxNy0uMjA1Yy4xLS4xNTYuMTQ3LS4zNC4xNDItLjUyM3ptOC40MyAwbC0uMDEyLjAxN2EuMzc4LjM3OCAwIDAgMS0uMTI5LjIzN2MwIC4wMDEgMCAuMDA0LS4wMDIuMDA2LjAxMy4wNDMtLjAwNS4wODgtLjAzOS4xMTlhMS4xNjMgMS4xNjMgMCAwIDEtLjAyOS4wNjQgMS44NjIgMS44NjIgMCAwIDEtLjE0OC4yODUuNTY2LjU2NiAwIDAgMCAuMjE2LS4yMDVjLjEtLjE1Ni4xNDgtLjM0LjE0My0uNTIzem0tOS45NjEuMDM5YTEuMzE0IDEuMzE0IDAgMCAwIC4wMDQuMTMzYy4wMTcuMTg1LjA3OC4zODMuMjE5LjUxM2EuNTkuNTkgMCAwIDAgLjA4Ni4wNjcgMS4wMzggMS4wMzggMCAwIDEtLjE0My0uMjc4IDIuNTY1IDIuNTY1IDAgMCAxLS4xNjYtLjQzNXptOC40MyAwYTEuMzE0IDEuMzE0IDAgMCAwIC4wMDQuMTMzYy4wMTcuMTg1LjA3OC4zODMuMjE4LjUxM2EuNTkuNTkgMCAwIDAgLjA4Ni4wNjcgMS4wNTQgMS4wNTQgMCAwIDEtLjE0Mi0uMjc4IDIuNTIyIDIuNTIyIDAgMCAxLS4xNjYtLjQzNXptLTExLjY3LjE0NmEuNDM0LjQzNCAwIDAgMS0uMDI4LjA2NWwuMDM2LjA2OGEuMjM4LjIzOCAwIDAgMC0uMDA4LS4xMzN6bTguNjgxIDBhLjUxLjUxIDAgMCAxLS4wMjkuMDY1bC4wMzUuMDY4YS4yNDEuMjQxIDAgMCAwLS4wMDYtLjEzM3ptLTkuMDkuNDFhLjYxLjYxIDAgMCAxLS4xOC4wMzhsLS4wMTMuMDE1YS41MzIuNTMyIDAgMCAwIC4yMjktLjAxMy40OTUuNDk1IDAgMCAxLS4wMzUtLjA0em04LjY4IDBhLjYxLjYxIDAgMCAxLS4xOC4wMzhsLS4wMTMuMDE1YS41MzIuNTMyIDAgMCAwIC4yMjgtLjAxMy42MjUuNjI1IDAgMCAxLS4wMzUtLjA0em0tNC4zMDggMi4zYTEuMDYxIDEuMDYxIDAgMCAxIDEuMDUyIDEuMDcydjguNThjMCAuNTkyLS40NyAxLjA3Mi0xLjA1MiAxLjA3Mi0uNTgzIDAtMS4wNTUtLjQ4LTEuMDU1LTEuMDcydi04LjU4YzAtLjU5Mi40NzItMS4wNzIgMS4wNTUtMS4wNzN6bTguNDMxIDBhMS4wNjIgMS4wNjIgMCAwIDEgMS4wNTMgMS4wNzJ2OC41OGMwIC41OTItLjQ3IDEuMDcyLTEuMDUzIDEuMDcyLS41ODIgMC0xLjA1NC0uNDgtMS4wNTQtMS4wNzJ2LTguNThjMC0uNTkyLjQ3Mi0xLjA3MiAxLjA1NC0xLjA3M3ptLTEyLjk1LjEwNWMuMjI0LS4wMTMuNDYxLjA2LjY0OS4xOTVhMS4wNzUgMS4wNzUgMCAwIDEgLjIzLjIyNSAxLjg3MSAxLjg3MSAwIDAgMSAuMDU5LjAzOWMuMzQxLjI0NC4zMTIuNjc5LjA3NC45OTJsLS4wMDQuMDA2YS45MS45MSAwIDAgMS0uODk3LjU1OGMtLjMwMi0uMDA3LS42MTEtLjA4My0uODItLjI3MS0uMi0uMTQyLS4zNC0uMzU0LS4zMzItLjYyNWEuMTMxLjEzMSAwIDAgMSAuMDkyLS4xMjcgMS4wNDIgMS4wNDIgMCAwIDEgLjM0Mi0uNi43MDEuNzAxIDAgMCAxIC42MDctLjM5M3ptOC42ODIgMGMuMjI0LS4wMTMuNDYxLjA2LjY0OC4xOTVhMS4wNzUgMS4wNzUgMCAwIDEgLjIyOS4yMjUgMS44NzEgMS44NzEgMCAwIDEgLjA1OC4wMzljLjM0Mi4yNDQuMzE1LjY3OS4wNzYuOTkybC0uMDA1LjAwNmEuOTA3LjkwNyAwIDAgMS0uODk1LjU1OGMtLjMwMi0uMDA3LS42MTQtLjA4My0uODIyLS4yNzFhLjcyNy43MjcgMCAwIDEtLjMzLS42MjUuMTMxLjEzMSAwIDAgMSAuMDkyLS4xMjcgMS4wNCAxLjA0IDAgMCAxIC4zNC0uNi43MDUuNzA1IDAgMCAxIC42MS0uMzkzem0tOC4yODIuNDk2YS41NjcuNTY3IDAgMCAxIC4wMzQuMDQzbC4wMTEuMDAyYS4xMjYuMTI2IDAgMCAxIC4wODguMDc2LjU5OS41OTkgMCAwIDEgLjIyNS4xMjUuNjU5LjY1OSAwIDAgMC0uMDc4LS4xMzMgMS4yMSAxLjIxIDAgMCAwLS4yOC0uMTEzem04LjY4IDBhLjU2Ny41NjcgMCAwIDEgLjAzMy4wNDNsLjAxMi4wMDJjLjAzOS4wMDcuMDcuMDM4LjA4OC4wNzZhLjU5OS41OTkgMCAwIDEgLjIyNS4xMjUuNjU5LjY1OSAwIDAgMC0uMDc5LS4xMzMgMS4yIDEuMiAwIDAgMC0uMjc5LS4xMTN6TTUuNTUgOS42bC0uMDg2LjAyNy4wMS4wNDFjLjA1Ny0uMDMyLjEzMy0uMDI5LjE3NS4wMjdhLjQzNy40MzcgMCAwIDAtLjAwMy0uMDU0LjMyMy4zMjMgMCAwIDEtLjA3NS0uMDI2Yy0uMDA4LS4wMDQtLjAxNC0uMDEtLjAyMS0uMDE1em04LjY4IDBsLS4wODYuMDI3LjAxMS4wNDFjLjA1Ny0uMDMyLjEzNC0uMDI5LjE3Ni4wMjdhLjQzNy40MzcgMCAwIDAtLjAwNC0uMDU0LjMyMy4zMjMgMCAwIDEtLjA3NC0uMDI2LjE1My4xNTMgMCAwIDEtLjAyMy0uMDE1em0tOS4wMzIuMDlhLjU3NS41NzUgMCAwIDAgLjAzMi4xMjMuMTY0LjE2NCAwIDAgMS0uMDMyLS4xMjR6bTguNjggMGEuNTc1LjU3NSAwIDAgMCAuMDMxLjEyMy4xNjkuMTY5IDAgMCAxLS4wMzEtLjEyNHptLTcuOTUxLjIwNmEuNDE5LjQxOSAwIDAgMS0uMDI4LjA2MyAxOC4zNTggMTguMzU4IDAgMCAxIC4wMzYuMDcuMjM3LjIzNyAwIDAgMC0uMDA4LS4xMzN6bTguNjgxIDBhLjQxOS40MTkgMCAwIDEtLjAyOS4wNjMgMTguMzU4IDE4LjM1OCAwIDAgMSAuMDM1LjA3LjI0MS4yNDEgMCAwIDAtLjAwNi0uMTMzem0tOS4wOS40MDlhLjYyNy42MjcgMCAwIDEtLjE4LjAzN3YuMDAybC0uMDEzLjAxNWEuNTQ4LjU0OCAwIDAgMCAuMjI5LS4wMTUuNjEuNjEgMCAwIDEtLjAzNS0uMDR6bTguNjggMGEuNjI3LjYyNyAwIDAgMS0uMTguMDM3di4wMDJsLS4wMTMuMDE1YS41NDguNTQ4IDAgMCAwIC4yMjgtLjAxNWwtLjAzNS0uMDR6bS04LjUyNSAyLjY0Yy41ODIgMCAxLjA1My40OCAxLjA1MyAxLjA3M3Y0LjI4OWMwIC41OTItLjQ3IDEuMDcyLTEuMDUzIDEuMDcyLS41ODIgMC0xLjA1NS0uNDgtMS4wNTUtMS4wNzJ2LTQuMjljMC0uNTkyLjQ3My0xLjA3MiAxLjA1NS0xLjA3MnptOC40MzIgMGMuNTgxIDAgMS4wNTQuNDggMS4wNTQgMS4wNzN2NC4yODljMCAuNTkyLS40NzMgMS4wNzItMS4wNTQgMS4wNzItLjU4MyAwLTEuMDUzLS40OC0xLjA1My0xLjA3MnYtNC4yOWMwLS41OTIuNDctMS4wNzIgMS4wNTMtMS4wNzJaIi8+PC9zdmc+"/><text transform="scale(.1)" x="567.5" y="175" textLength="495" fill="#fff" font-weight="bold">PLOTLY</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="140" height="28" role="img" aria-label="SCIKIT-LEARN"><title>SCIKIT-LEARN</title><g shape-rendering="crispEdges"><rect width="140" height="28" fill="#f7931e"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPnNjaWtpdC1sZWFybjwvdGl0bGU+PHBhdGggZD0iTTE1LjYwMSA1LjUzYy0xLjkxLjAzNS0zLjk4MS45MS01LjYzIDIuNTYtMi45MyAyLjkzLTIuMDgzIDguNTMtMS4wODggOS41MjUuODA1LjgwNCA2LjU5NSAxLjg0MyA5LjUyNi0xLjA4OGE5Ljc0IDkuNzQgMCAwIDAgLjU4NC0uNjQzYy4wNDMtLjI5Mi4yMDUtLjY2LjQ4OS0xLjEwNmExLjg0OCAxLjg0OCAwIDAgMS0uNTM3LjE3NmMtLjE0NC4yNjUtLjM3LjU1LS42NzYuODU1LS4zNTQuMzM1LS42MDcuNTU0LS43Ni42NTZhLjc5NS43OTUgMCAwIDEtLjQzNy4xNTJjLS4zNSAwLS41MTQtLjMwOC0uNDk0LS45MjQtLjIyLjMxNi0uNDI1LjU0OS0uNjEyLjdhLjkxNC45MTQgMCAwIDEtLjU3OC4yMjRjLS4xOTQgMC0uMzYtLjA5LS40OTYtLjI3M2ExLjAzIDEuMDMgMCAwIDEtLjE5My0uNTA3IDQuMDE2IDQuMDE2IDAgMCAxLS43MjYuNTgzYy0uMjI0LjEzMi0uNDcuMTk3LS43NC4xOTctLjMgMC0uNTQzLS4wOTYtLjcyNy0uMjg4YS45NzguOTc4IDAgMCAxLS4yNTctLjUyNHYuMDA0Yy0uMy4yNzYtLjU2NC40OC0uNzkuNjExYTEuMjk1IDEuMjk1IDAgMCAxLS42NDkuMTk3LjY5My42OTMgMCAwIDEtLjU3MS0uMjc1Yy0uMTQ1LS4xODMtLjIxOC0uNDMtLjIxOC0uNzM5IDAtLjQ2NC4xMDEtMS4wMi4zMDItMS42Ny4yMDEtLjY1LjQ0NS0xLjI1LjczMy0xLjc5N2wuODQyLS4zMTJhLjIxLjIxIDAgMCAxIC4wNi0uMDEzYy4wNjMgMCAuMTE2LjA0Ny4xNTcuMTQuMDQuMDk1LjA2MS4yMjEuMDYxLjM4IDAgLjQ1MS0uMTA0Ljg4OC0uMzEyIDEuMzEtLjIwNy40MjItLjUzMi44NzMtLjk3NCAxLjM1Mi0uMDE4LjIzLS4wMjcuMzg4LS4wMjcuNDc0IDAgLjE5My4wMzYuMzQ1LjEwNi40NTguMDcxLjExMy4xNjUuMTY5LjI4Mi4xNjlhLjcxLjcxIDAgMCAwIC4zODItLjEzYy4xMzItLjA4NC4zMzMtLjI2LjYwMi0uNTIzLjAyOC0uNDE4LjE4Ny0uNzk4LjQ4Mi0xLjE0Mi4zMjQtLjM4LjY4NS0uNTY5IDEuMDgtLjU2OS4yMDYgMCAuMzcuMDU0LjQ5NC4xNmEuNTI0LjUyNCAwIDAgMSAuMTg2LjQxN2MwIC40NTgtLjQ4Ni44MjktMS40NTkgMS4xMTQuMDg4LjQzLjMyLjY0Ni42OTMuNjQ2YS44MDcuODA3IDAgMCAwIC40MTctLjExN2MuMTI5LS4wNzYuMzIxLS4yNDMuNTc1LS40OTcuMDMyLS4yNTIuMTE4LS40OTUuMjU5LS43MjguMTgyLS4zLjQxNi0uNTQ0LjcwMS0uNzMuMjg1LS4xODUuNTM3LS4yNzguNzU2LS4yNzguMjc2IDAgLjQ3LjEyNy41OC4zODFsLjY3Ny0uMzc0aC4xODZsLS4yOTIuOTcxYy0uMTUuNDg4LS4yMjYuODIzLS4yMjYgMS4wMDQgMCAuMTkuMDY3LjI4NS4yMDIuMjg1LjA4NiAwIC4xODEtLjA0NS4yODUtLjEzNy4xMDQtLjA5Mi4yNS0uMjMyLjQzNy0uNDJ2LjAwMWMuMTQzLS4xNTUuMjc0LS4zMi4zOTItLjQ5NC0uMTktLjA4NC0uMjg1LS4yMS0uMjg1LS4zNzUgMC0uMTcuMDU4LS4zNTIuMTc0LS41NDUuMTE2LS4xOTQuMjc1LS4yOS40NzktLjI5LjE3MiAwIC4yNTguMDg4LjI1OC4yNjUgMCAuMTM5LS4wNS4zMzgtLjE0OS41OTYuMzY3LS4wNC42ODctLjMyLjk2MS0uODQybC4yMjgtLjAxYzEuMDU5LTIuNDM4LjgyOC01LjA3NS0uODMtNi43MzItMS4wMTktMS4wMi0yLjQwOC0xLjUtMy44OTUtMS40NzF6bTQuNzI1IDguMjAzYTguOTM4IDguOTM4IDAgMCAxLTEuMzMzIDIuMTUxIDEuMDkgMS4wOSAwIDAgMC0uMDEyLjE0N2MwIC4xNjguMDQ3LjMwOS4xNC40MjMuMDkyLjExMy4yMDYuMTcuMzQuMTcuMjk2IDAgLjcxNC0uMjY0IDEuMjU0LS43ODctLjAwMS4wNC0uMDAzLjA4LS4wMDMuMTIxIDAgLjE0Ni4wMTIuMzY4LjAzNi42NjZsLjczMy0uMTcyYzAtLjIuMDAzLS4zNTcuMDEtLjQ3NC4wMS0uMTU3LjAzMy0uMzMuMDY2LS41MTcuMDItLjExLjA3LS4yMTYuMTUyLS4zMTVsLjE4Ni0uMjE2YTUuMjc2IDUuMjc2IDAgMCAxIC4zNzgtLjM5N2MuMDYyLS4wNTUuMTE2LS4wOTkuMTYyLS4xM2EuMjYuMjYgMCAwIDEgLjEyMy0uMDQ2Yy4wNTUgMCAuMDgzLjAzNS4wODMuMTA2IDAgLjA3LS4wNTIuMjM2LS4xNTYuNDk3LS4xOTQuNDg2LS4yOTIuODQ4LS4yOTIgMS4wODQgMCAuMTc1LjA0Ni4zMTQuMTM2LjQxOGEuNDUuNDUgMCAwIDAgLjM1OC4xNTVjLjM2NSAwIC44MDMtLjI2OSAxLjMxMy0uODA4di0uMzgxYy0uMzYxLjQyNi0uNjIzLjY0LS43ODQuNjQtLjEwOSAwLS4xNjMtLjA2Ny0uMTYzLS4yIDAtLjEuMDY1LS4zMTYuMTk1LS42NS4xOS0uNDg2LjI4NS0uODM2LjI4NS0xLjA0OGEuNDY0LjQ2NCAwIDAgMC0uMTEyLS4zMTkuMzYuMzYgMCAwIDAtLjI4Mi0uMTI3Yy0uMTY1IDAtLjM1NC4wNzctLjU2Ny4yMzMtLjIxMy4xNTYtLjUuNDM2LS44NjMuODQuMDUzLS4yNjIuMTY1LS42MjIuMzM1LTEuMDhsLS44MDkuMTU2YTYuNTQgNi41NCAwIDAgMC0uMzk5IDEuMDc0Yy0uMDQuMTU2LS4wNy4zMTYtLjA5Mi40OGE3LjQ0NyA3LjQ0NyAwIDAgMS0uNDkuNDUuMzguMzggMCAwIDEtLjIyOS4wOC4yMDguMjA4IDAgMCAxLS4xNzQtLjA4Mi4zNTIuMzUyIDAgMCAxLS4wNjQtLjIyMmMwLS4xLjAxOS0uMjE0LjA1Ni0uMzQzLjAzOC0uMTMuMTItLjM3My4yNDktLjczMWwuMzA4LS44NDl6bS0xNy4yMS0yLjkyN2MtLjg2My0uMDE2LTEuNjcuMjYzLTIuMjYxLjg1NC0xLjM1MiAxLjM1Mi0xLjA3IDMuODI3LjYzMSA1LjUyNyAxLjcgMS43MDEgNC45NSAxLjIxIDUuNTI3LjYzMi40NjctLjQ2NiAxLjA3LTMuODI3LS42MzEtNS41MjctLjk1Ny0uOTU3LTIuMTU4LTEuNDY1LTMuMjY3LTEuNDg2em0xMi4yODUuMzU4aC4xNjZ2LjIxSDE1LjR6bS40MjcgMGguMTY2di44NjVsLjQ2LS40NTVoLjE5NWwtLjM2NC4zNjIuNDI4LjY4NGgtLjE5OGwtLjM1Ny0uNTc1LS4xNjQuMTY2di40MWgtLjE2NnptMS4wMTYgMGguMTY2di4yMWgtLjE2NnptLjQ4MS4xMjJoLjE2NnYuMjg4aC4xNzJ2LjEzNWgtLjE3MnYuNzE3YzAgLjAzNy4wMDYuMDYyLjAyLjA3NS4wMTIuMDEzLjAzNy4wMi4wNzQuMDJhLjIzLjIzIDAgMCAwIC4wNzgtLjAxdi4xNDFhLjgwMi44MDIgMCAwIDEtLjEzNi4wMTQuMjMuMjMgMCAwIDEtLjE1LS4wNDMuMTUuMTUgMCAwIDEtLjA1Mi0uMTIzdi0uNzloLS4xNDF2LS4xMzZoLjE0MXptLTMuNTYyLjI1OGMuMDgxIDAgLjE1LjAxMi4yMDcuMDM4LjA1Ny4wMjQuMS4wNjEuMTMuMTFzLjA0NS4xMDYuMDQ1LjE3M2gtLjE3NmMtLjAwNi0uMTExLS4wNzUtLjE2Ny0uMjA4LS4xNjdhLjI4NS4yODUgMCAwIDAtLjE2NC4wNDEuMTM0LjEzNCAwIDAgMC0uMDYuMTE3YzAgLjAzNS4wMTUuMDY1LjA0NS4wODguMDMuMDI0LjA4LjA0NC4xNS4wNmwuMTYuMDM5YS40Ny40NyAwIDAgMSAuMjI0LjEwNWMuMDQ3LjA0Ni4wNy4xMDguMDcuMTg2YS4zLjMgMCAwIDEtLjA1Mi4xNzUuMzI3LjMyNyAwIDAgMS0uMTUyLjExNi41ODUuNTg1IDAgMCAxLS4yMjYuMDQxYy0uMTM2IDAtLjI0LS4wMy0uMzA5LS4wODgtLjA2OS0uMDU5LS4xMDUtLjE0OS0uMTA5LS4yNjloLjE3NmMuMDA0LjAzNy4wMS4wNjUuMDE3LjA4NGEuMTY2LjE2NiAwIDAgMCAuMDM0LjA1NGMuMDQ0LjA0My4xMTIuMDY1LjIwNC4wNjVhLjMxLjMxIDAgMCAwIC4xNzctLjA0NS4xMzkuMTM5IDAgMCAwIC4wNjctLjExOS4xMTYuMTE2IDAgMCAwLS4wMzgtLjA5LjI4Ny4yODcgMCAwIDAtLjEyNC0uMDU1bC0uMTU2LS4wMzhhMS4yNDggMS4yNDggMCAwIDEtLjE1OS0uMDUuMzU5LjM1OSAwIDAgMS0uMDk4LS4wNjEuMjIuMjIgMCAwIDEtLjA1OC0uMDgzLjMyLjMyIDAgMCAxLS4wMTYtLjEwOGMwLS4wOTYuMDM2LS4xNzQuMTA5LS4yMzJhLjQ1LjQ1IDAgMCAxIC4yOS0uMDg3em0xLjAzNSAwYS40Ni40NiAwIDAgMSAuMjAyLjA0My4zNTEuMzUxIDAgMCAxIC4xODcuMjEyLjU3Ny41NzcgMCAwIDEgLjAyMy4xMjZoLS4xNjhhLjI1Ni4yNTYgMCAwIDAtLjA3OC0uMTY4LjI0Mi4yNDIgMCAwIDAtLjE3LS4wNi4yNDguMjQ4IDAgMCAwLS4xNTUuMDUuMzA2LjMwNiAwIDAgMC0uMS4xNDQuNjYyLjY2MiAwIDAgMC0uMDM0LjIyNC41OC41OCAwIDAgMCAuMDM1LjIxNC4yOTkuMjk5IDAgMCAwIC4xMDEuMTM1LjI2MS4yNjEgMCAwIDAgLjE1Ny4wNDhjLjE0MiAwIC4yMjctLjA4NC4yNTYtLjI1MmguMTY3YS41MTkuNTE5IDAgMCAxLS4wNjUuMjIuMzUuMzUgMCAwIDEtLjE0Ni4xMzguNDY0LjQ2NCAwIDAgMS0uMjE2LjA0OC40NDguNDQ4IDAgMCAxLS4yNDYtLjA2Ni40NDEuNDQxIDAgMCAxLS4xNjEtLjE5Mi43MDMuNzAzIDAgMCAxLS4wNTctLjI5M2MwLS4wODUuMDEtLjE2My4wMzItLjIzM2EuNTIyLjUyMiAwIDAgMSAuMDk1LS4xODIuNDAzLjQwMyAwIDAgMSAuMTUtLjExNy40NTMuNDUzIDAgMCAxIC4xOTEtLjA0em0uNjAzLjAzaC4xNjZ2MS4wNDZIMTUuNHptMS40NDMgMGguMTY2djEuMDQ2aC0uMTY2em0tNS4wNS42MThjLS4wOCAwLS4yLjIwNC0uMzU2LjYxMS0uMTU1LjQwNy0uMzA4Ljk3Ny0uNDU5IDEuNzEuMjgxLS4zMTIuNTA5LS42NjIuNjgzLTEuMDUuMTc1LS4zODcuMjYyLS43Mi4yNjItLjk5OWEuNDU1LjQ1NSAwIDAgMC0uMDM2LS4xOTdjLS4wMjUtLjA1LS4wNTYtLjA3NS0uMDkzLS4wNzV6bTQuNjYyIDEuNzk3Yy0uMjIxIDAtLjQzMS4xODgtLjYyOS41NjMtLjE5Ny4zNzYtLjI5Ni43MjItLjI5NiAxLjAzOCAwIC4xMi4wMjkuMjE2LjA4OC4yOWEuMjczLjI3MyAwIDAgMCAuMjIzLjExMWMuMjIxIDAgLjQzLS4xODguNjI1LS41NjUuMTk2LS4zNzcuMjk0LS43MjUuMjk0LTEuMDQzYS40NTcuNDU3IDAgMCAwLS4wODMtLjI5LjI2OS4yNjkgMCAwIDAtLjIyMi0uMTA0em0tMi44NDguMDA3Yy0uMTQ2IDAtLjI4NS4xMS0uNDE3LjMzMy0uMTMzLjIyMi0uMi41MS0uMi44NjYuNTY2LS4xNTkuODQ5LS40NTIuODQ5LS44ODEgMC0uMjEyLS4wNzctLjMxOC0uMjMyLS4zMThaIi8+PC9zdmc+"/><text transform="scale(.1)" x="800" y="175" textLength="960" fill="#fff" font-weight="bold">SCIKIT-LEARN</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="84.25" height="28" role="img" aria-label="SCIPY"><title>SCIPY</title><g shape-rendering="crispEdges"><rect width="84.25" height="28" fill="#0c55a5"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjOENBQUU2IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U2NpUHk8L3RpdGxlPjxwYXRoIGQ9Ik0xNS42OTcgMTMuNDk2Yy0uNzg0LTEuMDcyLTEuOTgyLTEuNTE5LTMuNjk0LTEuODhsLTEuNTkyLS4zNzUtMS4yMDEtLjUxNWMtLjYzMS0uNDQ2LTEuMTctMS42MzQtMS4wMTctMi42ODFhMyAzIDAgMCAxIDMuMzg2LTIuNTI2IDIuOTYyIDIuOTYyIDAgMCAxIDEuOTYyIDEuMTU1TDE1LjM1IDkuMDVjMS4wMzMgMS4zMyAyLjE5NSAxLjcyNyAzLjQ1OSAxLjA5OGwuNjM3LS4yN2EuMjIuMjIgMCAwIDEgLjI3OC4wODdsLjEyNy4xOWEuMzExLjMxMSAwIDAgMCAuMTU2LjEzMS4zMjYuMzI2IDAgMCAwIC4zMy0uMDU4bDEuNDY3LTEuMzg0Yy4yNTctLjIyLjE4Mi0uNDIyLjE4Mi0uNDIybC0uMzU0LS44MDZzLS4wOTctLjE5My0uNDMxLS4xNDlsLTEuOTY4LjE4MWEuMzI3LjMyNyAwIDAgMC0uMjcuNDExbC4wNzEuMjI3Yy4wMTQuMDQ3LjAxNC4xLS4wMDUuMTQ4YS4yMTkuMjE5IDAgMCAxLS4xMjQuMTI1bC0uNTU2LjIzNWMtLjU4Mi4zNDEtMS4yNDQuMTIzLTEuNjg2LS40MTdsLS41MDUtLjY3LTEuNDM4LTEuOTFhNC40MjEgNC40MjEgMCAwIDAtMi45MjktMS43MkM5LjM1NSAzLjczMyA3LjA5NSA1LjQyIDYuNzQxIDcuODRjLS4xNzkgMS4yMi4xODcgMi4zNzUuODU1IDMuMzAyLjQ4NS42NzQgMS4zNzMgMS4wNiAxLjg1NCAxLjE4bDEuMjYyLjM2IDEuMjA4LjI3N2MuMTY2LjA0LjYzNC4xNTUuOTEuMjU1LjI1Ni4wOTIuODQ1LjMxIDEuMzI0LjcwMS41NzIuNTgyLjg3NSAxLjQxMy43NDYgMi4yODRhMi43NDQgMi43NDQgMCAwIDEtNC44OTcgMS4yNTVsLTEuNzI2LTIuMjkyYTIuMjk0IDIuMjk0IDAgMCAwLTEuNTE0LS44OSAyLjMxIDIuMzEgMCAwIDAtMS43MDguNDM5bC0zLjYzMiAyLjcxQTExLjAwMiAxMS4wMDIgMCAwIDEgMCAxMkMwIDUuNzk4IDUuMTMzLjc2OCAxMS40NjUuNzY4YzQuNzE1IDAgOC43NjEgMi43ODggMTAuNTIzIDYuNzdsLjU4MS0uMjcuMzkzLTEuMDcyLjQxMS4xNDQtLjM1My45Ni45OC4zMzctLjE0OC40MDItMS4wOTUtLjM4Mi0uNjAzLjI3N2MuNSAxLjI2Mi43NzggMi42MzIuNzc4IDQuMDY2IDAgNi4yMDMtNS4xMzUgMTEuMjMyLTExLjQ2NyAxMS4yMzJhMTEuNTI2IDExLjUyNiAwIDAgMS05LjI2LTQuNjFsMy43MjEtMi43ODhhLjg1NS44NTUgMCAwIDEgMS4xNjMuMTlsMS44MjYgMi40NTVhNC4xODYgNC4xODYgMCAwIDAgMi42NzMgMS41MDJjMi4zMDIuMzIyIDQuNDM5LTEuMjczIDQuNzczLTMuNTYzYTQuMTQgNC4xNCAwIDAgMC0uNjY0LTIuOTIyIi8+PC9zdmc+"/><text transform="scale(.1)" x="521.25" y="175" textLength="402.5" fill="#fff" font-weight="bold">SCIPY</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="134.5" height="28" role="img" aria-label="TENSORFLOW"><title>TENSORFLOW</title><g shape-rendering="crispEdges"><rect width="134.5" height="28" fill="#ff6f00"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlRlbnNvckZsb3c8L3RpdGxlPjxwYXRoIGQ9Ik0xLjI5MiA1Ljg1NkwxMS41NCAwdjI0bC00LjA5NS0yLjM3OFY3LjYwM2wtNi4xNjggMy41NjQuMDE1LTUuMzF6bTIxLjQzIDUuMzExbC0uMDE0LTUuMzFMMTIuNDYgMHYyNGw0LjA5NS0yLjM3OFYxNC44N2wzLjA5MiAxLjc4OC0uMDE4LTQuNjE4LTMuMDc0LTEuNzU2VjcuNjAzbDYuMTY4IDMuNTY0eiIvPjwvc3ZnPg=="/><text transform="scale(.1)" x="772.5" y="175" textLength="905" fill="#fff" font-weight="bold">TENSORFLOW</text></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="93.5" height="28" role="img" aria-label="TRELLO"><title>TRELLO</title><g shape-rendering="crispEdges"><rect width="93.5" height="28" fill="#026aa7"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlRyZWxsbzwvdGl0bGU+PHBhdGggZD0iTTIxLjE0NyAwSDIuODUzQTIuODYgMi44NiAwIDAwMCAyLjg1M3YxOC4yOTRBMi44NiAyLjg2IDAgMDAyLjg1MyAyNGgxOC4yOTRBMi44NiAyLjg2IDAgMDAyNCAyMS4xNDdWMi44NTNBMi44NiAyLjg2IDAgMDAyMS4xNDcgMHpNMTAuMzQgMTcuMjg3YS45NTMuOTUzIDAgMDEtLjk1My45NTNoLTRhLjk1NC45NTQgMCAwMS0uOTU0LS45NTNWNS4zOGEuOTUzLjk1MyAwIDAxLjk1NC0uOTUzaDRhLjk1NC45NTQgMCAwMS45NTMuOTUzem05LjIzMy01LjQ2N2EuOTQ0Ljk0NCAwIDAxLS45NTMuOTQ3aC00YS45NDcuOTQ3IDAgMDEtLjk1My0uOTQ3VjUuMzhhLjk1My45NTMgMCAwMS45NTMtLjk1M2g0YS45NTQuOTU0IDAgMDEuOTUzLjk1M3oiLz48L3N2Zz4="/><text transform="scale(.1)" x="567.5" y="175" textLength="495" fill="#fff" font-weight="bold">TRELLO</text></g></svg>',
];

export default svg;
