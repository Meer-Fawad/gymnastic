let manu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

manu.onclick = ()=>{
    manu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    manu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



  const typed = new Typed('.multiple-text', {
    strings: ['PHYSICAL FITNESS', 'WEIGHT GAIN','STENGHT RUNING','FAT LOSE','WEIGHT LIFITNG','RUNING'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });