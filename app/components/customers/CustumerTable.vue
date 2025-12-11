<script setup lang="ts">
import { h, resolveComponent } from "vue";
import type { TableColumn, TableRow } from "@nuxt/ui";
import { useCustomers } from "~/composable/useCustomers";

const UButton = resolveComponent("UButton");
const { customers, deleteCustomer } = useCustomers();

const columns: TableColumn<any>[] = [
  {
    accessorKey: "name",
    header: () =>
      h(
        "div",
        {
          class:
            "text-center font-medium text-black px-2 py-2 border-r-2 border-gray-400",
        },
        "Nome"
      ),
    cell: ({ row }: { row: TableRow<any> }) => {
      const name = String(row.getValue("name"));
      const colorClass = name.startsWith("M")
        ? "bg-blue-100 text-blue-800"
        : "bg-gray-100 text-gray-800";
      return h(
        "div",
        {
          class: `px-2 py-1 text-sm rounded ${colorClass}  border-gray-200 border-r-2 border-gray-400`,
        },
        name
      );
    },
  },
  {
    accessorKey: "email",
    header: () =>
      h(
        "div",
        {
          class:
            "text-center font-medium text-black px-2 py-2 border-r-2 border-gray-400",
        },
        "Email"
      ),
    cell: ({ row }: { row: TableRow<any> }) => {
      const email = String(row.getValue("email"));
      const colorClass = email.includes("@gmail.com")
        ? "bg-green-100 text-green-800"
        : "bg-gray-100 text-gray-800";
      return h(
        "div",
        {
          class: `px-2 py-1 text-sm rounded ${colorClass}    border-gray-200 border-r-2 border-gray-400`,
        },
        email
      );
    },
  },
  {
    accessorKey: "phone",
    header: () =>
      h(
        "div",
        {
          class:
            "text-center font-medium text-black px-2 py-2 border-r-2 border-gray-400",
        },
        "Telefone"
      ),
    cell: ({ row }: { row: TableRow<any> }) => {
      const phone = String(row.getValue("phone"));
      const colorClass = phone.startsWith("9")
        ? "bg-yellow-100 text-yellow-800"
        : "bg-gray-100 text-gray-800";
      return h(
        "div",
        {
          class: `px-2 py-1 text-sm rounded ${colorClass} border-b border-gray-200 border-r-2 border-gray-400`,
        },
        phone
      );
    },
  },
  {
    id: "actions",
    header: () =>
      h(
        "div",
        {
          class: "text-right pr-10 font-medium text-black px-2 py-2",
        },
        "Ações"
      ),
    cell: ({ row }: { row: TableRow<any> }) =>
      h(
        "div",
        {
          class: "text-right pr-6  border-gray-200 flex justify-end gap-2",
        },
        [
          h(
            UButton,
            {
              color: "error",
              size: "sm",
              class: "text-white text-sm",
              onClick: () => deleteCustomer(row.original.id),
            },
            () => "Deletar"
          ),
        ]
      ),
  },
];
</script>

<template>
  <UTable
    :data="customers"
    :columns="columns"
    class="w-full mt-4 border border-gray-300 [&_th]:px-6 [&_td]:px-6"
  />
</template>
