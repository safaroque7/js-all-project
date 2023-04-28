const mwMenuItem = document.querySelectorAll(".single-menu-class");
for (let i = 0; i < mwMenuItem.length; i++) {
  mwMenuItem[i].addEventListener("click", (e) => {
    for (let j = 0; j < mwMenuItem.length; j++) {
      if (i == j) {
        mwMenuItem[j].classList.toggle("mw-menu-active");
      } else {
        mwMenuItem[j].classList.remove("mw-menu-active");
      }
    }
    e.preventDefault();
  });
}

// let menuBarAllProject = document.querySelector('.menu-bar-all-project');
// menuBarAllProject.addEventListener('click', function(e){
//   let faroque = e.target;
//   faroque = e.target.innerText;
//   faroque = e.target.id;
//   faroque = e.target.className;
//   console.log(faroque);

//   e.preventDefault();
// });

// document.addEventListener("click", function(e) {
//   for (let i = 0; i < menuBarAllProject.lenght; i++) {

//     console.log('Clicked');

//     let result = e.target.menuBarAllProject[i];
//     console.log(result);

//     e.preventDefault();
//   }
// });
