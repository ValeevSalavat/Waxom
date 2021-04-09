<template>
  <div class="catalog__list-item-vue">
      <a href="#" class="header__nav-item">
          <button class="header__nav-item-bin" v-on:click="clickBin"></button>
      </a>
  </div>
</template>
 
 <script>
 export default {
    data(){
        return{
            isVisibleBin:false
        }
    },
   props:{
     bin:{
       type:Object
     }
   },
   methods:{
      clickBin(){
        this.isVisibleBin = (this.isVisibleBin) ? false :true;
      },
      getSummeryPrice(){
        let summary=0;
        // this.bin.forEach(good=> summary+=good.price);
        return 100;
      }
   }
 }
 </script>

 <style>
 </style>