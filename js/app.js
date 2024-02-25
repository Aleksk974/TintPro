const togglerBtn = document.getElementById('navbarTogglerId');
const navBarContainerElement = document.getElementById('main-nav');
const navBarTextContainerElement = document.getElementById('text-container');

function toggleNavbar() {
  var mainNavElement = document.getElementById("main-nav");
  if (mainNavElement.className === "navbar") {
    mainNavElement.className += " toggled";
    
    navBarContainerElement.style.width = '100%';
    navBarContainerElement.style.textAlign = 'center';

    navBarTextContainerElement.style.display = 'block';
    navBarTextContainerElement.style.textAlign = 'center';

  } else {
    mainNavElement.className = "navbar";
    navBarTextContainerElement.style.display = '';
  }
}

togglerBtn.addEventListener('click', toggleNavbar);

