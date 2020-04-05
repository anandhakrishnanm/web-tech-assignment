const burger = document.querySelector('.burger');
const navbar = document.getElementById('nav');
const links = document.querySelectorAll('.links');
let mode=1;
const windowWidth  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const showMenu = () => {
     burger.addEventListener('click', () => {
         if(mode==1){
            navbar.style.display = "block";
            mode=0;
         }
         else{
            navbar.style.display = "none";
            mode=1;
         }
     }); 
}
links.forEach(item => {
    item.addEventListener('click', () => {
        if(windowWidth < 500){
            navbar.style.display = "block";
            mode=1;
        }
    });
        
    });


showMenu();