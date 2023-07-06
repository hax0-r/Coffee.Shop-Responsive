let btnScroll = document.getElementById(`btnScroll`);
let navBar = document.getElementById(`nav-bar`);
let navList = document.getElementById(`nav-list`);

navBar.addEventListener('click', () => {
  navList.classList.toggle(`active`)
})

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 250) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
});

btnScroll.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  })
});