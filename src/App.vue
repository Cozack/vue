<template>
  <div id="app">
    <h1>input value : {{ inputValue }}</h1>
    <input type="text" v-model.trim="inputValue" @keypress.enter="createNewTodo"/>
    <button @click="createNewTodo">create todo</button>

    <div v-if="todo">{{todo.id}} = {{todo.title}} = {{todo.completed}}</div>

<ul v-if="todos.length">
  <li v-for="todo of todos" :key="todo.id"
      @click="selectedTodoId = todo.id">{{todo.id}} = {{todo.title}} = {{todo.completed}}</li>
</ul>
    <h2 v-else-if="loading">LOADING...</h2>
    <h2 v-else>NO DATA</h2>
    <!--    SHORT METHOD-->
    <!--    <input type="text" v-model="inputValue"-->
    <!--           @keypress="nandlerinput"-->
    <!--           @keypress.enter="alerHandler"/>-->
    <!--    <input type="checkbox" v-model="checkOn"/>-->
    <!--    <div v-for="error of errors" :key="error">{{error}}</div>-->
    <!--    <button @click.once="checkOn = !checkOn">toggle checkbox</button>-->
    <!--    <input type="text" :value="inputValue" @input = "inputValue = $event.target.value"/>-->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      inputValue: '',
      // errors: [],
      // checkOn:false
      todos: [],
      todo:null,
      selectedTodoId:null,
      loading: false
    }
  },
  methods: {
    // nandlerinput(e) {
    //   const {target: {value}} = e
    //   if (value.length >= 3) {
    //     e.preventDefault();
    //   }
    // },
    // alerHandler (){
    //   alert('hello')
    // }
    createNewTodo() {
      if (!this.inputValue) return;
      const newTodo = {
        id: Math.random(),
        title: this.inputValue,
        completed: false
      }
      this.todos.unshift(newTodo);
      this.inputValue = ''
    },
    async fetchTodos() {
      try {
        this.loading = true

        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        this.todos = await res.json()
      } catch (e){
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    async fetchTodo(id) {
      try {
        this.loading = true

        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        this.todo = await res.json()
      } catch (e){
        console.log(e)
      } finally {
        this.loading = false
      }
    }
  },
  watch: {
    selectedTodoId() {
      this.fetchTodo(this.selectedTodoId)
    }
  },

  //lifecycle
  created() {
    console.log(this.inputValue, this.testMethod, 'created')
    this.fetchTodos()
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
