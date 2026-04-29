// Animasi saat halaman selesai dimuat
window.addEventListener("load", function () {

  // Ambil semua card produk
  const cards = document.querySelectorAll(".card");

  // Ambil box info
  const infoBox = document.querySelector(".info-box");

  // Animasi card satu per satu
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200);
  });

  // Animasi box info muncul terakhir
  setTimeout(() => {
    infoBox.classList.add("show");
  }, 800);

});


// Efek klik tombol
const tombol = document.querySelector(".btn-primary");

tombol.addEventListener("click", function () {
  tombol.innerHTML = "Loading...";
});