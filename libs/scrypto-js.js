
console.log("CryptoJS start 1:", !!CryptoJS );
console.log("CryptoJS start 2:", !!CryptoJS.AES );
console.log("CryptoJS start 3:", !!CryptoJS.AES.encrypt );
const message = "Hello World";
const secretKey = "SecretKey";
var result = CryptoJS.AES.encrypt(message, secretKey).toString();
console.log("CryptoJS.AES result:", result );