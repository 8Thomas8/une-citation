<template>
  <div
    class="
      w-full
      shadow-xl
      rounded-xl
      px-10
      md:px-16
      my-6
      md:my-10
      border
      bg-white
    "
  >
    <h1 class="text-xl font-bold text-center pb-8">Mentions légales</h1>
    <article class="pb-6">
      <h2 class="text-lg font-semibold pb-2">Hébergeur du site</h2>
      <p class="pb-2">
        Ce site web est hébergé par Netlify, Inc., located at 2325 3rd Street,
        Suite 296, San Francisco, California 94107.
      </p>
      <p class="pb-2">
        Vous pouvez contacter l'hébergeur :
        <a
          class="
            text-blue-500
            hover:text-blue-600
            transition-colors
            duration-200
            ease-in-out
          "
          title="Email"
          href="mailto:support@netlify.com"
          >support@netlify.com</a
        >
      </p>
      <p class="pb-6">
        En cas de fraude, contactez :
        <a
          class="
            text-blue-500
            hover:text-blue-600
            transition-colors
            duration-200
            ease-in-out
          "
          title="Email"
          href="mailto:fraud@netlify.com"
          >fraud@netlify.com</a
        >
      </p>
      <p>
        Si vous constatez qu'il manque des informations sur cette page,
        contactez l'administrateur du site :
        <a
          class="
            text-blue-500
            hover:text-blue-600
            transition-colors
            duration-200
            ease-in-out
          "
          title="Email"
          href="mailto:admin@une-citation.fr"
          >admin@une-citation.fr</a
        >
      </p>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
