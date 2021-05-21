<template>
  <div>
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block
          sm:p-0
        "
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >&#8203;</span
        >
        <div
          class="
            inline-block
            align-bottom
            bg-white
            rounded-lg
            px-4
            pt-5
            pb-4
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:my-8
            sm:align-middle
            sm:max-w-lg
            sm:w-full
            sm:p-6
          "
        >
          <form>
            <div>
              <div class="mt-3 text-center sm:mt-5">
                <h3
                  id="modal-title"
                  class="text-3xl leading-6 font-bold text-gray-900 pb-3"
                >
                  Une citation
                </h3>
                <div class="mt-2">
                  <div
                    class="
                      flex flex-col
                      sm:flex-row
                      pb-4
                      space-y-4
                      sm:space-y-0
                    "
                  >
                    <div class="relative">
                      <input
                        v-model="quote.name"
                        type="text"
                        placeholder="Prénom"
                        class="form-input rounded-md"
                        @keypress="errorName = null"
                      />
                      <p
                        class="
                          absolute
                          text-red-500 text-sm text-left
                          mt-[-3px]
                        "
                      >
                        {{ errorName }}
                      </p>
                    </div>
                    <div class="relative ml-auto">
                      <input
                        v-model="quote.age"
                        type="number"
                        placeholder="Age"
                        class="form-input rounded-md"
                        @keypress="errorAge = null"
                      />
                      <p
                        class="
                          absolute
                          text-red-500 text-sm text-left
                          mt-[-3px]
                        "
                      >
                        {{ errorAge }}
                      </p>
                    </div>
                  </div>

                  <div class="relative">
                    <textarea
                      v-model="quote.content"
                      class="form-textarea w-full rounded-md h-32"
                      placeholder="Texte (requis)"
                      @keypress="errorContent = null"
                    ></textarea>
                    <p
                      class="absolute text-red-500 text-sm text-left mt-[-9px]"
                    >
                      {{ errorContent }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                mt-8
                sm:mt-9
                sm:grid sm:grid-cols-2
                sm:gap-3
                sm:grid-flow-row-dense
              "
            >
              <button
                type="submit"
                class="
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-transparent
                  shadow-sm
                  px-4
                  py-2
                  bg-blue-600
                  text-base
                  font-medium
                  text-white
                  hover:bg-blue-700
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-blue-600
                  sm:col-start-2
                  sm:text-sm transition-colors duration-200 ease-in-out
                "
                @click.prevent="sendForm"
              >
                Valider
              </button>
              <button
                type="button"
                class=" transition-colors duration-200 ease-in-out
                  mt-3
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-gray-300
                  shadow-sm
                  px-4
                  py-2
                  bg-white
                  text-base
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-blue-600
                  sm:mt-0
                  sm:col-start-1
                  sm:text-sm
                "
                @click.prevent="destroyModal"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
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
        name: null,
        age: null,
        content: null,
      },
      errorName: null,
      errorAge: null,
      errorContent: null,
      contentLimitChar: 250,
    }
  },
  methods: {
    destroyModal() {
      this.$emit('close-modal-event')
      this.errorAge = null
      this.errorName = null
      this.errorContent = null
      this.quote = {
        name: null,
        age: null,
        content: null,
      }
    },
    validateForm() {
      if (this.quote.age && (this.quote.age <= 0 || this.quote.age > 100)) {
        this.errorAge = 'Choisissez un age entre 1 et 100 ans.'
      }

      if (!this.quote.content) {
        this.errorContent = 'Contenu de la citation obligatoire.'
      }

      if (
        this.quote.content &&
        this.quote.content.lenght > this.contentLimitChar
      ) {
        this.errorContent =
          'Votre citation ne doit pas dépasser ' +
          this.contentLimitChar +
          ' charactères.'
      }

      if (this.errorName || this.errorAge || this.errorContent) {
        return true
      }

      return true
    },
    sendForm() {
      if (this.validateForm()) {
        // TODO: Send Form
      }
    },
  },
})
</script>
