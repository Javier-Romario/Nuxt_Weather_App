<script setup lang="ts">
const showForm = ref(false);
</script>

<template>
  <div class="h-screen flex flex-col">
    <div class="simpleNav dark:bg-slate-800 relative">
      <nav
        class="shadow-md shadow-gray-200 dark:shadow-teal-200 md:flex space-x-10 py-3 px-3 bg-white dark:bg-slate-800 z-30 relative"
      >
        <nuxt-link to="/">
          <span class="text-base font-medium text-gray-500 hover:text-gray-900">
            Home
          </span>
        </nuxt-link>

        <span
          @click="showForm = !showForm"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Search City
        </span>
      </nav>
      <transition>
        <div
          :class="{ slide: showForm }"
          v-if="showForm"
          class="p-3 absolute z-20"
        >
          <nav-form @search="showForm = false"> hello </nav-form>
        </div>
      </transition>
    </div>
    <slot />
  </div>
</template>

<style lang="css">
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Remove default margin in favour of better control in authored CSS */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin-block-end: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

.v-enter-from {
  top: -100%;
}
.v-enter-to {
  top: 100%;
}
.v-enter-active {
  transition: top 0.4s ease-in-out;
}

.slide {
}
</style>
