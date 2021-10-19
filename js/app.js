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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/ const department = Array.from(document.querySelectorAll('section')) ;
   const nav = document.getElementById('navbar__list') ;
   const numberOfList = department.length ;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


function creatNav () {
    for (section of department) {
        sectionN = section.getAttribute('data-nav') 
        sectionL = section.getAttribute('id')
        listN = document.createElement('li')
        listN.innerHTML = '<a class ="menu__link" href="#' + sectionL +'">'+ sectionN + '</a>'

        nav.appendChild(listN)
    
    }
}
creatNav();






// Add class 'active' to section when near top of viewport

function distanceFromTop(depart){
    const sectionDistanc = depart.getBoundingClientRect() 
    return ( sectionDistanc.top >= 0 )

}

function makeActive () {
    for (section of department) {
      if ( distanceFromTop(section)){
          if (section.classList.contains('your-active-class')){
                section.classList.add('your-active-class')
          }
        }else{
               section.classList.remove('your-active-class') 
        }
        
    
}}

document.addEventListener("scroll" , makeActive)

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active