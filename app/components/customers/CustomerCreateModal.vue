<script setup lang="ts">
import { ref } from "vue";
import { useCustomers } from "~/composable/useCustomers";
import type { Customer } from "../../composable/useCustomers";

const { createCustomer } = useCustomers();

const showModal = ref(false);
const newCustomer = ref<Omit<Customer, "id">>({
  name: "",
  email: "",
  phone: "",
});

// Funções para abrir e fechar o modal
const openModal = () => (showModal.value = true);
const closeModal = () => (showModal.value = false);

// Função para criar cliente
const handleSubmit = () => {
  if (!newCustomer.value.name || !newCustomer.value.email) return;
  createCustomer({ ...newCustomer.value });
  closeModal();
  newCustomer.value = { name: "", email: "", phone: "" };
};

// Permite que o Header chame openModal()
defineExpose({ openModal });
</script>

<template>
  <div
    v-if="showModal"
    class="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
  >
    <div class="bg-green-700 p-6 rounded-lg w-96">
      <h2 class="text-xl mb-4 font-bold text-white text-center">
        Novo Cliente
      </h2>
      <input
        v-model="newCustomer.name"
        placeholder="Nome "
        class="border p-2 w-full mb-2 rounded-2xl focus:outline-none"
      />
      <input
        v-model="newCustomer.email"
        placeholder="Email"
        class="border p-2 w-full mb-2 rounded-2xl focus:outline-none"
      />
      <input
        v-model="newCustomer.phone"
        placeholder="Telefone"
        class="border p-2 w-full mb-4 rounded-2xl focus:outline-none"
      />
      <div class="flex justify-end gap-2">
        <button
          @click="closeModal"
          class="px-4 py-2 bg-gray-800 rounded cursor-pointer hover:bg-gray-500"
        >
          Cancelar
        </button>
        <button
          @click="handleSubmit"
          class="px-4 py-2 bg-green-600 text-white rounded cursor-pointer hover:bg-green-700"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>
