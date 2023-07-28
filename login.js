function validate(){
    let username = document.getElementById('username').
    value;
    let password = document.getElementById('password').
    value;
if(username=="admin"||password=="admin"){
    window.location.href='register.html';
}else{
    alert("login failed!");
    return false;
}
}