<template>
  <div>
    <h1>single Post with id: {{ $route.params.id }}</h1>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <span v-if="post.author"> Author is: {{ post.author.name }} ({{ post.author.username }})</span>
      <span v-else> Author is Unknown</span>
    </div>

    <button @click="$router.back()">go back</button>
  </div>
</template>

<script>
export default {
  name: "Post",
  created() {
    console.log(this.$route)

    this.fetchPost()
  },
  data() {
    return {
      post: null
    }
  },
  watch: {
    '$route.params.id'() {
      this.fetchPost()
    }
  },
  methods: {
    async fetchPostAuthor(userId) {
      let author;

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const json = await res.json();

        if (!Object.keys(json).length) {
          throw new Error('no user found')
        }
        author = json

      } catch (e) {
        author = {
          name: "No Name",
          username: "No Nickname"
        }
      }
      return author
    },
    async fetchPost() {
      try {
        const {params: {id}} = this.$route;

        if (!id) return;

        const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
        const author = await this.fetchPostAuthor(post.userId)

        this.post = {...post, author};
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
