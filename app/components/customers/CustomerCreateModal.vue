<script setup lang="ts">
import { ref, watch } from "vue";
import { useCustomers } from "~/composable/useCustomers";
import type { Customer } from "../../composable/useCustomers";

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(["update:modelValue"]);

const { createCustomer } = useCustomers();

const newCustomer = ref<Omit<Customer, "id">>({
  name: "",
  email: "",
  phone: "",
});

const closeModal = () => emit("update:modelValue", false);

const handleSubmit = () => {
  if (!newCustomer.value.name || !newCustomer.value.email) return;
  createCustomer({ ...newCustomer.value });
  closeModal();
  newCustomer.value = { name: "", email: "", phone: "" };
};

const open = ref(props.modelValue);
watch(
  () => props.modelValue,
  (val) => (open.value = val)
);
watch(open, (val) => emit("update:modelValue", val));
</script>

<template>
  <UModal
    v-model:open="open"
    title="Novo Cliente"
    :dismissible="true"
    :ui="{ header: 'justify-center', footer: 'justify-end' }"
  >
    <template #body>
      <div class="flex flex-col gap-4 justify-center">
        <label class="font-bold text-gray-800">Nome</label>
        <input
          v-model="newCustomer.name"
          placeholder="Digite o nome"
          class="p-2 w-full rounded-2xl border-2 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-green-500"
        />

        <label class="font-bold text-gray-800">Email</label>
        <input
          v-model="newCustomer.email"
          placeholder="Digite o email"
          class="p-2 w-full rounded-2xl border-2 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-green-500"
        />

        <label class="font-bold text-gray-800">Telefone</label>
        <input
          v-model="newCustomer.phone"
          placeholder="Digite o telefone"
          class="p-2 w-full rounded-2xl border-2 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-green-500"
        />
      </div>
    </template>

    <template #footer>
      <UButton
        label="Cancelar"
        color="secondary"
        variant="outline"
        class="hover:bg-gray-200 cursor-pointer"
        @click="closeModal"
      />
      <UButton
        label="Salvar"
        color="primary"
        variant="solid"
        class="hover:bg-green-700 cursor-pointer"
        @click="handleSubmit"
      />
    </template>
  </UModal>
</template>
