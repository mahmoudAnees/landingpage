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
let sections= document.getElementsByTagName('section');

// build the nav
function buildNav() {
  const navBar = document.getElementById('navbar__list');
  for (var i =0 ; i< sections.length ; i++){
    //create the list
    let x= document.createElement('li');
    //create each link tag
    let a= document.createElement('a');
    //adding the text to the link tag
    a.textContent = `section ${i+1} `;
    // assigning the Css class
    a.classList.add('menu__link');

    a.addEventListener("click", function(event) {
      event.preventDefault()
      section[i].scrollIntoView({ behavior: "smooth" });
    });


    x.appendChild(a);
    navBar.appendChild(x);
  }
  return navBar;
};
//calling the function
buildNav();
// Add class 'active' to section when near top of viewport
function posTest(pos){
  //determine the section position
  const position = pos.getBoundingClientRect();
  //setting the function value to be balloon esier to use in if statment
  return position.top >= -50 && position.top < 200;
};
function active(){
    for (var section of sections){
    //if the ballon is true the class will be added and viceverse
      if(posTest(section)){
         section.classList.add('your-active-class');
      }else{
        section.classList.remove('your-active-class');
    }
  }
};


//calling the function
active();

// Scroll to anchor ID using scrollTO event
