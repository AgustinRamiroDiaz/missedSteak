<template>
  <button 
    v-show="showButton"
    @click="scrollToTop"
    class="scroll-to-top position-fixed"
    :style="{ bottom: '15px', right: '15px' }"
  >
    <i class="fa fa-chevron-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top {
  width: 50px;
  height: 50px;
  text-align: center;
  color: #fff;
  background: rgba(90, 92, 105, .5);
  line-height: 45px;
  z-index: 1049;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
}

.scroll-to-top:hover {
  background: #5a5c69;
}

.scroll-to-top:focus {
  color: #fff;
  outline: none;
}
</style>