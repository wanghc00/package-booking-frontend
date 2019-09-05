<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br />
    <button @click="inStorage()">包裹入库</button>
    <button @click="subscribe()">预约取件</button>
    <br />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    inStorage:function(){
        this.$router.push({path:"/inStorage"});
    },
    subscribe:function(){
        this.$router.push({path:"/subscribe"});
    }
  }
}
</script>
