function checkPass() {
    let addedStyle = document.head.appendChild(document.createElement("style"));

    if (document.getElementById('confirm-password').value != document.getElementById('password').value) {
        console.log('add class')
        document.querySelector('#confirm-password').classList.add('invalid');
        document.querySelector('#password').classList.add('invalid');
        addedStyle.innerHTML = ".password-content::after {visibility: visible"
    } else {
        console.log('remove class')
        document.querySelector('#confirm-password').classList.remove('invalid');
        document.querySelector('#password').classList.remove('invalid');
        addedStyle.innerHTML = ".password-content::after {visibility: hidden"
    };
};

document.getElementById('password').addEventListener('input', function() {
    console.log('input')
    checkPass();
});
document.getElementById('confirm-password').addEventListener('input', function() {
    console.log('input')
    checkPass();
});
