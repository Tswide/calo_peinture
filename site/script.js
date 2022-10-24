let nav = document.getElementById('nav');
        
window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;

    if(offset > 100) {
        nav.classList.add('scroll')
        mav.style.transition = "all 0.1s";
    } else {
        nav.classList.remove('scroll')
    }
});

//filter
const btnFilter = document.querySelectorAll('li.btn');
const elementFilter = document.querySelectorAll('.filterDiv');

function clearActive() {
  let activeLink = document.querySelector('.active');
  activeLink.classList.remove("active");
}

btnFilter.forEach(element => {
  element.addEventListener('click', function() {
    clearActive();
    element.classList.add('active');
    
    let filter = element.dataset.filter;
    console.log(filter);
    
    elementFilter.forEach(elementFilter => {
      if(!elementFilter.classList.contains(filter)) {
        elementFilter.classList.add('hide');
      } else {
        elementFilter.classList.remove('hide');
      }
    });
  })
});
