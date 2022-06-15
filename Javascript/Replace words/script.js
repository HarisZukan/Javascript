

function buttonSearch(){
var search=document.getElementById('search').value;
var enterText=document.getElementById('enter-text').value;

var p=document.getElementsByTagName('p');
console.log(p);
for(i=0;i<p.length;i++){
if(p[i].innerHTML.indexOf(search)){
    p[i].innerHTML=p[i].innerHTML.replace(search,enterText);
   while( p[i].innerHTML.indexOf(search) != -1 ){
    p[i].innerHTML = p[i].innerHTML.replace(search, enterText);
   
}
}

}

}

