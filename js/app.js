const togglerBtn = document.getElementById('navbarTogglerId');
const navBarContainerElement = document.getElementById('main-nav');
const navBarTextContainerElement = document.getElementById('text-container');

function toggleNavbar() {
  var mainNavElement = document.getElementById("main-nav");
  if (mainNavElement.className === "navbar") {
    mainNavElement.className += " toggled";
    
    navBarContainerElement.style.width = '100%';
    navBarContainerElement.style.textAlign = 'center';
    navBarContainerElement.style.paddingBottom = '0em';

    navBarTextContainerElement.style.display = 'block';
    navBarTextContainerElement.style.textAlign = 'center';

    togglerBtn.style.width = '100%';
    togglerBtn.style.paddingTop = '1em';

  } else {
    mainNavElement.className = "navbar";

    navBarContainerElement.style.padding = '0.8em';
    togglerBtn.style.paddingTop = '';

    navBarTextContainerElement.style.display = '';


  }
}

togglerBtn.addEventListener('click', toggleNavbar);

