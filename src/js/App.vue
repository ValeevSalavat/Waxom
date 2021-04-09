<template>
    <div id="app">
        <h1 class="content">Catalog List</h1>
        <nav class="header__nav-vue content">
            <Search v-on:Searching="search"/>
            <Bin v-bind="bin" />
        </nav>
        <List
            v-bind:filteredGoods="filteredGoods"
            v-on:AddToBin="addToBin"
        />
        <BinContainer
            v-bind:bin="bin"/>
    </div>
</template>

<script>

import List from './vue-components/List.vue'
import Bin from './vue-components/Bin.vue'
import Search from './vue-components/Search.vue'
import BinContainer from './vue-components/BinContainer.vue'

export default {
    name:'app',
    data(){
        return{
            goods:[],
            filteredGoods:[],
            searchLine:'',
            bin:[],
            API:'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    components:{
       List,
       Bin,
       BinContainer,
       Search
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
          }
        }
        xhr.open('GET',URL,true);
        xhr.send();
      },
      fetchGoods(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            reject(new Error('timeout'));
            },5000);
    
            this.makeGetRequest(`${this.API}/catalogData.json`,(goods)=>{
            this.goods=JSON.parse(goods);
            this.filteredGoods=JSON.parse(goods);
            resolve(JSON.parse(goods));
            });
        });
      },
      search(line){
          console.log(line);
          const regexp = new RegExp(line,'i');
          this.filteredGoods=this.goods.filter(good => regexp.test(good.product_name));
      
      },
      addToBin(el){
          let contains = (arr,item) =>{
            let output = false;
            arr.forEach(element=>{
                if(element==item) output = true;
            });
            return output;
         };
       //console.log(this.bin);
        if(contains(this.bin,el)){
          alert(`Товар ${el.product_name} уже в корзине`)
        }
        else this.bin.push(el);
      }
    }, 
    mounted(){
        this.fetchGoods();
        console.log(this.API);
    }
}
</script>

<style lang="css">
    h1{
        text-align: center;
    }
</style>