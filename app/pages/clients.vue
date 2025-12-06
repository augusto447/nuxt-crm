<script setup lang="ts">
import CustumerTable from "~/components/customers/CustumerTable.vue";
import Header from "~/components/customers/header.vue";
</script>

<template>
  <div class="min-h-screen p-6">
    <Header />

    <div class="max-w-7xl mx-auto mt-6">
      <h2 class="text-3xl font-bold mb-6 text-gray-400">Clientes</h2>
    </div>
    <div><CustumerTable /></div>
  </div>
</template>
