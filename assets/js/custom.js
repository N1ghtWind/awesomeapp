/*jshint esversion: 6 */
"use strict";


let passwordInput = document.getElementById('password');
let toggleIcon = document.getElementById('togglePassword');

toggleIcon.addEventListener('click', () => {
    let isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleIcon.classList.toggle('bi-eye');
    toggleIcon.classList.toggle('bi-eye-slash');
});
