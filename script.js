// PRELOADER
window.addEventListener("load", function(){
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(()=>loader.style.display="none",600);
});

// MENU TOGGLE MOBILE
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");
toggle.addEventListener("click",function(){
  menu.classList.toggle("active");
  toggle.innerHTML = menu.classList.contains("active") ? "✕" : "☰";
});

// DROPDOWN MOBILE
document.querySelectorAll(".dropdown-parent > span").forEach(span=>{
  span.addEventListener("click",()=>{
    const parent = span.parentElement;
    parent.classList.toggle("open");
  });
});

// SEARCH OVERLAY
const searchIcon = document.querySelector(".search-icon");
const searchOverlay = document.getElementById("search-overlay");
function openSearch(){searchOverlay.classList.add("active");}
function closeSearch(){searchOverlay.classList.remove("active");}
searchIcon.addEventListener("click",openSearch);
document.querySelector(".close-search").addEventListener("click",closeSearch);

// VIDEO OVERLAY
const videoOverlay = document.getElementById("videoOverlay");
const iframeVideo = document.getElementById("iframeVideo");
document.querySelectorAll(".video-preview").forEach(preview=>{
  preview.addEventListener("click",()=>{
    iframeVideo.src = preview.dataset.video;
    videoOverlay.classList.add("active");
  });
});
document.getElementById("closeVideo").addEventListener("click",()=>{
  videoOverlay.classList.remove("active");
  iframeVideo.src = "";
});
