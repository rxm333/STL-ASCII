// Configuration initiale
document.addEventListener('DOMContentLoaded', function() {
    // Créer les éléments d'interface
    const container = document.getElementById('stl-ascii-container');
    
    // Créer le formulaire et les boutons
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('enctype', 'multipart/form-data');
    form.setAttribute('data-html2canvas-ignore', 'true');
    
    // Ajouter les boutons et inputs
    const topDiv = document.createElement('div');
    topDiv.id = 'top';
    
    const fileSelector = document.createElement('input');
    fileSelector.id = 'file-selector';
    fileSelector.setAttribute('name', 'files[]');
    fileSelector.style.display = 'none';
    fileSelector.type = 'file';
    
    const inputButton = document.createElement('input');
    inputButton.id = 'input-button';
    inputButton.type = 'button';
    inputButton.value = 'Upload STL';
    inputButton.onclick = () => document.getElementById('file-selector').click();
    
    // Ajouter les autres boutons
    const buttons = [
        {id: 'lightDark', value: 'Dark/Light Mode'},
        {id: 'rotateButton', value: 'Rotate'},
        {id: 'clipboardASCII', value: 'Copy to Clipboard'},
        {id: 'copyASCII', value: 'Download Text File'},
        {id: 'screenshotButton', value: 'Screenshot'}
    ];
    
    buttons.forEach(btn => {
        const button = document.createElement('input');
        button.id = btn.id;
        button.type = 'button';
        button.value = btn.value;
        topDiv.appendChild(button);
    });
    
    // Ajouter les champs de texte
    const textInput = document.createElement('input');
    textInput.id = 'newASCII';
    textInput.size = '12';
    textInput.value = 'Custom Text';
    textInput.onkeydown = (e) => e.keyCode !== 13;
    
    const updateButton = document.createElement('input');
    updateButton.id = 'updateASCII';
    updateButton.type = 'button';
    updateButton.value = 'Update ASCII';
    
    const resetButton = document.createElement('input');
    resetButton.id = 'resetASCII';
    resetButton.type = 'button';
    resetButton.value = 'Reset ASCII';
    
    // Assembler l'interface
    topDiv.appendChild(fileSelector);
    topDiv.appendChild(inputButton);
    topDiv.appendChild(textInput);
    topDiv.appendChild(updateButton);
    topDiv.appendChild(resetButton);
    
    form.appendChild(topDiv);
    container.appendChild(form);
    
    // Masquer certains boutons sur mobile
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('screenshotButton').style.display = 'none';
        document.getElementById('input-button').style.display = 'none';
        document.getElementById('copyASCII').style.display = 'none';
        document.getElementById('clipboardASCII').style.display = 'none';
    }
    
    // Importer le script principal
    const script = document.createElement('script');
    script.src = 'script.js';
    document.body.appendChild(script);
}); 