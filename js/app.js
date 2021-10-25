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


// Define Global Variables



const sections = document.querySelectorAll('section');
const nav = document.querySelector('#navbar__list');
 

// End Global Variables


// build the nav
// Scroll to anchor ID using scrollTO event




function creatNav () {


    for (let i = 0 ; i < sections.length; i++) {
       const newNav = document.createElement('li') ;
       const heading = sections[i].querySelector('h2') ;
       const newNavName = heading.innerText;
      const  newNavId = sections[i].getAttribute('id')

      newNav.insertAdjacentHTML('afterbegin' ,`<a class='menu-link' href = '#${newNavId}'>${newNavName}</a>`)
            
      
    nav.appendChild(newNav)

    
    }

}
creatNav();






// Add class 'active' to section when near top of viewport



document.addEventListener("scroll" , function makeActive () {
    for (section of sections) {
      if ( section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top <= 500 ){
          if (!section.classList.contains('your-active-class')){
             const   links = document.querySelectorAll('a.menu-link') ;
                for(link of links) {
                    const heading = section.querySelector('h2')
                    const sectionA = heading.innerText ;
                    let linkA = link.innerText;
                    if (sectionA !== linkA) {
                        section.classList.add('your-active-class')

                        link.classList.remove('active-li');


                    } else {
                        link.classList.add('active-li')

                    }
                }
                
          }
        }else{
               section.classList.remove('your-active-class') 


                 
        }
        
    
}})

//make scroll button

let scrollButton = document.querySelector('#back') ;
document.addEventListener('scroll', function(){
    window.pageYOffset <= 800 ?scrollButton.style.visibility = 'hidden':scrollButton.style.visibility = 'visible';

});

    scrollButton.addEventListener('click',function(){
           scrollTo(top)
    
    
    })

