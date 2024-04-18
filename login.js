const loginform = document.getElementsByClassName("box")
const loginbtn = document.getElementsByClassName("loginbtn")
const loginerrormsg= document.getElementsByClassName("loginerrormsg")

loginbtn.addEventListener("click",(e) => {
    e.preventDefault();
    const username = loginform.username.value;

    const password = loginform.password.value;
    
    if(username === "user" && password === "pass") {
        alert("You have succesfully logged in.");
        location.reload();
    } else {
        console.log('loginerrormsg');
        console.log("loginerrormsg");
        loginerrormsg;
    }

    }
)