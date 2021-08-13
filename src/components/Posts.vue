<template>
<div>
  <h1>
    Posts:
  </h1>

  <ul :style="{maxHeight:'200px', overflow:'auto'}">
    <li v-for="{ id, title } of posts" :key="id">
      <router-link :to="`/posts/${id}`">{{ title }}</router-link>
      </li>
  </ul>

  <hr>

  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Posts",
  created() {
    this.fetchPosts()
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
     async fetchPosts() {
       try {
         this.posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
       } catch (e) {
         console.log(e)
       }
     }
  }
}
</script>

<style scoped>

</style>
