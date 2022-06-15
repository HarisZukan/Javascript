function getValue(id){
    return document.getElementById(id).value;
}

function clearValue(id) {
    document.getElementById(id).value = '';
}
function rendersBook(books){
var bookWrapper=document.querySelector('.list-group');
 bookWrapper.innerHTML='';
debugger
  for(book of books){
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
      label.innerHTML=`Naziv knjige: ${book.title}`
      var label2=document.createElement('label')
      label2.classList.add('form-check-label');
      label2.setAttribute('for','flexCheckDefault');
      label2.classList.add('label-text');
      label2.innerHTML=`Author knjige: ${book.author}`
      label2.style.display='block';
      

      var div2=document.createElement('div2');
       li.appendChild(div);
      div.appendChild(inputCheck);
      div.appendChild(label);
      div.appendChild(label2);
       li.appendChild(div2)
       div2.appendChild(deleteBook())
       bookWrapper.appendChild(li);
    }
}

function deleteBook(book){
    var buttonDel=document.createElement('button');
    buttonDel.classList.add('obrisi')
    buttonDel.classList.add('btn','btn-danger');
    buttonDel.type='button';
    buttonDel.setAttribute('id','button-addon2');
    buttonDel.innerHTML='Delete';
    buttonDel.style='margin-left:6px';
    buttonDel.addEventListener('click',function(){
        var index=biblioteka.books.indexOf(book);
        var message=confirm('Jeste li sigurni')
        if(!message) return;
        biblioteka.books.splice(index,1);
        
        rendersBook(biblioteka.books);
       
    })

    return buttonDel;
}


function searchBooks(event){

    var searchBy = event.target.value;
    var filteredBooks = [];
    for (var book of biblioteka.books) {
        if (book.title.toLowerCase().indexOf(searchBy.toLowerCase()) > -1) {
            filteredBooks.push(book);
        }
    }
    rendersBook(filteredBooks);
}

