<template>
  <div class="counter">
<button class="add" v-on:click="add"> +1 </button>
<h1 class="counter">{{counter}} </h1>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data: function(){
      return {
          counter: 0
      }
  },
  methods: {
      add: function(){
          this.counter += 1;
      }
  }
}

</script>


<style scoped>

</style>