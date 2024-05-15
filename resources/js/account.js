function createAccount() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'createAccount.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (this.status == 200) {
            alert('Akun berhasil dibuat!');
        } else {
            alert('Terjadi kesalahan saat membuat akun.');
        }
    };
    xhr.send('username=' + username + '&password=' + password);
}