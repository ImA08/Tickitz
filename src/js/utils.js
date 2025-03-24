// FUNGSI VALIDASI EMAIL

export const validateEmail = (inputEmail) => {
  const email = inputEmail.trim(); // Hilangkan spasi di awal & akhir
  const atIndex = email.indexOf("@");
  const lastAtIndex = email.lastIndexOf("@");
  const lastDotIndex = email.lastIndexOf(".");
  const errors = [];

  // Cek apakah '@' ada dan tidak di awal atau akhir
  if (atIndex <= 0 || lastAtIndex > lastDotIndex) errors.push(1);

  // Cek apakah ada '.' setelah '@'
  if (lastDotIndex <= atIndex + 1 || lastDotIndex === email.length - 1)
    errors.push(1);

  // Cek apakah email tidak diawali atau diakhiri dengan '.'
  if (email.startsWith(".") || email.endsWith(".")) errors.push(1);

  // Cek apakah ada dua titik berturut-turut
  if (email.includes("..")) errors.push(1);

  if (errors.length > 0) {
    return false;
  }
  return true;
};

// FUNGSI VALIDASI PASWORD

export const validatePwd = (inputPwd) => {
  let hasLetter = false;
  let hasSpecialChar = false;
  let hasNumber = false;
  const specialChars = ["_", "-", "@", "$"];
  const errors = [];

  // Memeriksa setiap karakter dalam password
  for (let i = 0; i < inputPwd.length; i++) {
    const char = inputPwd.charAt(i);

    // Memeriksa jika karakter adalah huruf
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      hasLetter = true;
    }

    // Memeriksa jika karakter adalah angka
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }

    // Memeriksa jika karakter adalah salah satu karakter spesial
    if (specialChars.includes(char)) {
      hasSpecialChar = true;
    }
  }

  // Memeriksa panjang minimal password (6 karakter)
  const isValidLength = inputPwd.length >= 6;

  if (!isValidLength) errors.push();
  if (!hasLetter) errors.push();
  if (!hasSpecialChar) errors.push();
  if (!hasNumber) errors.push();

  if (errors.length > 0) {
    return false;
  }

  return true;
};

// PERIKSA DUPLIKAT EMAIL
export const checkDuplikat = (email) => {
  let users = JSON.parse(localStorage.getItem("signUpData")) || [];
  console.log(users);
  for (let i = 0; i < users.length; i++) {
    if (users.email === email) {
      return false;
    }    
  }
  return true;
};

