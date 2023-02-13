function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
    
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const valueE = parseFloat(elementValueString);
    return valueE;
    
}

function setElementValueById(element, newValue){
    const elementN = document.getElementById(element);
    elementN.innerText = newValue;
}