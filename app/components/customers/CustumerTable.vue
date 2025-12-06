<script setup lang="ts">
import { useCustomers } from "../../composable/useCustomers";

const { customers, deleteCustomer } = useCustomers();

const handleDelete = (id: number) => {
  deleteCustomer(id);
};
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full bg-white shadow-md rounded-lg">
      <thead class="bg-green-700 text-white">
        <tr>
          <th class="py-2 px-6 text-left">Nome</th>
          <th class="py-2 px-6 text-left">Email</th>
          <th class="py-2 px-6 text-left">Telefone</th>
          <th class="py-2 px-6 text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="customer in customers"
          :key="customer.id"
          class="border-b hover:bg-green-50"
        >
          <td class="py-2 px-4 text-gray-800">{{ customer.name }}</td>
          <td class="py-2 px-4 text-gray-800">{{ customer.email }}</td>
          <td class="py-2 px-4 text-gray-800">{{ customer.phone || "-" }}</td>
          <td class="py-2 px-4 text-center text-gray-100">
            <button
              @click="handleDelete(customer.id)"
              class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
            >
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
