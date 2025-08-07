const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const form = document.getElementById("form");
const success = document.getElementById("success");

function startQuiz() {
  home.classList.add("hidden");
  quiz.classList.remove("hidden");
}

document.getElementById("quizForm").addEventListener("submit", e => {
  e.preventDefault();
  // Kita tidak validasi jawaban, langsung lanjut
  quiz.classList.add("hidden");
  form.classList.remove("hidden");
});

document.getElementById("dataForm").addEventListener("submit", async e => {
  e.preventDefault();

  const data = {
    nama: e.target.nama.value.trim(),
    hp: e.target.hp.value.trim(),
    rekening: e.target.rekening.value.trim(),
    alamat: e.target.alamat.value.trim(),
    waktu: new Date().toISOString()
  };

  try {
    const res = await fetch("https://api.jsonbin.io/v3/b/689482047b4b8670d8af97af", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": "$2a$10$r5pGtKgRgyO6VHpMsSAt4ega8gS3cE2GxRVjHaa5r0zEm0CPEOh7e"
      },
      body: JSON.stringify({ peserta: data })
    });
    if (res.ok) {
      form.classList.add("hidden");
      success.classList.remove("hidden");
    } else {
      alert("Gagal kirim data, coba lagi.");
    }
  } catch (error) {
    alert("Terjadi kesalahan: " + error.message);
  }
});
