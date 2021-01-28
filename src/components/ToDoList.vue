<template>
  <div class="counter">
<input type="text" v-model="mess">
<button class="add" v-on:click="add">отправить</button>
  <ul>
      <li v-for="item in mas" :key="item">
          {{ item }}
      </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'DataComponent',
  data: function(){
      return {
          mess: '',
          mas: []
      }
  },

   methods: {
      add: function(){
         this.mas.push( this.mess );
      }
   }
}

</script>


<style scoped>

</style>