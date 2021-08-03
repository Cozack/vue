<template>
  <div class="hello">
{{counter}}

    <button :class="['bold',
      getClassName()
    ]" @click="inc">inc</button>
    <button @click="$emit('handleDecClick')">dec</button>
  </div>
</template>

<script>
export default {
props:{
  counter: {
    type:Number,
    required:true
  },
  test: Function
},
  methods: {
  inc() {
    this.$emit('handleIncClick',1,2,3)
  },
    getClassName(){
    return this.counter > 0 ? 'isInc' : 'isDec'
    }
  }
}
</script>

<style scoped>
.hello {
  background: darkblue;
  color: aqua;
}
.isInc {
  color:red
}

.isDec {
  color:yellowgreen;
}

.bold {
  font-weight: bold;
}
</style>
