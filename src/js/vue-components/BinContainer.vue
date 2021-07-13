<template>
  <div class="bin content" v-show="isVisibleBin">
                <div class="catalog__list-item-vue" v-bind:key="it" v-for="it in bin">
                    <h3>{{ it.product_name }}</h3>
                    <p>{{ it.price }}</p>
                    <button v-on:click="$emit('deleteFromBin',it)">Delete</button>
                </div>
                <p class="bin__actualPrice" v-if="getSummeryPrice() > 0">Стоимость всей корзины:{{getSummeryPrice()}}</p>
                <p class="bin__actualPrice" v-else>Нет данных</p>
  </div>
</template>
 
 <script>
 export default {
    data(){
        return{
            isVisibleBin:true
        }
    },
   props:{
     bin:{
     }
   },
   methods:{
       getSummeryPrice(){
           let total=0;
           this.bin.forEach(item => {
               total+=item.price;
           });
        return total;
       },
      clickBin(){
        
      }
   }
 }
 </script>

 <style lang="scss">
    .bin{
        text-align: center;
    }
 </style>