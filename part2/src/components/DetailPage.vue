<template>
  <div>
    <h3>상세페이지</h3>
    <h4>{{ blogData[$route.params.id].title }}</h4>
    <p>{{ blogData[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    blogData: Array,
  }
}
</script>

<style>

</style>