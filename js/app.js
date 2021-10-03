/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let li,
    link,
    list,
    cname,
    ul;
let sections = ['section 1','section 2','section 3','section 4'];
const vpw = window.innerWidth || document.documentElement.clientWidth;
const vph = window.innerHeight || document.documentElement.clientHeight; 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
ul = document.getElementById('navbar__list');

function createlist(sections){

for(let i = 0; i < sections.length; i++){
li = document.createElement('li');
a = document.createElement('a');
li.append(a);
a.appendChild(document.createTextNode(sections[i]));
a.setAttribute("class", "section"+[i+1]);
ul.appendChild(li);

}

}
createlist(sections);

list = document.querySelectorAll('li');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('mouseover', function(event) {
        list[i].style.cssText = 'background-color:black;color:white';
    });
    list[i].addEventListener('mouseout', function(event) {
        list[i].style.cssText = 'background-color:white;color:black';
    });


}

link = document.querySelectorAll('a');    

for (let i = 0; i < link.length; i++) {
link[i].addEventListener("click", function(event) {
    cname = link[i].getAttribute('class');
document.getElementById(cname).scrollIntoView({
    behavior: 'smooth'
});
event.preventDefault();

});
}
// Build menu 

// Scroll to section on link click

// Set sections as active
const header = document.querySelector('.main__hero');
function isInViewPort(e){
    const check = e.getBoundingClientRect();
    return(
        check.top + check.height >= 0 && 
        check.bottom <= check.height + header.offsetHeight &&
        check.top <= vph &&
        check.left + check.width >= 0 &&
        check.left <= vpw
    );
}
const sec = document.querySelectorAll('section');

function scroll(){
    window.onscroll = function(){
        for(let i = 0; i < sec.length; i++){
            
            if(isInViewPort(sec[i]) ){
                sec[i].classList.add('your-active-class');
            }
            else{
                sec[i].classList.remove('your-active-class');
    
            }
         
            
        }

    
    }
}
scroll();

