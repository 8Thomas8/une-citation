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
            <div class="mt-3 text-center sm:mt-5">
              <h3
                id="modal-title"
                class="text-3xl leading-6 font-bold text-blue-600 pb-3 mb-2"
              >
                Une citation
              </h3>
              <div class="h-[250px] sm:h-[192px] relative">
                <div v-if="!showError && !showSuccess && !showLoader">
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
                    <div class="relative sm:ml-auto">
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
                <div
                  v-if="showSuccess && !showError && !showLoader"
                  class="relative transform top-1/2 -translate-y-1/2"
                >
                  <div class="rounded-md bg-green-50 p-4">
                    <div class="flex flex-col">
                      <div class="w-full pb-3">
                        <svg
                          class="mx-auto h-10 w-10 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-green-800">
                          Modification de la citation effectuée
                        </h3>
                        <div class="mt-2 text-sm text-green-700">
                          <p>
                            Félicitation, la citation a bien été remplacée par
                            la votre.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="showError && !showLoader"
                  class="relative transform top-1/2 -translate-y-1/2"
                >
                  <div class="rounded-md bg-red-50 p-4">
                    <div class="flex flex-col">
                      <div class="w-full pb-3">
                        <svg
                          class="mx-auto h-10 w-10 text-red-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-red-800">
                          Une erreur s'est produite
                        </h3>
                        <div class="mt-2 text-sm text-red-700">
                          <p>
                            La citation n'a pas été modifiée, contactez
                            l'administrateur du site.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="showLoader"
                  class="relative transform top-1/2 -translate-y-1/2"
                >
                  <div
                    class="
                      w-full
                      h-full
                      flex flex-wrap
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      class="animate-spin h-8 w-8 text-blue-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"
                        />
                      </g>
                    </svg>
                    <p class="w-full">Modification en cours ...</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 sm:mt-9 h-[96px] sm:h-[38px]">
              <div
                v-if="!showLoader && !showSuccess"
                class="
                  sm:grid sm:grid-cols-2
                  sm:gap-3
                  sm:grid-flow-row-dense
                  h-full
                "
              >
                <button
                  v-if="!showLoader && showSuccess"
                  type="submit"
                  class="
                    transition-colors
                    duration-200
                    ease-in-out
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
                  @click.prevent="destroyModal(true)"
                >
                  Fermer
                </button>
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
                    text-base
                    font-medium
                    text-white
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-blue-600
                    sm:col-start-2
                    sm:text-sm
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                  :class="
                    showError
                      ? 'cursor-not-allowed bg-gray-200'
                      : 'bg-blue-600 hover:bg-blue-700 '
                  "
                  :disabled="showError"
                  @click.prevent="sendForm"
                >
                  Valider
                </button>
                <button
                  type="button"
                  class="
                    transition-colors
                    duration-200
                    ease-in-out
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
              <div
                v-if="!showLoader && showSuccess"
                class="sm:grid sm:grid-cols-1 sm:grid-flow-row-dense h-full"
              >
                <button
                  type="submit"
                  class="
                    transition-colors
                    duration-200
                    ease-in-out
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
                  Fermer
                </button>
              </div>
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
        name: '',
        age: null,
        content: '',
      },
      errorName: '',
      errorAge: '',
      errorContent: '',
      minLimitChar: 50,
      maxLimitChar: 300,
      showSuccess: false,
      showError: false,
      showLoader: false,
    }
  },
  methods: {
    destroyModal(isSuccess = false) {
      this.$emit('close-modal-event')
      this.errorAge = ''
      this.errorName = ''
      this.errorContent = ''
      this.quote = {
        name: '',
        age: null,
        content: '',
      }
      this.showSuccess = false
      this.showError = false
      this.showLoader = false

      if (isSuccess) {
        this.applySuccesEvent(false)
      }
    },
    validateForm() {
      let status = false
      this.errorAge = ''
      this.errorName = ''
      this.errorContent = ''

      if (this.quote.age && (this.quote.age <= 0 || this.quote.age > 100)) {
        this.errorAge = 'Choisissez un age entre 1 et 100 ans.'
      }

      if (!this.quote.content || this.quote.content.length === 0) {
        this.errorContent = 'Contenu de la citation obligatoire.'
      }

      if (this.quote.content && this.quote.content.length > this.maxLimitChar) {
        this.errorContent =
          'Votre citation ne doit pas dépasser ' +
          this.maxLimitChar +
          ' charactères.'
      }

      if (this.quote.content && this.quote.content.length < this.minLimitChar) {
        this.errorContent =
          'Votre citation doit faire plus de ' +
          this.minLimitChar +
          ' charactères.'
      }

      if (
        this.errorName.length === 0 &&
        this.errorAge.length === 0 &&
        this.errorContent.length === 0
      ) {
        status = true
      }

      return status
    },
    sendForm() {
      if (this.validateForm()) {
        this.$fire.auth
          .signInAnonymously()
          .then(
            () => {
              this.showLoader = true
              this.$fire.database
                .ref('quotes/')
                .push({
                  name: this.quote.name,
                  age: this.quote.age,
                  content: this.quote.content,
                  timestamp: new Date().getTime(),
                })
                .then(() => {
                  this.applySuccesEvent()
                })
            },
            () => {
              this.showError = true
              this.showLoader = false
            }
          )
          .catch(() => {
            this.showError = true
            this.showLoader = false
          })
      }
    },
    applySuccesEvent(timer = true) {
      this.$fire.auth.signOut()
      this.showSuccess = true
      this.showLoader = false

      if (timer) {
        setTimeout(() => {
          this.destroyModal()
          if (this.$nuxt.$route.path !== '/') {
            this.$router.push('/')
          }
        }, 5000)
      } else if (this.$nuxt.$route.path !== '/') {
        this.$router.push('/')
      }
    },
  },
})
</script>
