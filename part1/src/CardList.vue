<template>
  <div>
    <img :src="rooms.image" class="room-img">
    <h2 @click="emitModal">{{ rooms.title }}</h2>
    <p>{{ rooms.price }}원</p>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    rooms: Object,
  },
  methods: {
    emitModal() {
      this.$emit('openModal', this.rooms.id)
    }
  }
}
</script>

<style>

</style>