<template>
  <header class="h-20 shadow-header border-b border-gray-100">
    <div
      class="
        h-full
        w-full
        max-w-screen-lg
        mx-auto
        flex
        justify-between
        items-center
        px-4
        sm:px-8
      "
    >
      <div class="w-[100px] h-[55px]">
        <img
          class="w-full h-full object-contain"
          src="https://fakeimg.pl/100x55"
          alt="Logo Une-citation.fr"
        />
      </div>

      <button
        class="
          h-[55px]
          bg-blue-500
          hover:bg-blue-600
          transition-colors
          duration-200
          ease-in-out
          text-white
          font-medium
          px-4
          rounded-xl
          flex
          items-center
        "
      >
        <span class="hidden sm:inline">Modifier</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:ml-2" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
        </svg>
      </button>
    </div>
  </header>
</template>
