// --- LOGIN (index.html) ---
if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name")?.value.trim();
        console.log("Nama yang dimasukkan:", name);
      if (name) {
        localStorage.setItem("userName", name);
        window.location.href = "home.html";
      } else{
        alert("Nama harus diisi!");
      }
    });
  });
}

// --- HOME (home.html) ---
if (window.location.pathname.includes('home.html')) {
  document.addEventListener("DOMContentLoaded", function () {
    const name = localStorage.getItem("userName");
    const welcome = document.getElementById("welcomeText");
    if (welcome && name) {
      welcome.textContent = `Welcome, ${name}!`;
    }
  });
}

// --- CONTACT (contact.html) ---
// Jalankan hanya jika ada form dengan ID "contactForm"
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (!form) return; // Jika bukan di halaman contact.html, jangan jalankan

  const nama = document.getElementById("nama");
  const tanggal = document.getElementById("tanggal");
  const email = document.getElementById("email");
  const pesan = document.getElementById("pesan");
  const genderRadios = document.getElementsByName("gender");
  const result = document.getElementById("result");
  const warning = document.getElementById("warning");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Cek radio button yang dipilih
    let genderValue = "";
    for (let radio of genderRadios) {
      if (radio.checked) {
        genderValue = radio.value;
        break;
      }
    }

    // Validasi semua field
    if (
      nama.value.trim() === "" ||
      tanggal.value === "" ||
      email.value.trim() === "" ||
      pesan.value.trim() === "" ||
      genderValue === ""
    ) {
      warning.classList.remove("hidden");
      result.classList.add("hidden");
    } else {
      result.classList.remove("hidden");
      warning.classList.add("hidden");
      form.reset();
    }
  });
});
