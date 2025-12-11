<script setup lang="ts">
import { ref } from "vue";
import { HomeIcon, User } from "lucide-vue-next";
import logoImport from "~/assets/logo.jpeg";

const props = defineProps<{ open: boolean }>();
const emit = defineEmits(["update:open"]);

const openModal = () => emit("update:open", true);
const logo: string = logoImport;
</script>

<template>
  <header
    class="bg-green-800 flex items-center justify-between px-6 py-5 rounded-lg mt-6"
  >
    <div class="flex items-center gap-4">
      <img class="w-13 h-13 rounded-2xl" :src="logo" alt="logo" />
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold text-white">CRM</h1>
        <span class="text-gray-300">Software de Gerenciamento de Clientes</span>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink to="/" class="flex gap-8 items-center cursor-pointer">
        <HomeIcon
          class="w-5 h-5 text-gray-100 cursor-pointer hover:text-green-500"
        />
      </NuxtLink>

      <div class="w-px h-6 bg-gray-400"></div>

      <UButton
        color="success"
        variant="solid"
        size="xl"
        @click="openModal"
        class="flex items-center gap-2 cursor-pointer"
      >
        <User class="w-5 h-5 text-white" />
        <span class="text-white">Novo Cliente</span>
      </UButton>
    </div>
  </header>
</template>
