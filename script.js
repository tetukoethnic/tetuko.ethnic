// PRELOADER
// pastikan loader tampil segera setelah DOM siap
document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById("loader");
  loader.style.display = "flex"; // tampilkan preloader
});

// fade out setelah semua konten load
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none"; // hilangkan preloader
  }, 600); // fade out 0.6 detik
});

// MOBILE MENU TOGGLE
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");
toggle.addEventListener("click", function(){
  menu.classList.toggle("active");
  toggle.innerHTML = menu.classList.contains("active") ? "✕" : "☰";
});

// MOBILE DROPDOWN
const dropdownParents = document.querySelectorAll(".dropdown-parent > span");
dropdownParents.forEach(parent=>{
  parent.addEventListener("click", ()=>{
    const li = parent.parentElement;
    li.classList.toggle("active");
  });
});

// SEARCH FUNCTION
const searchOverlay = document.getElementById("search-overlay");
const searchBtn = document.querySelector(".search-icon");
function openSearch(){ searchOverlay.classList.add("active"); document.getElementById("search-input").focus();}
function closeSearch(){ searchOverlay.classList.remove("active"); document.getElementById("search-input").value=""; document.getElementById("search-results").innerHTML="";}
searchBtn.addEventListener("click", openSearch);

// SEARCH SITES (dummy)
function searchSite(){
  const query = document.getElementById("search-input").value.toLowerCase();
  const results = document.getElementById("search-results");
  results.innerHTML="";
  if(query!==""){
    const pages = [
      {name:"Beranda", url:"index.html"},
      {name:"Profil", url:"profil.html"},
      {name:"Galeri Produksi", url:"galeri-produksi.html"},
      {name:"Galeri Produk", url:"galeri-produk.html"},
      {name:"Galeri Proses", url:"galeri-proses.html"},
      {name:"Edukasi Rebab", url:"rebab.html"},
      {name:"Cara Rawat Rebab", url:"rawat-rebab.html"},
      {name:"Tentang Gender", url:"gender.html"},
      {name:"Cara Rawat Gender", url:"rawat-gender.html"},
      {name:"Karawitan", url:"karawitan.html"},
      {name:"Katalog", url:"katalog.html"},
      {name:"Kontak", url:"https://wa.me/62895405919086"}
    ];
    pages.forEach(page=>{
      if(page.name.toLowerCase().includes(query)){
        const a = document.createElement("a");
        a.href = page.url; a.textContent=page.name;
        results.appendChild(a);
      }
    });
  }
}

// VIDEO OVERLAY
const videoPreview = document.querySelectorAll(".video-preview");
const videoOverlay = document.getElementById("videoOverlay");
const iframeVideo = document.getElementById("iframeVideo");
const closeVideo = document.getElementById("closeVideo");

videoPreview.forEach(v=>{
  v.addEventListener("click", ()=>{
    const videoSrc = v.getAttribute("data-video");
    iframeVideo.src = videoSrc + "?autoplay=1";
    videoOverlay.classList.add("active");
  });
});
closeVideo.addEventListener("click", ()=>{
  iframeVideo.src = "";
  videoOverlay.classList.remove("active");
});

// SCROLL REVEAL ANIMATION
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", ()=>{
  for(let i=0; i<reveals.length; i++){
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;
    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    } else{
      reveals[i].classList.remove("active");
    }
  }
});
