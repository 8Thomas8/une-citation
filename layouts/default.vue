<template>
  <div>
    <div class="flex flex-col min-h-screen font-inter bg-gray-100">
      <Header @open-modal-event="openModal" />
      <Nuxt class="flex-grow mx-auto max-w-4xl px-4 sm:px-8 py-6" />
      <Footer />
    </div>
    <Modal
      v-if="showModal"
      :show-modal="showModal"
      @close-modal-event="closeModal"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default Vue.extend({
  components: { Header, Footer },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
})
</script>
