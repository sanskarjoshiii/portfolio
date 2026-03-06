'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });






// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}






// resume download toast
document.getElementById('resume-download-btn').addEventListener('click', function () {
  var toast = document.getElementById('resume-toast');
  toast.classList.add('show');
  setTimeout(function () { toast.classList.remove('show'); }, 2500);
});

// lightbox gallery images
const projectImages = {
  'sketchstix': [
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772722029/sketchstix/sketchstix-web/sketchstix/sketchstix-web/1.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772722033/sketchstix/sketchstix-web/sketchstix/sketchstix-web/2.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772722036/sketchstix/sketchstix-web/sketchstix/sketchstix-web/3.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772722039/sketchstix/sketchstix-web/sketchstix/sketchstix-web/4.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772722043/sketchstix/sketchstix-web/sketchstix/sketchstix-web/5.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772722046/sketchstix/sketchstix-web/sketchstix/sketchstix-web/6.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772722050/sketchstix/sketchstix-web/sketchstix/sketchstix-web/7.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772722053/sketchstix/sketchstix-web/sketchstix/sketchstix-web/8.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772722056/sketchstix/sketchstix-web/sketchstix/sketchstix-web/9.png"
  ],
  'aifraud': [
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772721343/sketchstix/aifrauddetection/sketchstix/aifrauddetection/OVERALL%20DASHBOARD.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772721363/sketchstix/aifrauddetection/sketchstix/aifrauddetection/WEBSITE%20SCANNING.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772721337/sketchstix/aifrauddetection/sketchstix/aifrauddetection/EMAIL%20SCANNING.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772721349/sketchstix/aifrauddetection/sketchstix/aifrauddetection/REPORT%20GENERATED.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772721346/sketchstix/aifrauddetection/sketchstix/aifrauddetection/PDF%20REPORT.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772721340/sketchstix/aifrauddetection/sketchstix/aifrauddetection/HISTORY.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772721359/sketchstix/aifrauddetection/sketchstix/aifrauddetection/RUNTIME%20SCANNING.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772721333/sketchstix/aifrauddetection/sketchstix/aifrauddetection/DASHBOARD%20FOR%20RUNTIME.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772721356/sketchstix/aifrauddetection/sketchstix/aifrauddetection/RUNTIME%20EMAIL%20SCANNING%20CONNECT.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772721353/sketchstix/aifrauddetection/sketchstix/aifrauddetection/REPORTS%20FOR%20RUNTIME%20SCANNING.png"
  ],
  'dg': [
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434110/sketchstix/digitalgrampanchayat/home%20page.jpg",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434136/sketchstix/digitalgrampanchayat/login%20page.jpg",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434142/sketchstix/digitalgrampanchayat/navigation%20menu.jpg",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434083/sketchstix/digitalgrampanchayat/about%20us%201.jpg",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434088/sketchstix/digitalgrampanchayat/about%20us%202.jpg",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434093/sketchstix/digitalgrampanchayat/about%20us.jpg",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434098/sketchstix/digitalgrampanchayat/fund%20details.jpg",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434103/sketchstix/digitalgrampanchayat/fund%20receipt%20and%20expendeture.jpg",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434160/sketchstix/digitalgrampanchayat/nearby%20services.jpg"
  ],
  'lickies': [
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434134/sketchstix/lickies/carosal/1.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434208/sketchstix/lickies/carosal/2.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434424/sketchstix/lickies/carosal/3.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434741/sketchstix/lickies/carosal/4.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434847/sketchstix/lickies/carosal/5.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434897/sketchstix/lickies/carosal/6.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434923/sketchstix/lickies/carosal/7.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434089/sketchstix/lickies/1_Untitled%20design.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434109/sketchstix/lickies/2_Green%20Playful%20Pet%20Shop%20Instagram%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434207/sketchstix/lickies/3_Pamplet%20strawberry%20yak%20log.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434279/sketchstix/lickies/4_Pamplet%20cranberry%20yak%20log.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434322/sketchstix/lickies/6_Pamplet%20blueberry%20yak%20log.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434930/sketchstix/lickies/7_Pamplet%20coconut%20yak%20log.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434934/sketchstix/lickies/8_CALMS%20HOLIDAY%20ANXIETY%21.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434951/sketchstix/lickies/9_Celebrating%20with%20every%20paw%20that%20calls%20India%20home.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434955/sketchstix/lickies/10_Purple%20and%20Yellow%20Photo%20Dogs%20Instagram%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434961/sketchstix/lickies/11_GOLDEN%20RETRIEVER%20REEL.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434963/sketchstix/lickies/12_CHICKEN%20JERKY%20POST.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434967/sketchstix/lickies/13_LABRADOR%20RETRIEVER%20REEL.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434969/sketchstix/lickies/14_Functional%20Chews%20for%20your%20dog%E2%80%99s%20natural%20instincts.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434971/sketchstix/lickies/15_Orange%20Blue%20Halftone%20Pet%20Shop%20Promotion%20Instagram%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434973/sketchstix/lickies/16_LAST%20DAY%20AT.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434979/sketchstix/lickies/17_VALENTINE%20DAY.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434983/sketchstix/lickies/18_MIX%20REEL.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434986/sketchstix/lickies/19_White%20and%20Purple%20Modern%20Bright%20Animal%20Care%20Pet%20Shop%20Special%20Sale%20Discount%20Promo%20Instagram%20Post%20Portrait.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434988/sketchstix/lickies/20_White%20and%20Blue%20Playful%20Cutout%20Pet%20Supplies%20Instagram%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434992/sketchstix/lickies/21_Soft%20Pink%20Playful%20Teamwork%20Tips%20Flyer.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434996/sketchstix/lickies/22_Red%20Black%2C%20and%20White%20Bold%20Business%20Marketing%20Instagram%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434998/sketchstix/lickies/23_Orange%20and%20Yellow%20Gradient%20Pet%20Food%20Instagram%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435002/sketchstix/lickies/24_VALENTINE%20DAY%202.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435007/sketchstix/lickies/25_PUPPY%20ENERGY.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435012/sketchstix/lickies/26_INDIE%20REEL.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435014/sketchstix/lickies/27_TOY%20PODDLE%20REEL.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435029/sketchstix/lickies/28_Brown%20and%20White%20Illustrative%20Pet%20Grooming%20Promotion%20Instagram%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435033/sketchstix/lickies/29_Lickies%20Pet%20Munchies.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435038/sketchstix/lickies/30_Blue%20and%20White%20Playful%20Illustrative%20Organic%20%20Pet%20Food%20Instagram%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435043/sketchstix/lickies/31_Green%20and%20Yellow%20Playful%20Pet%20Supplies%20Instagram%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435047/sketchstix/lickies/32_Peach%20And%20Orange%20Minimalist%20Typography%20Pet%20Healthy%20Food%20Promotion%20Facebook%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435050/sketchstix/lickies/33_BIG%20NEWS%21.png"
  ],
  'opalina': [
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434137/sketchstix/opalina/2_REEL%20POST%201.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772434278/sketchstix/opalina/3_TRADITION.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435052/sketchstix/opalina/4_VALENTINE%20DAY.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435055/sketchstix/opalina/5_Refresh%20your%20Wardrobe%20with%20Our.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435056/sketchstix/opalina/6_Sale%20is%20live%20now%21.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435059/sketchstix/opalina/7_%E2%80%9CMulti%20functional%20treat%20Refresh%20your%20Wardrobe%20with%20Our.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435062/sketchstix/opalina/8_OPALINA.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435065/sketchstix/opalina/9_Sale.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435068/sketchstix/opalina/10_Fashion%20Brand%20Clothing%20and%20Accessories%20Shopping%20Guide%20Instagram%20Post.png",
    "https://res.cloudinary.com/dzlc5fggl/image/upload/v1772435070/sketchstix/opalina/11_Saree%20Collections.png"
  ]
};

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxCounter = document.getElementById('lightbox-counter');

let currentImages = [];
let currentIndex = 0;

function openLightbox(gallery) {
  currentImages = projectImages[gallery] || [];
  if (!currentImages.length) return;
  currentIndex = 0;
  lightboxImg.src = currentImages[0];
  lightboxCounter.textContent = '1 / ' + currentImages.length;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  lightboxImg.classList.add('fade');
  lightboxImg.src = currentImages[currentIndex];
  lightboxCounter.textContent = (currentIndex + 1) + ' / ' + currentImages.length;
  lightboxImg.onload = function () { lightboxImg.classList.remove('fade'); };
}

lightboxClose.addEventListener('click', closeLightbox);

lightboxPrev.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateLightboxImage();
});

lightboxNext.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateLightboxImage();
});

lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', function (e) {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxImage();
  } else if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightboxImage();
  } else if (e.key === 'Escape') {
    closeLightbox();
  }
});

document.querySelectorAll('[data-gallery]').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    openLightbox(this.dataset.gallery);
  });
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}