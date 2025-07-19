<template>
  <div>
    <!-- Masthead -->
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <img class="masthead-avatar mb-5" :src="withBasePath('/assets/img/salad.png')" alt="Vegetarian Salad" width="200" height="200" />
        <h1 class="masthead-heading text-uppercase mb-0">vegetarian recipes</h1>
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-utensils"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <p class="masthead-subheading font-weight-light mb-0">
          This recipes will show you that becoming a vegetarian is not a missed steak
        </p>
      </div>
    </header>

    <!-- Basics Section -->
    <section class="page-section portfolio" id="basics" style="background-color: #8c271e">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-white mb-0">Basics</h2>
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-leaf"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <div class="row justify-content-center">
          <RecipeModal
            v-for="(item, index) in recipes.basics"
            :key="index"
            :recipe="item.recipe"
            :filename="item.filename"
            type="basics"
            :github-repo="githubRepo"
          />
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Savory</h2>
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-carrot"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <div class="row justify-content-center">
          <RecipeModal
            v-for="(item, index) in recipes.savory"
            :key="index"
            :recipe="item.recipe"
            :filename="item.filename"
            type="savory"
            :github-repo="githubRepo"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="page-section bg-primary text-white mb-0" id="about">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-white">Sweet</h2>
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-candy-cane"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <div class="row justify-content-center">
          <RecipeModal
            v-for="(item, index) in recipes.sweet"
            :key="index"
            :recipe="item.recipe"
            :filename="item.filename"
            type="sweet"
            :github-repo="githubRepo"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import recipesData from '~/lib/data/recipes.json'

const config = useRuntimeConfig()
const githubRepo = config.public.githubRepo

const recipes = ref(recipesData)

const withBasePath = (path) => {
  const base = useNuxtApp().$config.app.baseURL
  return base + path.replace(/^\//, '')
}
</script>