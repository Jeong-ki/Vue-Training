<template>
  <div class="discount">
    <h4>지금 결제하면 {{ percent }}% 할인</h4>
  </div>  
</template>

<script>
export default {
  name: 'DiscountTest',

  data() {
    return {
      percent: 3,
    }
  },
  methods: {
    intervalPercent() {
      let a = setInterval(() => {
        if(this.percent > 0) {
          this.percent--;
        } else {
          clearInterval(a);
        }
      }, 1000);
    }
  },
  mounted() {
    this.intervalPercent();
  },
}
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>