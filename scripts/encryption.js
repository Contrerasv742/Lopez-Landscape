const CryptoJS = require("crypto-js");

// Example Code
var encrypted = CryptoJS.AES.encrypt("thicc", "key");

var decrypted = CryptoJS.AES.decrypt(encrypted, "key");

var plaintext = decrypted.toString(CryptoJS.enc.Utf8);

clients = [];

function create_new_client() {
  const name = document.getElementById("name").value
  const phone = document.getElementById("phone").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value
  console.log(name + " " + phone  + " " + email + " " + subject + " " + message); 
  
  clients.push({
    name: encrypt(name), 
    phone: encrypt(phone), 
    email: encrypt(email), 
    subject: encrypt(subject), 
    message: encrypt(message), 
  })
}

function encrypt(text) {
  const CryptoJS = require("crypto-js");
  var encrypted = CryptoJS.AES.encrypt(text, "89%62");
  return encrypted;
}

//Test
console.log("hello world");
console.log();
console.log(plaintext);
