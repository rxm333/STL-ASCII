# STL to ASCII Webflow Integration

Ce repository contient les fichiers nécessaires pour intégrer le générateur STL vers ASCII dans un site Webflow.

## Fichiers

- `webflow-integration.js` : Script principal pour l'intégration Webflow
- `custom.css` : Styles personnalisés pour l'interface
- `script.js` : Script original du générateur STL vers ASCII

## Installation

1. Hébergez ces fichiers sur GitHub Pages ou un CDN
2. Dans Webflow, ajoutez les scripts suivants dans la section "Head Code" des paramètres du site :

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r130/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js"></script>
<link rel="stylesheet" href="https://[VOTRE-USERNAME].github.io/[VOTRE-REPO]/custom.css">
```

3. Dans la section "Footer Code", ajoutez :

```html
<script src="https://[VOTRE-USERNAME].github.io/[VOTRE-REPO]/webflow-integration.js"></script>
<script src="https://[VOTRE-USERNAME].github.io/[VOTRE-REPO]/script.js"></script>
```

4. Dans l'éditeur Webflow, ajoutez un div avec l'ID "stl-ascii-container" où vous souhaitez afficher le générateur. 