function displayFlex(){ 
  

   var x=document.getElementById('flex-select').value;
    document.getElementById('flex-container').style.display=x;
   
}

function displaydirection(){
   
    var x=document.getElementById('flex-direction').value;
    document.getElementById('flex-container').style.flexDirection=x;

}

function flexWrapp(){
    var x=document.getElementById('flex-wrap').value;
    document.getElementById('flex-container').style.flexWrap=x;


}

function justifyCont(){
    var x=document.getElementById('justify').value;
    document.getElementById('flex-container').style.justifyContent=x;
}

function alignItemss(){
    var x=document.getElementById('align').value;
    document.getElementById('flex-container').style.alignItems=x;
}

function alignCont(){
    var x=document.getElementById('align-content').value;
    document.getElementById('flex-container').style.alignContent=x;
}

function alignSelf1(){
    var x=document.getElementById('align-self1').value;
    document.getElementById('box1').style.alignSelf=x;
}


function alignSelf2(){
    var x=document.getElementById('align-self2').value;
    document.getElementById('box2').style.alignSelf=x;
}

function alignSelf3(){
    var x=document.getElementById('align-self3').value;
    document.getElementById('box3').style.alignSelf=x;
}





