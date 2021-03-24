class Item{
  constructor(price,discount){
    this.price=price;
    this.discount=discount;
  }
  get actualPrice(){
    return this.price - (this.discount*this.price);
  }
}
class GoodsItem{
    constructor(title,price){
        this.title=title;
        this.price=price;
    }
    render(){
        return `<div class="catalog__list-item"><h1>${this.title}</h1><p>${this.price}</p></div>`;
    }
}
class GoodsList{
    constructor(){
        this.goods=[];
    }
    fetchGoods(){
        this.goods=[
            {title:'Shirt', price:150},
            {title:'Socks', price:50},
            {title:'Jacket', price:350},
            {title:'Shoes', price:250},
        ]
    }
    render(selector) {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.title, good.price);
          listHtml += goodItem.render();
        });
        document.querySelector(selector).innerHTML = listHtml;
      }
    getSummeryPrice(){
      let summary=0;
      this.goods.forEach(good=>{
        summary+=good.price;
      });
      return summary;
    }
}

class BinItem extends Item{
  constructor(item,price,discount){
    super(price,discount)
    this.item=item;
  }
}
class Bin{
  constructor(){
    this.items=[];
  }
  push(binItem){
    this.items.push(binItem);
  }
}

window.onload = () =>{
  const list = new GoodsList();
  list.fetchGoods();
  list.render('.catalog__list>.content');
}
const bin = new Bin();
const addToBin=(item)=>bin.push(new BinItem(item));
