const container = document.querySelector('.container');
const myVideo = document.getElementById('myVideo');
const header = document.querySelector('header');
const cursor = document.querySelector('#cursor');
const logo = document.querySelector('.logo');
const song = document.getElementById('mySong');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const cart = document.querySelector('.cart');
const navLinks = document.querySelectorAll('.nav-links');
const welcomeTextContainer = document.querySelector('.welcome-text');
const welcomeText = document.getElementById('welcomeText');
const welcomeFooter = document.querySelector('.welcome-footer');
const watchVideo = document.getElementById('watch-video');
const copyright = document.getElementById('copyright');
const scrollDown = document.getElementById('scroll');

console.log(copyright, scroll);


console.log(welcomeTextContainer);



window.onload = function () {
     
     document.body.style.overflow = 'hidden';
     container.style.display = 'none';
     setTimeout(() => {
          document.body.style.overflowY = 'scroll';
          const loader = document.querySelector('.loader-wrapper');
          loader.classList.toggle('fade-out');
          container.style.display = 'block';
          setTimeout(() => {
               loader.remove();
          }, 1000);
     }, 5000);
};



document.addEventListener('mousemove', (e) => {

     cursor.style.left = e.clientX + 'px';
     cursor.style.top = e.clientY + 'px';
     cursor1.style.left = e.clientX + 'px';
     cursor1.style.top = e.clientY + 'px';
     
})

// FUNCTIONS 


function hideElem() {
     header.style.opacity = '0';
     welcomeTextContainer.style.opacity = '0';
     scrollDown.style.opacity = '0';
     copyright.style. opacity = '0';
     watchVideo.innerHTML = 'SKIP';
}
function showElem() {
     header.style.opacity = '1';
     welcomeTextContainer.style.opacity = '1';
     scrollDown.style.opacity = '1';
     copyright.style. opacity = '1';
     watchVideo.innerHTML = 'WATCH VIDEO';
}


function cursorBig(){
     cursor.style.width = '50px';
     cursor.style.height = '50px';    
}

function cursorSmall(){
     cursor.style.width = '12px';
     cursor.style.height = '12px';    
}




watchVideo.addEventListener("click", () => {
     if (!myVideo.paused) {
          myVideo.load();
          song.load();
          showElem();
    } else {
        myVideo.play();
        song.play();
        hideElem();
         
    }
});




Array.from(navLinks).forEach(links => {
     links.addEventListener('mouseover',function(){
          cursorBig();
     })
     links.addEventListener('mouseout',function(){
          cursorSmall();
     })
})


Array.from(welcomeFooter.children).forEach((elem) => {
     elem.addEventListener('mouseover',function(){
          cursorBig();
     })
     elem.addEventListener('mouseout',function(){
          cursorSmall();
     })
})

/* CHANGE CURSOR WHEN HOVER */ 
welcomeText.addEventListener('mouseover', cursorBig);
welcomeText.addEventListener('mouseout', cursorSmall);
logo.addEventListener('mouseover', cursorBig);
logo.addEventListener('mouseout', cursorSmall);
cart.addEventListener('mouseover', cursorBig)
cart.addEventListener('mouseout', cursorSmall);
menu.addEventListener('mouseover', cursorBig)
menu.addEventListener('mouseout', cursorSmall);


        menu.addEventListener('click',() => {
            menu.classList.toggle('active');
           nav.classList.toggle('active');
        })

// Run Function 


