/*
document.addEventListener("DOMContentLoaded", function () {
   
    const addButton = document.getElementById("add");
    const clearButton = document.getElementById("clear");
    const outputDiv = document.getElementById("output");

    addButton.addEventListener("click", function () {
    const texto = document.getElementById('texto').value;
    const alineacion = document.getElementById('alineacion').value;
    const formato = document.getElementById('formato').value;
    const tamaño = document.getElementById('tamaño').value;

        const parrafo = document.createElement("p");
        parrafo.textContent = texto.value;

        parrafo.style.textAlign = alineacion.value;
        
        if (formato === 'cursiva') {
            parrafo.style.fontStyle = "italic";
        }
        if (formato === 'subrayado') {
            parrafo.style.textDecoration = "underline";
        }
        if (formato === 'negrita') {
            parrafo.style.fontWeight = "bold";
        }
        parrafo.style.fontSize = tamaño.value + "px";

        outputDiv.appendChild(parrafo);
    });

    clearButton.addEventListener("click", function () {
        outputDiv.innerHTML = "";
    });
});*/
document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("input-text");
    const alignmentSelect = document.getElementById("alignment");
    const italicCheckbox = document.getElementById("italic");
    const underlineCheckbox = document.getElementById("underline");
    const boldCheckbox = document.getElementById("bold");
    const fontSizeInput = document.getElementById("font-size");
    const addButton = document.getElementById("add");
    const clearButton = document.getElementById("clear");
    const outputDiv = document.getElementById("output");

    addButton.addEventListener("click", function () {
        const paragraph = document.createElement("p");
        paragraph.textContent = inputText.value;
        paragraph.style.textAlign = alignmentSelect.value;
        if (italicCheckbox.checked) {
            paragraph.style.fontStyle = "italic";
        }
        if (underlineCheckbox.checked) {
            paragraph.style.textDecoration = "underline";
        }
        if (boldCheckbox.checked) {
            paragraph.style.fontWeight = "bold";
        }
        paragraph.style.fontSize = fontSizeInput.value + "px";

        outputDiv.appendChild(paragraph);
    });

    clearButton.addEventListener("click", function () {
        outputDiv.innerHTML = "";
    });
});
