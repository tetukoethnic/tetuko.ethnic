// ===============================
// PRELOADER
// ===============================

window.addEventListener("load", function(){

const loader = document.getElementById("loader");

setTimeout(function(){

loader.style.opacity="0";

setTimeout(function(){
loader.style.display="none";
},600);

},800);

});



// ===============================
// HAMBURGER MENU MOBILE
// ===============================

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

if(toggle){

toggle.addEventListener("click",function(){

menu.classList.toggle("active");

if(menu.classList.contains("active")){
toggle.innerHTML="✕";
}else{
toggle.innerHTML="☰";
}

});

}



// ===============================
// SEARCH OVERLAY
// ===============================

const searchBtn = document.querySelector(".search-icon");
const searchOverlay = document.getElementById("search-overlay");
const closeSearch = document.querySelector(".close-search");

if(searchBtn){

searchBtn.addEventListener("click",function(){
searchOverlay.classList.add("active");
});

}

if(closeSearch){

closeSearch.addEventListener("click",function(){
searchOverlay.classList.remove("active");
});

}



// ===============================
// VIDEO PREVIEW (LIHAT LEBIH DEKAT)
// ===============================

const previews = document.querySelectorAll(".video-preview");
const overlay = document.getElementById("videoOverlay");
const iframe = document.querySelector("#videoOverlay iframe");
const closeVideo = document.querySelector(".close-video");

previews.forEach(function(item){

item.addEventListener("click",function(){

const video = this.getAttribute("data-video");

iframe.src = video;

overlay.classList.add("active");

});

});

if(closeVideo){

closeVideo.addEventListener("click",function(){

overlay.classList.remove("active");

iframe.src="";

});

}



// ===============================
// SCROLL ANIMATION (APPLE STYLE)
// ===============================

const observer = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});


document.querySelectorAll("section").forEach(function(section){

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition="all 1s ease";

observer.observe(section);

});



// ===============================
// GALERI SLIDER SPEED STABLE
// ===============================

const track = document.querySelector(".slide-track");

if(track){

let speed = 0.5;
let position = 0;

function animate(){

position -= speed;

track.style.transform = "translateX("+position+"px)";

if(Math.abs(position) > track.scrollWidth/2){
position = 0;
}

requestAnimationFrame(animate);

}

animate();

}
