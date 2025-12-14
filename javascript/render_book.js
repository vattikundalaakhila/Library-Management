//creating function for rendering the created book list.

 export function renderBook(book_list){
    const section = document.getElementById("root")
   
    //handling Empty list scenario
    if(book_list.length<=0){
        //display a mesage if no books are present
        section.innerHTML = `<p class ="no_books"> No Books Added, Please Add Some Books!</p>`
        return;
    }
    
    section.innerHTML = "";
    const template = document.getElementById("book_template");
    
     book_list.reverse().forEach((element) => {
    const clone = template.content.cloneNode(true);

    const h2 = clone.querySelector(".book_title");
    h2.innerText = element.book_title;

    const h3 = clone.querySelector(".book_author");
    h3.innerText = element.book_author;

    const span_genre = clone.querySelector(".book_genre")
    span_genre.innerText = element.book_genre;
   
    //set the initial reading status on the <select> element
    let select = clone.querySelector("#book_reading_status");
    select.value = element.book_reading_status;

    //add listener for the status change
    select.addEventListener("input", (event)=> {
        update_reading_status(element.book_title, event);
    })
    // Add listener for book deletion
    const delete_book_btn =
      clone.querySelector("#delete_book");
    delete_book_btn.addEventListener("click", () => {
      // Filter out the book to be deleted, creating a new array
      const new_data = book_list.filter(
        (item) => item.book_title !== element.book_title
      );

      // Reassign the main book_list array to the new filtered array
      // NOTE: This assumes 'book_list' passed here is the reference from 'app.js'
      book_list.splice(0, book_list.length, ...new_data); // Use splice to modify the original array reference in place

      // Update localStorage
      localStorage.setItem(
        "book_list",
        JSON.stringify(book_list)
      );

      // Re-render the page to show the list without the deleted book
      renderBook(book_list);
    });

 


    section.append(clone);
  });


  function update_reading_status(book_title, event) {
    let new_reading_status = event.target.value;

    // Find the index of the book in the array using its title
    let index_number = book_list.findIndex((el) => {
      return el.book_title === book_title;
    });

    // Update the reading status property of the found book object
    book_list[index_number].book_reading_status =
      new_reading_status;

    // Update localStorage
    localStorage.setItem(
      "book_list",
      JSON.stringify(book_list)
    );
    alert("Reading Status was updated Successfully");
  }
}

 

    



