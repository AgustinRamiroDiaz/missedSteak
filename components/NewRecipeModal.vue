<template>
  <div class="portfolio-modal modal fade" id="newRecipeModal" tabindex="-1" role="dialog" aria-labelledby="newRecipeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
        <div class="modal-body text-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="newRecipeModalLabel">Add New Recipe</h2>
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon"><i class="fas fa-utensils"></i></div>
                  <div class="divider-custom-line"></div>
                </div>
                <form id="recipeForm" class="mb-5">
                  <div class="form-group">
                    <label for="recipeTitle">Recipe Title</label>
                    <input type="text" class="form-control" id="recipeTitle" v-model="formData.title" required />
                  </div>
                  <div class="form-group">
                    <label for="recipeImage">Image URL</label>
                    <input type="url" class="form-control" id="recipeImage" v-model="formData.image" required />
                  </div>
                  <div class="form-group">
                    <label for="recipeInstructions">Instructions</label>
                    <textarea class="form-control" id="recipeInstructions" rows="5" v-model="formData.instructions" required></textarea>
                  </div>
                  <div class="form-group">
                    <label for="recipeLink">Original Recipe Link (optional)</label>
                    <input type="url" class="form-control" id="recipeLink" v-model="formData.link" />
                  </div>
                  <div class="form-group">
                    <label>Recipe Type</label>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="recipeType" id="typeSavory" value="savory" v-model="formData.type" />
                      <label class="form-check-label" for="typeSavory">Savory</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="recipeType" id="typeSweet" value="sweet" v-model="formData.type" />
                      <label class="form-check-label" for="typeSweet">Sweet</label>
                    </div>
                  </div>
                  <button type="button" @click="handleSubmit" class="btn btn-primary">
                    <i class="fas fa-upload mr-1"></i>Submit Recipe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  githubRepo: {
    type: String,
    required: true
  }
})

const formData = ref({
  title: '',
  image: '',
  instructions: '',
  link: '',
  type: 'savory'
})

const handleSubmit = () => {
  if (!formData.value.title || !formData.value.image || !formData.value.instructions || !formData.value.type) {
    return
  }

  const formattedInstructions = formData.value.instructions.replace(/\n/g, '<br>')

  const recipeData = {
    title: formData.value.title,
    image: formData.value.image,
    instructions: formattedInstructions,
    link: formData.value.link,
  }

  const jsonData = JSON.stringify(recipeData, null, 2)
  const encodedData = encodeURIComponent(jsonData)
  const filename = formData.value.title.toLowerCase().replace(/\s+/g, '-')
  const githubUrl = `https://github.com/${props.githubRepo}/new/main/lib/recipes/${formData.value.type}?filename=${filename}.json&value=${encodedData}`

  window.open(githubUrl, '_blank')
}
</script>