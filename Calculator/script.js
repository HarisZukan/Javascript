function insert(num){
    debugger
    document.calculator.numberview.value= document.calculator.numberview.value+num
}

function equal(){
    
    var rez=document.calculator.numberview.value;
    if(rez){
    document.calculator.numberview.value=eval(rez)
    }
}

function clean(){
    document.calculator.numberview.value='';
}

