/* ============================ MENU SHOW Y HIDDEN ============================ */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ------------- menu show -------------
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ------------- menu hidden -------------
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ------------- remove menu mobile -------------
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}

navLink.forEach(e => e.addEventListener('click', linkAction))


/* ============================ ACCORDION SKILLS ============================ */
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close"
    }

    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open"
    }
}

skillsHeader.forEach((e) => {
    e.addEventListener('click', toggleSkills)
})


/* ============================ QUALIFICATION TABS ============================ */
const qualificationBtnEdu = document.querySelector('.qualification__button--education')
const qualificationBtnWork = document.querySelector('.qualification__button--work')

const qualificationEdu = document.querySelector('.qualification--education')
const qualificationWork = document.querySelector('.qualification--work')

if(qualificationBtnEdu) {
    qualificationBtnEdu.onclick = function() {
        qualificationBtnEdu.classList.add("qualification__button--active");
        qualificationEdu.classList.add("qualification--active")

        if(qualificationBtnWork.className.includes("qualification__button--active")) {
            qualificationBtnWork.classList.remove("qualification__button--active")
        }

        if(qualificationWork.className.includes("qualification--active")) {
            qualificationWork.classList.remove("qualification--active")
        }
    }
}

if(qualificationBtnWork) {
    qualificationBtnWork.onclick = function() {
        qualificationBtnWork.classList.add("qualification__button--active");
        qualificationWork.classList.add("qualification--active")

        if(qualificationBtnEdu.className.includes("qualification__button--active")) {
            qualificationBtnEdu.classList.remove("qualification__button--active")
        }
        
        if(qualificationEdu.className.includes("qualification--active")) {
            qualificationEdu.classList.remove("qualification--active")
        }
    }
}
    

/* ============================ SERVICES MODAL ============================ */
const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal")
        })
    })
})

// or
// modalCloses.forEach((modalClose, i) => {
//     modalClose.addEventListener('click', () => {
//         modalViews[i].classList.remove("active-modal")
//     })
// })


/* ============================ PORTFOLIO SWIPER ============================ */
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});