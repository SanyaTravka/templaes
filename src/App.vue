<template>
  <div id="app">
    <HelloWorld />
    <Counter />
    <ToDoList />
    <List />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import ToDoList from './components/ToDoList.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    ToDoList,
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
