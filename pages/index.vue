<template>
  <div class="flex items-center">
    <div
      class="
        shadow-xl
        rounded-xl
        px-10
        md:px-16
        py-6
        md:py-10
        border
        bg-white
        relative
      "
    >
      <svg
        class="
          absolute
          w-12
          h-12
          md:w-20
          md:h-20
          text-blue-700
          opacity-20
          top-2
          left-2
        "
        viewBox="0 0 90 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 51.791C0 22.982 26.598 5.42901 30.729 3.24101C33.721 1.61101 36.491 0.516006 38.389 0.516006C40.042 0.516006 41.136 1.32001 41.136 2.70501C41.136 4.08901 39.751 5.72001 38.389 6.81401C34.57 9.56101 23.85 23.831 23.85 37.275C23.85 40.826 25.771 44.109 27.959 45.225C30.438 46.587 41.961 49.066 41.961 63.582C41.961 72.091 35.105 79.482 25.502 79.482C12.886 79.483 0 69.903 0 51.791Z"
          fill="currentColor"
        />
        <path
          d="M48.014 51.791C48.014 22.982 74.635 5.42901 78.744 3.24101C81.76 1.61101 84.506 0.516006 86.426 0.516006C88.078 0.516006 89.151 1.32001 89.151 2.70501C89.151 4.08901 87.79 5.72001 86.426 6.81401C82.586 9.56101 71.889 23.831 71.889 37.275C71.889 40.826 73.809 44.109 75.998 45.225C78.477 46.588 90 49.066 90 63.583C90 72.092 83.121 79.483 73.518 79.483C60.922 79.483 48.014 69.903 48.014 51.791Z"
          fill="currentColor"
        />
      </svg>
      <svg
        class="
          absolute
          w-12
          h-12
          md:w-20
          md:h-20
          text-blue-700
          opacity-20
          bottom-2
          right-2
          transform
          rotate-180
        "
        viewBox="0 0 90 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 51.791C0 22.982 26.598 5.42901 30.729 3.24101C33.721 1.61101 36.491 0.516006 38.389 0.516006C40.042 0.516006 41.136 1.32001 41.136 2.70501C41.136 4.08901 39.751 5.72001 38.389 6.81401C34.57 9.56101 23.85 23.831 23.85 37.275C23.85 40.826 25.771 44.109 27.959 45.225C30.438 46.587 41.961 49.066 41.961 63.582C41.961 72.091 35.105 79.482 25.502 79.482C12.886 79.483 0 69.903 0 51.791Z"
          fill="currentColor"
        />
        <path
          d="M48.014 51.791C48.014 22.982 74.635 5.42901 78.744 3.24101C81.76 1.61101 84.506 0.516006 86.426 0.516006C88.078 0.516006 89.151 1.32001 89.151 2.70501C89.151 4.08901 87.79 5.72001 86.426 6.81401C82.586 9.56101 71.889 23.831 71.889 37.275C71.889 40.826 73.809 44.109 75.998 45.225C78.477 46.588 90 49.066 90 63.583C90 72.092 83.121 79.483 73.518 79.483C60.922 79.483 48.014 69.903 48.014 51.791Z"
          fill="currentColor"
        />
      </svg>

      <p class="absolute right-[15px] top-[10px] text-xs opacity-40">
        {{ quote.date }}
      </p>

      <div>
        <p v-if="quote && quote.content" class="text-justify md:text-lg">
          {{ quote.content }}
        </p>
        <p v-else class="text-justify md:text-lg">
          Il n'y a pas encore de citation, profites-en pour ajouter la tienne ou
          celle d'un pote !
        </p>
      </div>

      <div v-if="quote && quote.content && quote.name" class="pt-3 text-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-blue-500 inline h-5 w-5 mt-[-2px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
        <p class="inline text-sm md:text-base italic">
          <span class="font-semibold capitalize">{{ quote.name }}</span>
          <span v-if="quote.age">
            ({{ quote.age }} an<span v-if="quote.age > 1">s</span>)
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      quote: {
        name: '',
        age: null,
        content: '',
        date: '',
      },
    }
  },
  mounted() {
    // this.showLoader = true
    let lastQuote: {
      name: string
      age: number
      content: string
      timestamp: string
    }
    this.$fire.database
      .ref('quotes/')
      .orderByChild('timestamp')
      .limitToLast(1)
      .on('value', (snapshot: { val: () => any }) => {
        const object = snapshot.val()
        lastQuote = object[Object.keys(object)[0]]
        this.quote.name = lastQuote.name
        this.quote.age = lastQuote.age
        this.quote.content = lastQuote.content
        const date = new Date(lastQuote.timestamp)
        this.quote.date =
          (date.getHours().toString().length > 1
            ? date.getHours()
            : '0' + date.getHours()) +
          ':' +
          (date.getMinutes().toString().length > 1
            ? date.getMinutes()
            : '0' + date.getMinutes()) +
          ' ' +
          (date.getDate().toString().length > 1
            ? date.getDate()
            : '0' + date.getDate()) +
          '/' +
          (date.getMonth().toString().length > 1
            ? date.getMonth()
            : '0' + date.getMonth()) +
          '/' +
          date.getFullYear()
      })
  },
})
</script>
