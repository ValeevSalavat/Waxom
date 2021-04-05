
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
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
    constructor(product_name,price){
        this.product_name=product_name;
        this.price=price;
    }
    render(){
        return `<div class="catalog__list-item"><h1>${this.product_name}</h1><p>${this.price}</p></div>`;
    }
}
class GoodsList{
    constructor(){
        this.goods=[];
        this.filteredGoods=[];
    }
    fetchGoods(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          reject(new Error('timeout'));
        },1000);
 
        makeGetRequest(`${API_URL}/catalogData.json`,(goods)=>{
          this.goods=JSON.parse(goods);
          this.filteredGoods=JSON.parse(goods);
          resolve(JSON.parse(goods));
        });
      });
    }
    render(selector) {
        let listHtml = '';
        // console.log(this.filteredGoods);
        this.filteredGoods.forEach(good => {   
          const goodItem = new GoodsItem(good.product_name, good.price);
         // console.log(goodItem);
          listHtml += goodItem.render();
        });
        document.querySelector(selector).innerHTML = listHtml;
    }
    getSummeryPrice(){
      let summary=0;
      this.goods.reduce(good=>{
        summary+=good.price;
      });
      return summary;
    }

    filterGoods(value){
      const regexp = new RegExp(value,'i');
      this.filteredGoods=this.goods.filter(good => regexp.test(good.product_name));
      this.render('.catalog__list>.content');
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

function makeGetRequest(URL,callback){
  let xhr;
  if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest();
  }
  else if (window.ActiveXObject){
    xhr = new ActiveXObject("Microsoft.XMLHTTP")
  }

  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
      callback(xhr.responseText);
    }
  }
  xhr.open('GET',URL,true);
  xhr.send();
}

window.onload = () =>{
  const list = new GoodsList();

  list.fetchGoods()
      .then((data)=>{
        list.render('.catalog__list>.content');
      })
      .catch((error)=>{
        console.log(error);
      });

  const searchButton = document.querySelector(".header__nav-item-search");
  const searchInput = document.querySelector(".header__nav-item-input");

  searchButton.addEventListener('click',(e)=>{
    const value = searchInput.value;
    list.filterGoods(value);
  });
}

const bin = new Bin();
const addToBin=(item)=>bin.push(new BinItem(item));

let vueApp = new Vue({
    el:'#vue-app',
    data:{
      goods:[],
      filteredGoods:[],
      bin:[],
      searchLine:'',
      isVisibleBin:false      
    },
    methods:{
      makeGetRequest(URL,callback){
        let xhr;
        if(window.XMLHttpRequest){
          xhr=new XMLHttpRequest();
        }
        else if (window.ActiveXObject){
          xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }
      
        xhr.onreadystatechange=function(){
          if(xhr.readyState==4){
            callback(xhr.responseText);
            // console.log(JSON.parse(xhr.responseText));
          }
        }
        xhr.open('GET',URL,true);
        xhr.send();
      },
      clickFinder(){
        this.filterGoods;
      },
      clickBin(){
        this.isVisibleBin = (this.isVisibleBin) ? false :true;
      },
      addToBin(item){
        if(contains(this.bin,item)){
          alert(`Товар ${item.product_name} уже существует`)
        }
        else this.bin.push(item);
      },
      deleteFromBin(item){
        if(contains(this.bin,item)){
          alert(`Товар ${item.product_name} уже существует`)
        }
        else this.bin.push(item);
      },
      getSummeryPrice(){
        let summary=0;
        this.bin.forEach(good=> summary+=good.price);
        return summary;
      }
    },
    computed:{
      filterGoods: function(){
        const regexp = new RegExp(this.searchLine,'i');
        this.filteredGoods=this.goods.filter(good => regexp.test(good.product_name));
      },
    },
    mounted(){
      this.makeGetRequest(`${API_URL}/catalogData.json`, (goods) => {
        this.goods=JSON.parse(goods);
        this.filteredGoods=JSON.parse(goods);
      });
      
    }
});

let contains = (arr,item) =>{
  let output = false;
  arr.forEach(element=>{
    if(element==item) output = true;
  });
  return output;
};