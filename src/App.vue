<script setup>
import SideBar from './components/SideBar.vue';
import TopBar from './components/TopBar.vue';
import { ref } from 'vue';

const activePage = ref('pesan')

console.log(activePage.value) // "Hello World!"


</script>

<template>
  <div class="flex h-screen" style="background-image: url('background\ 1.png');">
    <SideBar :active-page="activePage" @ubah-active-page="(data) => activePage = data"/>
    <div class="w-full flex flex-col">
      <TopBar :active-page="activePage"/>
      <RouterView />
    </div>
  </div>
</template>
