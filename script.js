const navLinks = document.getElementById('nav');
const menu = document.getElementById('menu');
const body = document.getElementById('body');

window.addEventListener('resize', getSize);

menu.addEventListener('click', handleMenu);

let currState = false;
let currScreenWidth = window.innerWidth;

// console.log(Window.resizeTo(window.screen.availWidth))

window.onresize = function () {
  currScreenWidth = window.outerWidth;
};

function getSize() {
  // console.log(currScreenWidth)
  if (currScreenWidth >= 767) navLinks.style.display = 'flex';
  if (currScreenWidth < 767) navLinks.style.display = 'none';
}

// console.log(window.outerWidth)
// console.log(currScreenWidth)
// console.log(screen.width)

function handleMenu() {
  currState = !currState;
  navLinks.style.display = currState ? 'flex' : 'none';
}

// if(currScreenWidth>=767) navLinks.style.display = "flex"
