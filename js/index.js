//Video start code block
/*
var video = document.querySelector("#video"),
button = document.querySelector(".video-presentation__btn-play");

button.addEventListener("click", function() {
    video.play()
    video.setAttribute("controls","controls");
}, false);
*/

const products = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];

  //{title,price} - используется деструктуризация
  const renderGoodsItem = ({title,price}) => {
    return `<div class="catalog__list-item"><h1>${title}</h1><p>${price}</p></div>`;
  };
  
  const renderGoodsList = (list,querySelector) => {
     let toRender = list.map(item=>renderGoodsItem(item)).join('');
     console.log(toRender);
     document.querySelector(querySelector).innerHTML = toRender;
  }

  renderGoodsList(products,'.catalog__list>.content');