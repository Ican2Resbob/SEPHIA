const tombolIg = document.getElementById("btn-instagram");

tombolIg.addEventListener('click', function() {
    alert("Terima kasih sudah berkunjung! Kamu akan diarahkan ke profil Instagram saya 😉");
});
const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btnTheme.textContent = '☀️ Mode Terang';
    } else {
        btnTheme.textContent = '🌙 Mode Gelap';
    }
});