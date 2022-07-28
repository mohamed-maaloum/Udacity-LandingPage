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
var sectionOne = document.getElementById("section1");
var sectionTwo = document.getElementById("section2");
var sectionThree = document.getElementById("section3");
var sectionFour = document.getElementById("section4");
var scrollTopButton = document.getElementById("scrollTopButton");
var sectionList_content = document.getElementsByClassName("landing__container");
var sectionList = document.getElementsByClassName("section_class");
var navbar_list = document.getElementById("navbar__list");
var navbar_ui_list;
var navbar_ui_a;
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
// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event


function fillingNavbar() {
    for (var i = 0; i < sectionList.length; i++) {
        navbar_ui_list = document.createElement("li");
        navbar_ui_a = document.createElement("a");

        navbar_ui_a.textContent = "Section" + (i + 1);

        navbar_ui_a.style.color = "black";
        navbar_ui_a.setAttribute("href", "#section" + (i + 1))
        navbar_ui_a.style.textDecoration = "none";


        navbar_ui_list.style.margin = "10px 10px";
        navbar_ui_list.hover
        navbar_ui_list.addEventListener("click", function () {

            //window.scrollTO();
        })
        navbar_ui_list.appendChild(navbar_ui_a)
        navbar_list.appendChild(navbar_ui_list);


    }
    navbar__list.style.textAlign = "left";
}

function init() {
    fillingNavbar();
    scrollE();

}


/**
 * End Main Functions
 * Begin Events
 * 
 */




// Build menu 
// Scroll to section on link click
function scrollButton() {}

function scrollTop() {
    scrollTopButton.addEventListener("click", function () {
        window.scrollTo(0, 0);
    })
}

function scrollE() {
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 200) {
            scrollTopButton.style.visibility = "visible";
            scrollTopButton.addEventListener("click", function () {
                window.scrollTo(0, 0);
            })
        } else {
            scrollTopButton.style.visibility = "hidden";
            scrollTopButton.addEventListener("click", function () {
                window.scrollTo(0, 0);
            })
        }
        //console.log("" + window.scrollY)

        for (var i = 0; i < sectionList.length; i++) {
            
            var SectionTop = sectionList[i].offsetTop;
            var SectionHeight = sectionList[i].offsetHeight;
            
            
            sectionList[i].setAttribute("style","transition :transform 2s");
            
            if (window.scrollY >= (SectionTop- 300) && window.scrollY <= (((SectionTop) + (SectionHeight)) -500 )) {

                
                sectionList[i].style.backgroundColor = "red";
                
                //console.log("section One");
            }
            //else if(window.scrollY > (SectionHeight/2))
            else
                {
                    sectionList[i].style.backgroundColor = "transparent";
                    console.log("transparent")
                }
          
        }


    })
}
// Set sections as active