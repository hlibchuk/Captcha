const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
const input = document.getElementById('input');
const refreshBtn = document.getElementById('refreshBtn');
const submitBtn = document.getElementById('submitBtn');

function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
refreshBtn.onclick = generateRandomString;
function generateRandomString() {
    let randomString = '';
    for (let i = 0; i < 6; i++) {
        randomString += getRandomCharacter();
    }
    input.value = randomString;
}

submitBtn.addEventListener('click', checkCaptcha);
function checkCaptcha() {
    const input1 = document.getElementById('input1');
    const inputValue = input1.value;
    if (inputValue === input.value) {
        alert('Valid Captcha');
    } else {
        alert('Invalid Captcha. Try Again.');
    }
    input1.value = '';

}