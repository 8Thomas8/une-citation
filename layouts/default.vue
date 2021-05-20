<template>
  <div class="flex flex-col min-h-screen font-inter bg-gray-100">
    <Header />
    <Nuxt class="flex-grow mx-auto max-w-4xl px-4 sm:px-8 py-6" />
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: { Footer, Header },
}
</script>
