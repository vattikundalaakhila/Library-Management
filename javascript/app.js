
//get the button which trigger add book action
const add_book_btn= document.getElementById("add_book_btn")

//adding event listener to "Add Books" button
add_book_btn.addEventListener("click", add_book_func)


 //declaring the add_book_func
 function add_book_func(event){ 

    //checking if user has loggedIn item in localStorage
    if(!localStorage.getItem("loggedIn")){
        //if not then alert the user to login by showing login modal
        alert("please login to add books!");
        login_modal.showModal();
    }

    //if user is loggedIn then to add books logic will come here


}

//getting the login button element
const login_btn = document.getElementById("login_btn");

//getting login modal element from dialog element
const login_modal = document.getElementById("login_modal");

//getting close modal button from dialog element
const close_modal= document.getElementById("close_modal");


//Adding event listener to the X button inside the login modal
//if X button is clicked then the login_modal will get closed
close_modal.addEventListener('click', ()=> login_modal.close())

 //to check if user  has loggedIn item in localStorage
if(localStorage.getItem("loggedIn")){

    //if loggedIn item exists then Log In will become Log out.
    login_btn.innerText = "Log out"
}

//login or logout button listener
login_btn.addEventListener('click', ()=> {
    
    //if login button says Login then we display the login modal 
    if(login_btn.innerText==='Login'){
        login_modal.show();
    }

    else{
 //if button says not Login (Log out) then we remove the loggedIn item from localStorage
        localStorage.removeItem("loogedIn")

        //after removing from localStorage we want login button again.
        login_btn.innerText= "Login"
    }
})


