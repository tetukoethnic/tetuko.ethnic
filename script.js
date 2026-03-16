// PRELOADER
window.addEventListener("load",function(){
const loader=document.getElementById("loader");
loader.style.opacity="0";
setTimeout(function(){loader.style.display="none";},600);
});

// HAMBURGER MENU
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");
toggle.addEventListener("click",function(){
menu.classList.toggle("active");
toggle.innerHTML = menu.classList.contains("active") ? "✕" : "☰";
});

// SEARCH
const searchBtn=document.querySelector(".search-icon");
const searchOverlay=document.getElementById("search-overlay");
const closeSearch=document.querySelector(".close-search");
searchBtn.onclick=function(){searchOverlay.classList.add("active");}
closeSearch.onclick=function(){searchOverlay.classList.remove("active");}

// DROPDOWN MOBILE
document.querySelectorAll(".dropdown-parent > span").forEach(function(item){
item.addEventListener("click",function(){
let parent=this.parentElement;
document.querySelectorAll(".dropdown-parent").forEach(function(el){if(el!==parent){el.classList.remove("open");}});
parent.classList.toggle("open");
});
});

// VIDEO OVERLAY
const previews=document.querySelectorAll(".video-preview");
const overlay=document.getElementById("videoOverlay");
const iframe=document.querySelector("#videoOverlay iframe");
const closeVideo=document.querySelector(".close-video");

previews.forEach(item=>{
item.onclick=function(){
iframe.src=this.dataset.video;
overlay.classList.add("active");
}
});
closeVideo.onclick=function(){
overlay.classList.remove("active");
iframe.src="";
};
