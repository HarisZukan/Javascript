function Biblioteka(){
    this.books=[];
  

    this.addBook=function(book){
        this.books.push(book);

    }

    this.getAll=function(){
        return this.books;
    }

    

    

} 
