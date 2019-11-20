let displayOut = document.getElementById("outputDisplay");
let displayIn = document.getElementById("inputDisplay");
//let caretPos;

function renderOutput(outputValue){
    displayOut.innerHTML = outputValue;
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

function calcOutput(){
    expressn=displayIn.value;
    expressn=expressn.replace('x','*');
    
    try{
    answer = eval(expressn);
    renderOutput(answer);
    }
    
    catch(error){
        renderOutput('SyntaxError');
    }

    if(expressn===""){
        renderOutput('');
    }
}





/*Usefull regex
 let amount=displayIn.value;
    var numbers = amount.match(/\d*\.*\d+/g).map(Number);
    let operators = amount.replace(/\d/g,'');
    operators = operators.replace('.','');
    var seperated = Array.from(amount);
    console.log(amount);
    console.log(numbers);
    console.log(seperated);
    console.log(operators);
*/