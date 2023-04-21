
function store(){ // регістрація

    let email = document.getElementById('email');
    let username = document.getElementById('username');
    let pw = document.getElementById('password');


    if(username.value.length != 0 && pw.value.length != 0){ // заносимо в local storage дані з форми, ящко вони не нульові і пройшли валідацію
        localStorage.setItem('name', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        
        alert('Your account has been created');
    }
}


function check(){ // авторизація
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('user_name'); 
    let userPw = document.getElementById('pass_word');

    if(userName.value == storedName && userPw.value == storedPw){ // перевіряємо введені данні із  даними в local storage
        window.open("home.html");
        //window.location.replace("home.html");
    }else{
        alert('Error on login');
    }
}


