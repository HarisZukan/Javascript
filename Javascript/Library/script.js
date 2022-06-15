
var biblioteka= new Biblioteka();

function addBook(){
    var naziv=getValue('title');
    var author=getValue('author');
    var newBook=new Book(naziv,author);
    biblioteka.addBook(newBook);
    rendersBook(biblioteka.getAll())
    clearValue('title');
    clearValue('author');
    
    
}












