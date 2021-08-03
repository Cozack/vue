<template>
  <div id="app">
    <img :alt="imageAlt" :src="imageSrc">
<!--    <button @click="incCounter1">inc2 {{ counter1 }}</button>-->
    <div class="hello">{{ title }}</div>

    <ul>
      <li v-for="(item, index) of items" :key="item" @click="onListItemClick(item)">{{item}} == {{index}}
        <button @click="itemRemove(item,index)">remove</button>
      </li>
    </ul>

    <h1 v-show="counter === 0">Hello</h1>
<!--    <h1 v-if="counter === 0">Hello</h1>-->
<!--    <h1 v-else-if="counter === 1">1</h1>-->
<!--    <h1 v-else-if="counter === 2">2</h1>-->
<!--    <h1 v-else>World</h1>-->

    <Counter :counter="counter" @handleIncClick="incHandler" @handleDecClick="decHandler"/>

  </div>
</template>

<script>
import Counter from './components/Counter'
import Img from './assets/logo.png'

export default {
  name: 'App',
  components: {
    Counter
  },
  data() {
    return {
      counter: 0,
      counter1: 0,
      title: 'Dynamic text',
      imageAlt: 'Vue logo',
      imageSrc: Img,
      items:[1,2,3,4]
    }
  },
  methods: {
    onListItemClick(itemValue) {
      console.log(itemValue)
    },
    itemRemove(item) {
      this.items = this.items.filter(el => el !==item)
    },
    incHandler(a, b, c) {
      console.log(a, b, c)
      this.counter++
    },
    decHandler() {
      this.counter--
    },
    // incCounter1() {
    //   this.counter1++
    // }
  },

  // computed: {
  //   counterVal() {
  //     console.log('xxxxxxxxx')
  //     return `Counter value is ${this.counter}`.toUpperCase().replaceAll(' ', '_')
  //   }
  // }
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

.hello {
  background: chartreuse;
  color: darkcyan;
}
</style>
