//creating username and password

const username = "akky"
const password = "1234"


 
//getting the login form  which we created with dialog tag.
const login_form = document.getElementById("login_form")
login_form.addEventListener("submit", login_func)

function login_func(event){
    event.preventDefault();

//accessing username and password from form inputs
let input_username = event.target[0].value
let input_password = event.target[1].value

if(!(input_username===username && input_password===password)){
    alert(" incorrect username and password")
    return ;
}

alert("logged in successfully");
login_modal.close();
 login_btn.innerText= "Log out"
  localStorage.setItem("loggedIn" , "yes")
  



}