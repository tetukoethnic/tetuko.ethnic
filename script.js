document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

if(toggle){

toggle.addEventListener("click", function(){

menu.classList.toggle("active");

if(menu.classList.contains("active")){
toggle.innerHTML="✕";
}else{
toggle.innerHTML="☰";
}

});

}

const searchBtn=document.querySelector(".search-icon");
const searchOverlay=document.getElementById("search-overlay");
const closeSearch=document.querySelector(".close-search");

searchBtn.addEventListener("click",function(){

searchOverlay.classList.add("active");

});

closeSearch.addEventListener("click",function(){

searchOverlay.classList.remove("active");

});


const previews=document.querySelectorAll(".video-preview");
const videoOverlay=document.getElementById("videoOverlay");
const videoFrame=document.querySelector("#videoOverlay iframe");
const closeVideo=document.querySelector(".close-video");

previews.forEach(function(preview){

preview.addEventListener("click",function(){

videoFrame.src=preview.dataset.video;

videoOverlay.style.display="flex";

});

});

closeVideo.addEventListener("click",function(){

videoOverlay.style.display="none";
videoFrame.src="";

});

});
