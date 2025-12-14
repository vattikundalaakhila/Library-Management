
//this is an array of genre for the books 
const genre = [
  "",
  "Fantasy",
  "Science Fiction",
  "Dystopian",
  "Adventure",
  "Romance",
  "Contemporary",
  "Mystery",
  "Thriller",
  "Horror",
  "Historical Fiction",
  "Young Adult",
  "Children's",
  "Nonfiction",
  "Biography",
  "Autobiography",
  "Self-Help",
  "True Crime",
  "Poetry",
  "Graphic Novel",
  "Classics",
  "Literary Fiction",
  "Crime",
  "Humor",
  "Philosophy",
  "Religion",
  "Travel",
  "Science",
  "History",
  "Business",
  "Health & Wellness",
];


const add_genre= () => { 
const book_genre = document.getElementById("book_genre")
book_genre.innerHTML="";


//this is forEach loop to loop through every genre array item 
genre.forEach((g)=> {
    const option = document.createElement("option");
    if(g.length<=0){
        option.value="";
        option.innerText= "Select the Genre";

    }
    else{
        option.value= g.toLowerCase().trim();
        option.innerText= g;
    }
    book_genre.appendChild(option); 
})

}

export default add_genre ; 

