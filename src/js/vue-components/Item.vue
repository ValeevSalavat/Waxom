<template>
  <div class="catalog__list-item-vue">
      <h3>{{ item.product_name }}</h3>
      <p>{{ item.price }}</p>
      <button v-on:click="$emit('AddToBin',item)">Add to cart</button>         
  </div>
</template>
 
 <script>
 export default {
   props:{
     item:{
       type:Object,
       required:true
     }
   }
 }
 </script>

 <style>
    button{
      padding: 10px;
      background-color:#555555;
      color: #ffffff;
      font-family: 'Raleway';
      border-radius: 10px;
    }
 </style>