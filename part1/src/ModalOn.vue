<template>
  <div class="black-bg" v-if="modal">
    <div class="white-bg">
      <strong>{{ roomData[clickNum].title }}</strong>
      <p>{{ roomData[clickNum].content }}</p>
      <input v-model="month">
      <p>{{ month }}개월 선택함 : {{roomData[clickNum].price * month}} 원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalOn',
  data() {
    return {
      month: 1,
    }
  },
  watch : {
    month(a) {
      if (a >= 13) {
        alert('13이상 입력하지 마세요');
      } else if (isNaN(a) == true) {
        alert('숫자만 입력하세요.');
        this.month = 1;
      }
    },
  },
  updated() {
    if (this.month == 2) {
      alert('3개월부터 선택가능');
    }
  },
  props: {
    roomData : Object,
    clickNum : Number,
    modal : Boolean,
  },
}
</script>

<style>

</style>