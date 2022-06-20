<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import ClientOnly from '@duannx/vue-client-only'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
const isShow = ref(false)
onMounted(() => {
  ['keydown', 'click', 'touchstart', 'scroll'].forEach((type) => {
    addEventListener(type, () => {
      isShow.value = true
    }, { once: true, capture: true });
  })
})


</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1> Demo vue client only component </h1>
  <ClientOnly>
    <HelloWorld />
    <template #placeholder>
      <h3>Hello world component placeholder...</h3>
    </template>
  </ClientOnly>

  <ClientOnly :is-show="isShow">
    <h3>This component loaded after the user input</h3>
    <template #placeholder>
      <h3>Component placeholder. Click anywhere to show...</h3>
    </template>
  </ClientOnly>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
