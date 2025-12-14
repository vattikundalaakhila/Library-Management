// import add_book_form_func from "./add_form.js";
import add_genre from "./adding_options_genre.js";
import { renderBook } from "./render_book.js";

add_genre();

const add_book_btn= document.getElementById("add_book_btn")

//to open modal 
const add_book_modal = document.getElementById("add_book_modal")

//when Add books button is clicked the modal will appear
add_book_btn.addEventListener("click",()=> add_book_modal.showModal());

//to close modal
const close_modal = document.getElementById("close_modal")
close_modal.addEventListener("click", ()=> add_book_modal.close());

// add book function
const book_list =
  JSON.parse(localStorage.getItem("book_list")) || [];
// add_book_form_func(book_list);

// render books
renderBook(book_list);
