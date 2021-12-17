function submit() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('pass').value;

    localStorage.setItem('status', 'success');
}

function showAlerts(msg) {
    alert(msg);
}

function getHomePage() {
    if(localStorage.getItem('status') === null) {
        window.location.replace("http://localhost:8080/");
    }
    return window.location.replace("http://localhost:8080/auth/login");
}