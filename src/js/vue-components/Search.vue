<template>
  <div class="catalog__list-item-vue">
      <a class="header__nav-item-form">
         <input type="search" class="header__nav-item-input" placeholder="Search..." v-model="searchLine">
         <button class="header__nav-item-search" v-on:click="$emit('Searching',searchLine)"></button>         
      </a>
  </div>
</template>
 
 <script>
 export default {
   data(){
       return{
           searchLine:''
       }
   },
   props:{
     item:{
       type:Object
     }
   }
 }
 </script>

 <style lang="scss">
 </style>