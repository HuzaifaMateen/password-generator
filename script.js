const passwords = ["5X1MS9eRFvgKF7T", "S7xHDWtFuNGRxV4", "dA92HNfJzIDKwtO", "TYWmgccU19XoDV5", "PPQBu7uUXx6E9ez", "s1XDwOqkSRLceW1", "PLZ4JymZBN72YoF", "7UlknXlEmzTLlgb", "r0jJGd0UNgzg0iq", "X8SKQJa4NjZx6k4"];
const btn = document.getElementById("btn");
const password = document.querySelector(".password");
btn.addEventListener('click', function(){
		let random = Math.floor(Math.random() * passwords.length);
		password.textContent = passwords[random];
});
