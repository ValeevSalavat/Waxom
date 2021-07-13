<template>
  <div class="catalog__list content">
      <Item 
        v-bind:item="item"
        v-bind:key="item.id_product"
        v-for="item of filteredGoods"
        v-on:AddToBin="$emit('AddToBin',item)"
      />
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  props:['filteredGoods'],
  components:{
       Item
    },
    methods:{
      addToBin(){
        this.$emit('AddToBin',item)
      }
    }
}
</script>

<style>

</style>