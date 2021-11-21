import '../scss/style.scss';

const screenWidth = window.innerWidth;
let hiddenElements = document.querySelectorAll('.hidden');

const swiper__brands = new Swiper('.swiper__brands', {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 10,
    direction: 'horizontal',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination__brands',
    },
});

const swiper__view = new Swiper('.swiper__view', {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 10,
    direction: 'horizontal',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination__view',
    },
});

const swiper__prices = new Swiper('.swiper__prices', {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 10,
    direction: 'horizontal',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination__prices',
    },
});

if (screenWidth >= 768){
    for(let i = 0; i < hiddenElements.length; i++){
        hiddenElements[i].classList.remove('hidden');
    }
    let descriptionText = document.querySelector('.description__item-text');

    swiper__brands.destroy();
    swiper__view.destroy();
    swiper__prices.destroy();
}

const closeBtn = [
  document.querySelector('.mobile__button-close'),
  document.querySelector('.modal__call-btn_close'),
  document.querySelector('.modal__feedback-btn_close')
];
console.log(closeBtn.length);
const burgerBtn = document.querySelector('.button__burger');
const callBtn = document.querySelector('.button__call');
const chatBtn = document.querySelector('.button__chat');
const modalMenu = document.querySelector('.modal__menu');
const modalCall = document.querySelector('.modal__call');
const modalFeedback = document.querySelector('.modal__feedback');
const body = document.querySelector('body');
const base = document.querySelector('.base');

/*Modals*/

burgerBtn.addEventListener('click', function(){
  if(modalMenu.classList.contains('modal__menu-hidden')){
    modalMenu.classList.remove('modal__menu-hidden');
    body.classList.add('modal__block');
    base.classList.add('modal__open');
  }
})

document.querySelector('.mobile__button-close').addEventListener('click', function(){
  modalMenu.classList.add('modal__menu-hidden');
  body.classList.remove('modal__block');
  base.classList.remove('modal__open');
})

callBtn.addEventListener('click', function(){
  if(modalCall.classList.contains('modal__call-hidden')){
    modalCall.classList.remove('modal__call-hidden');
    body.classList.add('modal__block');
    base.classList.add('modal__open');
  }
})

document.querySelector('.modal__call-btn_close').addEventListener('click', function(){
  modalCall.classList.add('modal__call-hidden');
  body.classList.remove('modal__block');
  base.classList.remove('modal__open');
  document.querySelector('.modal__blur').classList.remove('modal__blur--visible');
  if (modalMenu.classList.length<2){
    body.classList.add('modal__block');
    base.classList.add('modal__open');
  }
})

chatBtn.addEventListener('click', function(){
  if(modalFeedback.classList.contains('modal__feedback-hidden')){
    modalFeedback.classList.remove('modal__feedback-hidden');
    body.classList.add('modal__block');
    base.classList.add('modal__open');
  }
})

document.querySelector('.modal__feedback-btn_close').addEventListener('click', function(){
  modalFeedback.classList.add('modal__feedback-hidden');
  body.classList.remove('modal__block');
  base.classList.remove('modal__open');
  document.querySelector('.modal__blur').classList.remove('modal__blur--visible');
  if (modalMenu.classList.length<2){
    body.classList.add('modal__block');
    base.classList.add('modal__open');
  }
})

document.querySelector('.mobile__button-call').addEventListener('click', function(){
  if(modalCall.classList.contains('modal__call-hidden')){
    document.querySelector('.modal__blur').classList.add('modal__blur--visible');
    modalCall.classList.remove('modal__call-hidden');
    body.classList.add('modal__block');
    base.classList.add('modal__open');
  }
})

document.querySelector('.mobile__button-chat').addEventListener('click', function(){
  if(modalFeedback.classList.contains('modal__feedback-hidden')){
    document.querySelector('.modal__blur').classList.add('modal__blur--visible');
    modalFeedback.classList.remove('modal__feedback-hidden');
    body.classList.add('modal__block');
    base.classList.add('modal__open');
  }
})

document.querySelector('.modal__blur').addEventListener('click', function() {
  modalCall.classList.add('modal__call-hidden');
  modalFeedback.classList.add('modal__feedback-hidden');
  body.classList.remove('modal__block');
  base.classList.remove('modal__open');
  document.querySelector('.modal__blur').classList.remove('modal__blur--visible');
})

/*PageButtons*/
  /*Brands*/
const brandsShowItems = document.querySelector('.repair__btn_show');
const brandsShowItemsText = document.querySelector('.repair__btn_show > span');
const brandsShowItemsImg = document.querySelector('.repair__btn_img');
const brandsItemToShow = document.querySelector('.swiper__brands');

brandsShowItems.addEventListener('click', function(){
  if(brandsShowItemsText.innerHTML == 'Показать все'){
    brandsShowItemsText.innerHTML = 'Скрыть все';
    brandsShowItemsImg.classList.add('rotate');
    brandsItemToShow.style.height = '100%';

  }
  else{
    brandsShowItemsText.innerHTML = 'Показать все'
    brandsShowItemsImg.classList.remove('rotate');
    brandsItemToShow.style.height = '160px';
  }
})

  /*View*/
const viewShowItems = document.querySelector('.view_btn');
const viewShowItemsText = document.querySelector('.view_btn > span');
const viewShowItemsImg = document.querySelector('.view_img');
const viewItemToShow = document.querySelector('.swiper__view');

viewShowItems.addEventListener('click', function(){
  if(viewShowItemsText.innerHTML == 'Показать все'){
    viewShowItemsText.innerHTML = 'Скрыть все';
    viewShowItemsImg.classList.add('rotate');
    viewItemToShow.style.height = '100%';

  }
  else{
    viewShowItemsText.innerHTML = 'Показать все'
    viewShowItemsImg.classList.remove('rotate');
    viewItemToShow.style.height = '160px';
  }
})