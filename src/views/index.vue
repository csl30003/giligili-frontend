<template>
  <header>
    <div><img src="../assets/images/bilibili-autumn-1.png" alt="1"></div>
    <div><img src="../assets/images/bilibili-autumn-2.png" alt="2"></div>
    <div><img src="../assets/images/bilibili-autumn-3.png" alt="3"></div>
    <div><img src="../assets/images/bilibili-autumn-4.png" alt="4"></div>
    <div><img src="../assets/images/bilibili-autumn-5.png" alt="5"></div>
    <div><img src="../assets/images/bilibili-autumn-6.png" alt="6"></div>

    <br/>

    <nav>
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">番剧</a></li>
        <li><a href="#">直播</a></li>
        <li><a href="#">游戏中心</a></li>
        <li><a href="#">会员购</a></li>
        <li><a href="#">漫画</a></li>
        <li><a href="#">赛事</a></li>
      </ul>

      <div class="search-box">
        <input v-model="searchInput" @keyup.enter="search" type="text" placeholder="搜索" class="search-input">
        <button @click="search" class="search-btn">搜索</button>
      </div>

      <ul>
        <li><a href="#">用户</a></li>
        <li><a href="#">大会员</a></li>
        <li><a href="#">消息</a></li>
        <li><a href="#">动态</a></li>
        <li><a href="#">收藏</a></li>
        <li><a href="#">历史</a></li>
        <li><a href="#">创作中心</a></li>
        <li><a href="#">投稿</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import {ref, onMounted} from 'vue'

// 照片
const images = ref(null)

// 鼠标移动时，图片的偏移量和模糊度
onMounted(() => {
  images.value = document.querySelectorAll('header > div > img')

  document.querySelector('header').addEventListener('mousemove', (e) => {
    let percentage = e.clientX / window.outerWidth
    let offset = 10 * percentage
    let blur = 20

    for (let [index, image] of images.value.entries()) {
      offset *= 1.3

      let blurValue = (Math.pow((index / images.value.length - percentage), 2) * blur)

      image.style.setProperty('--offset', `${offset}px`)
      image.style.setProperty('--blur', `${blurValue}px`)
    }
  })
})

// 搜索框内容
let searchInput = ref('')

// 搜索
const search = async () => {
  alert(searchInput)
}
</script>

<style scoped>
body {
  margin: 0;
}

header {
  height: 160px;
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0); /* 添加透明背景 */
}

header > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1; /* 将图片的z-index值设置为比按钮低的值 */

  --offset: 0px;
  --blur: 2px;
}

header > div > img {
  display: block;
  width: 110%;
  height: 100%;
  object-fit: cover;

  transform: translatex(var(--offset));
  filter: blur(var(--blur));
}

nav {
  background-color: rgba(0, 0, 0, 0); /* 添加透明背景 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav ul li {
  margin-right: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: large;
}

.search-box {
  display: flex;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
}

.search-input {
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 10px;
  font-size: large;
  width: 200px;
  transition: all 0.5s ease-out;
}

.search-input:focus {
  width: 300px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s ease-out;
}

.search-btn {
  size: 30px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: large;
  color: white;
}
</style>