<template>
  <div>
      <div v-for="item in mass" :key="item">
  {{ item }}
</div>
  </div>
</template>

<script>
export default {
  name: 'mass',
  data: function(){
      return {
          mass: [1,2,3]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>