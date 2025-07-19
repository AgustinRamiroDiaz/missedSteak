<template>
  <div>
    <!-- Navigation -->
    <nav :class="['navbar navbar-expand-lg bg-secondary text-uppercase fixed-top', { 'navbar-shrink': isNavbarShrunk }]" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="#page-top" @click.prevent="handleSmoothScroll('#page-top')">Missed Steak</a>
        <button
          class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio" @click.prevent="handleSmoothScroll('#portfolio')">Savory</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about" @click.prevent="handleSmoothScroll('#about')">Sweet</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a 
                class="nav-link py-3 px-0 px-lg-3 rounded"
                href="#"
                data-toggle="modal"
                data-target="#newRecipeModal"
              >
                <i class="fas fa-plus mr-1"></i>New Recipe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <slot />

    <!-- Footer -->
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">La peque</h4>
            <p class="lead mb-0">
              Patagonia
              <br />
              Argentina
            </p>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Yo en otros lugares</h4>
            <a class="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/magalipujoll/">
              <i class="fab fa-fw fa-instagram"></i>
            </a>
            <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/magalipujol">
              <i class="fab fa-fw fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- New Recipe Modal -->
    <NewRecipeModal :github-repo="githubRepo" />

    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const config = useRuntimeConfig()
const githubRepo = config.public.githubRepo

const isNavbarShrunk = ref(false)

const handleScroll = () => {
  isNavbarShrunk.value = window.scrollY > 100
}

const handleSmoothScroll = (target) => {
  const element = document.querySelector(target)
  if (element) {
    const navHeight = 72
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>