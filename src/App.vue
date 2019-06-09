<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted(){

    this.$axios({
      url: "https://api.github.com/users",
      method:'GET',
    }).then(res => {
      console.log(res);
    })
  }
}
</script>

<style>

</style>
