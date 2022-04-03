const loginID_FORM = document.querySelector("#login-id-form");
const logininput = document.querySelector("#login-id-form input");
const loginPASSWORD_FORM = document.querySelector("#login-password-form");
const loginafter = document.querySelector("#greeting")

const HIDDEN_CLASSNAME ="hidden";
const USER_ID_KEY ="user_ID";
const USER_PASSWORD_KEY ="user_password";
const savedUser_ID = localStorage.getItem(USER_ID_KEY);

function paintGreetings(user_ID){
    loginafter.classList.remove(HIDDEN_CLASSNAME);
    loginafter.innerText = `Welcome ${user_ID} Let's Make a 'To Do List'`;
}

function loginsubmit(event){
    event.preventDefault();
    const user_ID = logininput.value;
    const user_password = loginPASSWORD_FORM.value;
    loginID_FORM.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(user_ID);
    localStorage.setItem(USER_ID_KEY,user_ID);
    localStorage.setItem(USER_PASSWORD_KEY,user_password);
}


if (savedUser_ID === null){
loginID_FORM.classList.remove(HIDDEN_CLASSNAME);
loginID_FORM.addEventListener("submit",loginsubmit);

}
else{
    paintGreetings(savedUser_ID);
}

