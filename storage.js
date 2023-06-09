let name =document.getElementById('name');
let pw = document.getElementById('pw');

    function store() {
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
    }

function check() {

   
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

   
    let userName = document.getElementById('username');
    let userPw = document.getElementById('userpw');

   
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }
    else {
        alert('You are loged in.');
    }
}