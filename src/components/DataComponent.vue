<template>
  <div class="counter">
<h1 class="counter">{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'DataComponent',
  data: function(){
      return {
          text: "hello"
      }
  }
}

</script>


<style scoped>

</style>