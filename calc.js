let displayOut = document.getElementById("outputDisplay");
let displayIn = document.getElementById("inputDisplay");
//let caretPos;

function renderOutput(){
    displayOut.innerHTML = displayIn.value;
    let amount=displayIn.value;
    var numbers = amount.match(/\d*\.*\d+/g).map(Number);
    var operators = Array.from(amount);
    Math.evaluate
    console.log(numbers);
    console.log(operators);
}

function insertAtCaret(text) {
    caretPos = displayIn.selectionStart;
    var textAreaTxt = displayIn.value;
    displayIn.value = textAreaTxt.substring(0, caretPos) + text + textAreaTxt.substring(caretPos);
    displayIn.selectionStart = caretPos +1;
    displayIn.selectionEnd = caretPos +1;
    displayIn.focus();
};

function backspaceCaret() {
    caretPos = displayIn.selectionStart;
    var textAreaTxt = displayIn.value;
    displayIn.value = textAreaTxt.substring(0, caretPos-1) + textAreaTxt.substring(caretPos);
    displayIn.selectionStart = caretPos - 1;
    displayIn.selectionEnd = caretPos - 1;
    displayIn.focus();
};





