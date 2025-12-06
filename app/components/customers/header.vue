<script setup lang="ts">
import { HomeIcon, User } from "lucide-vue-next";
import logo from "~/assets/logo.jpeg";
import CustomerCreateModal from "./CustomerCreateModal.vue";
import { ref } from "vue";

const modalRef = ref<{ openModal: () => void } | null>(null);

const openCustomerModal = () => {
  modalRef.value?.openModal();
};
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

      <button
        @click="openCustomerModal"
        class="flex gap-2 items-center bg-green-400 p-2 shadow-2xl rounded-lg hover:bg-green-500 cursor-pointer"
      >
        <User class="w-5 h-5 text-white" />
        <span class="text-white">Novo Cliente</span>
      </button>
    </div>
  </header>

  <CustomerCreateModal ref="modalRef" />
</template>
