let displayOut = document.getElementById("outputDisplay");
let displayIn = document.getElementById("inputDisplay");
let bsb = document.getElementById("back");
let clb = document.getElementById("clear");

let precision = 4;


function renderOutput(outputValue){
    displayOut.innerHTML = outputValue;
}
   

function insertAtCaret(text) {
    showBackspace();
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
    showBackspace();
    expressn=displayIn.value;
    expressn=expressn.replace(/x/g,"*");
    console.log(expressn);
    try{
    answer = eval(expressn);
    answer = answer.toPrecision(precision);
    renderOutput(answer);
    }
    
    catch(error){
        renderOutput('SyntaxError');
    }

    if(expressn===""){
        renderOutput('');
    }
}

function shiftOutputToInput(){
    
    if (displayOut.innerHTML === ""){
        showClear();
    }
    else{
        showClear();
        displayIn.value = displayOut.innerHTML;
        displayOut.innerHTML = "";
    }  
     
}

function clscreen(){
    displayIn.value ="";
    displayOut.innerHTML = "";
    showBackspace();  
    displayIn.focus();  
}

function showBackspace(){
    bsb.style.display = "flex";
    clb.style.display = "none";
}

function showClear(){
    bsb.style.display = "none";
    clb.style.display = "flex";
}

displayIn.focus();


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