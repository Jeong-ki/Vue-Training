<template>
  <div>
    <MainPost v-for="(data, i) in snsData" :key="i" :snsData="data" />
  </div>
</template>

<script>
import MainPost from "./MainPost.vue";

export default {
  components: {
    MainPost,
  },
  props: {
    snsData: Array,
  }
}
</script>

<style>

</style>