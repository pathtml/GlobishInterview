<template>
  <v-container style="max-width: 720px; padding: 16px;">
    <PersonalityTest :questions="questions" />
  </v-container>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import PersonalityTest from '../components/PersonalityTest.vue'
import questions from '../types/question'
export default defineComponent({
  components: {
    PersonalityTest
  },
  data() {
    return {

    }
  },
  setup() {

    return {questions}
  }

})
</script>
<style lang="scss"></style>