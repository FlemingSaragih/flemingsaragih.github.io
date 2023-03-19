// Validasi Input Email
var emailInput = document.getElementById('email-input');
var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener('input', function() {
  if (!regex.test(emailInput.value)) {
    emailInput.setCustomValidity('Email tidak valid');
  } else {
    emailInput.setCustomValidity('');
  }
});

//Validasi Input Pass
var passwordInput = document.getElementById('password-input');
var regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

passwordInput.addEventListener('input', function() {
  if (!regex2.test(passwordInput.value)) {
    passwordInput.setCustomValidity('Password harus terdiri dari minimal 8 karakter, setidaknya satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus');
  } else {
    passwordInput.setCustomValidity('');
  }
});
  //hidepass
  function myFunction() {
    var x = document.getElementById("password-input");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

//Mencocokkan Format No. Telp
var numberInput = document.getElementById('nomor-input');
var regex3 = /^(\+62|0)\d{9,12}$/;

numberInput.addEventListener('input', function() {
    if (!regex3.test(numberInput.value)) {
      numberInput.setCustomValidity('Gagal, Input Nomor anda dengan benar');
    } else {
      numberInput.setCustomValidity('');
    }
  });

//validasi username
var usernameInput = document.getElementById('username-input');
var regex4 = /^[a-zA-Z0-9]+$/;

usernameInput.addEventListener('input', function() {
    if (!regex4.test(usernameInput.value)) {
      usernameInput.setCustomValidity('Username tidak boleh menggunakan simbol, dan spasi');
    } else {
      usernameInput.setCustomValidity('');
    }
  });

// validasi Kode Pos
var kodePosInput = document.getElementById('kodePos-input');
var regex5 = /^\d{5}$/;

kodePosInput.addEventListener('input', function() {
    if (!regex5.test(kodePosInput.value)) {
      kodePosInput.setCustomValidity('Input Menggunakan 5 angka');
    } else {
      kodePosInput.setCustomValidity('');
    }
  });