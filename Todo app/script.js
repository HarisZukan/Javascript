
var allTodos=[];


var todoWrapper=document.querySelector('.list-group');


function addTodo(){
    var newTodo=document.getElementById('todo').value;
    if(newTodo=='')
    return alert('Upisite vas todo');


    var todo={
        newTodo
        
    };
    
    allTodos.push(todo);
    var todoLengt=document.getElementById('todos-l');
    todoLengt.innerHTML=`Todos (${allTodos.length})`
    rendersTodo(allTodos);
    console.log(allTodos);
    clearValue('todo');
    
   
}

function todoOnEnter(e) {
    if (e.keyCode === 13) {
     
       addTodo();
    }
}

function clearValue(id) {
    document.getElementById(id).value = '';
}


function rendersTodo(todos){
    
   
 var todoWrapper=document.querySelector('.list-group');
 todoWrapper.innerHTML='';
  for(todo of todos){
      var li=document.createElement('li');
      li.classList.add('list-group-item','d-flex','align-items-center','justify-content-between');
      var div=document.createElement('div');
      div.classList.add('form-check');
      var inputCheck=document.createElement('input');
      inputCheck.classList.add('form-check-input');
      inputCheck.type='checkbox';
      inputCheck.setAttribute('id','flexCheckDefault');
      var label=document.createElement('label');
      label.classList.add('form-check-label');
      label.setAttribute('for','flexCheckDefault');
      label.classList.add('label-text');
      label.innerHTML=todo.newTodo;
      var div2=document.createElement('div2');
       li.appendChild(div);
      div.appendChild(inputCheck);
      div.appendChild(label);
       li.appendChild(div2) 
      div2.appendChild(editTodo(todo));
      div2.appendChild(deleteBtn(todo));
      todoWrapper.appendChild(li);

  }

}

function deleteBtn(todo){
    var buttonDel=document.createElement('button');
    buttonDel.classList.add('obrisi')
    buttonDel.classList.add('btn','btn-danger');
    buttonDel.type='button';
    buttonDel.setAttribute('id','button-addon2');
    buttonDel.innerHTML='Delete';
    buttonDel.style='margin-left:6px';
    buttonDel.addEventListener('click',function(){
        var index=allTodos.indexOf(todo);
        var message=confirm('Jeste li sigurni')
        if(!message) return;
        allTodos.splice(index,1);
        var todoLengt=document.getElementById('todos-l');
        todoLengt.innerHTML=`Todos (${allTodos.length})`
        rendersTodo(allTodos);
        
    })

    return buttonDel;
    
}



function editTodo(todo){
    
  
    var buttonEdit=document.createElement('button');
    buttonEdit.classList.add('btn', 'btn-primary');
    buttonEdit.type='button';
    buttonEdit.setAttribute('id','button-addon2');
    buttonEdit.innerHTML='Edit';
    buttonEdit.addEventListener('click',function(){
     
        var obj=Object.values(todo);
        var index=obj.values();
       
       
        for(elements of index){
       
         var newTodo=document.getElementById('todo');
         newTodo.value=elements; 
         var index=allTodos.indexOf(todo);
         allTodos.splice(index,1);
         
         
         
         
        }
     
       
        
       
    })

    return buttonEdit;
    

}


