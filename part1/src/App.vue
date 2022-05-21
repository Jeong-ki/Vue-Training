<template>

  <div class="menu end">
    <a v-for="(menu, i) in menuList" :key="i">{{ menu }}</a>
  </div>

  <transition name="fade">
    <ModalOn @closeModal="modal=false" :roomData="roomData" :clickNum="clickNum" :modal="modal" />
  </transition>

  <DiscountTest v-if="showDiscount == true" />

  <button @click="priceSort">가격순정렬버튼</button>
  <button @click="sortBack">되돌리기</button>

  <CardList @openModal="modal=true; clickNum=$event" v-for="(room, i) in roomData" :key="i" :rooms="room" />
</template>

<script>
import roomData from './assets/data.js';
import DiscountTest from './DiscountTest.vue';
import ModalOn from './ModalOn.vue';
import CardList from './CardList.vue';

export default {
  name: "App",

  data(){
    return {
      showDiscount : true,
      오브젝트 : { name: 'kim', age: 20 },
      clickNum : 0,
      originalRoomData: [...roomData],
      roomData,
      modal : false,
      menuList : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices : [50, 120, 80],
      신고수 : [0, 0, 0],
    }
  },
  methods : {
    increase(num) {
      this.신고수[num]++;
      console.log(num);
    },
    priceSort() {
      this.roomData.sort(function(a, b) {
        return a.price - b.price;
      });
    },
    sortBack() {
      this.roomData = [...this.originalRoomData];
    }
  },

  

  components: {
    DiscountTest,
    ModalOn,
    CardList,
  },
};
</script>

<style>
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 0 0 5px 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
