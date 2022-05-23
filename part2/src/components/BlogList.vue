<template>
  <div v-for='(data) in blogData' :key="data.number">
    <!-- <h5>
      <router-link :to="`/detail/${data.number}`">{{ data.title }}</router-link>
    </h5> -->
    <a @click="$router.push(`/detail/${data.number}`)">{{ data.title }}</a>
    <p>{{ data.date }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  props: {
    blogData: Array,
  },
}
</script>

<style>

</style>