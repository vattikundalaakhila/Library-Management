import { Book } from "./Book_class.js";
import { renderBook } from "./render_book.js";

//getting the add book form
const add_book_form = document.getElementById("add_book_form");
add_book_form.addEventListener("submit", add_book_form_func)

function add_book_form_func(event){
    
    event.preventDefault();
    const book_list = JSON.parse(localStorage.getItem("book_list")) || []
    //book title
    const book_title = event.target[0].value
    book_title.toLowerCase().trim();
    //validation for the book title text
    if(book_title.length<=0){
        alert("please enter Book Title it should not be empty");
        return;
    }
    let old_data = book_list.some(
        (book) => book.book_title === book_title
      );

    if(old_data){
        alert("Book Title already exists, please try other")
    }

    //book author
    const book_author = event.target[1].value
    book_author.toLowerCase().trim();
    //validation for book author
    if(book_author.length<=0){
        alert("please enter valid book author name it should not be empty");
        return;
    }

    //book genre
    const book_genre = event.target[2].value
    book_genre.trim().toLowerCase();
    //validation for book_genre
    if(book_genre.length<=0){
        alert("book genre cannot be empty!");
        return;
    }

    //book reading status
    let book_reading_status = event.target[3].value
    book_reading_status.trim().toLowerCase();
    //validation for book_reading_status
    if(book_reading_status.length<=0){
        book_reading_status = "not started";
    }

//creating newBook object from Book class with new keyword. 
 const newBook = new Book( book_title, book_author, book_genre, book_reading_status);
   
   //adding this created book to the book list
   book_list.push(newBook);
   localStorage.setItem("book_list", JSON.stringify(book_list));

   alert("Added Book Successfully");
   add_book_modal.close();
   event.target.reset();
   renderBook(book_list);


}
export default add_book_form_func;

   