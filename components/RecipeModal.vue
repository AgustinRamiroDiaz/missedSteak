<template>
  <div>
    <!-- Portfolio Item -->
    <div class="col-md-6 col-lg-4 mb-5">
      <div class="portfolio-item mx-auto" data-toggle="modal" :data-target="`#portfolio${recipeSlug}`">
        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div class="portfolio-item-caption-content text-center text-white">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" :src="withBasePath(recipe.image)" :alt="recipe.title" width="300" height="200" />
      </div>
    </div>

    <!-- Modal -->
    <div
      class="portfolio-modal modal fade"
      :id="`portfolio${recipeSlug}`"
      tabindex="-1"
      role="dialog"
      :aria-labelledby="`portfolio${recipeSlug}Label`"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
          <div class="modal-body text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <h2
                    class="portfolio-modal-title text-secondary text-uppercase mb-0"
                    :id="`portfolio${recipeSlug}Label`"
                  >
                    {{ recipe.title }}
                  </h2>
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-egg"></i></div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <img class="img-fluid rounded mb-5" :src="withBasePath(recipe.image)" :alt="recipe.title" width="400" height="300" />
                  <p class="mb-5" v-html="recipe.instructions"></p>
                  <button v-if="recipe.link" class="btn btn-primary">
                    <i class="fas fa-external-link-alt fa-fw"></i>
                    <a target="_blank" :href="recipe.link" rel="noopener noreferrer">Link to recipe</a>
                  </button>
                  <button
                    class="btn btn-danger"
                    :id="`deleteRecipe${recipeSlug}`"
                    @click="deleteRecipe"
                  >
                    <i class="fas fa-trash-alt fa-fw"></i> Delete Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  recipe: {
    type: Object,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  githubRepo: {
    type: String,
    required: true
  }
})

const slugify = (text) => {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

const recipeSlug = computed(() => slugify(props.recipe.title))

const withBasePath = (path) => {
  const base = useNuxtApp().$config.app.baseURL
  return base + path.replace(/^\//, '')
}

const deleteRecipe = () => {
  const githubUrl = `https://github.com/${props.githubRepo}/delete/main/lib/recipes/${props.type}/${props.filename}.json`
  window.open(githubUrl, '_blank')
}
</script>

<style scoped>
.portfolio-item {
  position: relative;
  overflow: hidden;
}

.portfolio-item img {
  transition: transform 0.3s ease;
}

.portfolio-item:hover img {
  transform: scale(1.1);
}

.portfolio-item-caption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-item-caption {
  opacity: 1;
}

.portfolio-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.portfolio-modal img {
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>