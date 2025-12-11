<script setup lang="ts">
import { ref } from "vue";
import Header from "~/components/customers/header.vue";
import CustomerCreateModal from "~/components/customers/CustomerCreateModal.vue";
import CustomerTable from "~/components/customers/CustumerTable.vue";

const modalOpen = ref(false);
</script>

<template>
  <div class="min-h-screen p-6">
    <Header v-model:open="modalOpen" />
    <div class="max-w-7xl mx-auto mt-6">
      <h2 class="text-3xl font-bold mb-6 text-gray-400">Clientes</h2>
    </div>
    <CustomerTable />
    <CustomerCreateModal v-model:modelValue="modalOpen" />
  </div>
</template>
