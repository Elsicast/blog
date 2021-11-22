<template>
  <div>
    <div v-for="task in toDoList" :key="task.id" class="toDoList">
      <div></div>
    </div>
  </div>
</template>

<script>
import storage from '../utils/storage.js'
// import getCurrentInstance from 'vue'
export default {
  // setup () {
  //   let { proxy } = getCurrentInstance()
  // },
  data () {
    return {
      toDoList: [
        {
          id: '1',
          value: '睡觉',
          done: false
        }
      ]
    }
  },
  methods: {
    // getData () {
    //   // this.axios.get('http://localhost:2538/text').then(_d => {
    //   //   console.log(_d)
    //   // })
    //   console.log(Proxy)
    // }
  },
  mounted () {
    console.log(this.toDoList)
    const doList = storage.get('dolist')
    if (doList) {
      this.toDoList = doList
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
