<template>
  <footer>
    <p
      class="
        max-w-screen-lg
        mx-auto
        text-center
        underline
        text-gray-500
        hover:text-gray-600
        transition-colors
        duration-200
        ease-in-out
        cursor-pointer
        pb-6
        px-4
        sm:px-8
        animate-pulse
      "
    >
      Remplace la citation par la tienne ou celle d'un pote !
    </p>
    <div class="py-4 bg-gray-800 border-t-2 border-blue-500">
      <div
        class="
          h-full
          w-full
          max-w-screen-lg
          mx-auto
          flex flex-col
          justify-center
          items-center
          px-4
          sm:px-8
        "
      >
        <div
          class="
            flex flex-col
            items-center
            sm:flex-row
            justify-center
            pb-6
            w-full
          "
        >
          <nuxt-link
            to="cgv"
            class="
              text-sm text-gray-200
              hover:text-gray-300
              transition-colors
              duration-200
              ease-in-out
              underline
            "
            href=""
            title="Lire les conditions générales de vente"
            >CGV/CGU
          </nuxt-link>
          <span class="hidden sm:inline px-2 text-sm text-gray-200">-</span>
          <nuxt-link
            to="mentions"
            class="
              text-sm text-gray-200
              hover:text-gray-300
              transition-colors
              duration-200
              ease-in-out
              underline
            "
            href=""
            title="Lire les conditions générales de vente"
            >Mentions légales
          </nuxt-link>
          <span class="hidden sm:inline px-2 text-sm text-gray-200">-</span>
          <nuxt-link
            to="confidentialite"
            class="
              text-sm text-gray-200
              hover:text-gray-300
              transition-colors
              duration-200
              ease-in-out
              underline
            "
            href=""
            title="Lire les conditions générales de vente"
            >Politique de confidentialité
          </nuxt-link>
        </div>
        <p class="pb-2 text-sm text-white">
          Réalisé avec
          <span class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline absolute w-5 h-5 text-red-500 animate-ping"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-5 h-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          par Thomas R.
        </p>
        <p class="text-xs text-gray-200">© {{ year }}</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
})
</script>
