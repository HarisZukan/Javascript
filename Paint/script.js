var canvas=document.getElementById('canvas')

var isMousedown=false;

mousedown=function(){
    isMousedown=true;
}


mouseup=function(){
    isMousedown=false;
}


var radius="0%";

cube=function(){
  radius="0%"
}

circle=function(){
  radius="50%"
}

mousemove=function(event){
 
  if(!isMousedown) return;
 var x=event.clientX;
  var y=event.clientY;

  if(x>845 || y>605) return;
console.log(y);
  var size=document.getElementById('size').value + "px" ;
  var color=document.getElementById('color').value;
  var pixel=document.createElement('div');
  pixel.style=`border-radius:${radius};width:${size};height:${size};background-color:${color};position:absolute;`
  pixel.style.top=y+"px";
  pixel.style.left=x+"px";

  
  
 
  canvas.appendChild(pixel)
 
}


  

 
  
  
 

    







