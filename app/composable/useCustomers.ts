import { ref } from "vue";

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

let nextid = 4;
const customers = ref<Customer[]>([
  { id: 1, name: "João Silva", email: "joao@gmail.com", phone: "912345678" },
  {
    id: 2,
    name: "Maria Costa",
    email: "maria@gmail.com",
    phone: "923456789",
  },
  { id: 3, name: "Ana Santos", email: "ana@example.com", phone: "934567890" },
]);

export function useCustomers() {
  const createCustomer = (customer: Omit<Customer, "id">) => {
    const newCustomer: Customer = {
      id: nextid++,
      ...customer,
    };
    customers.value.push(newCustomer);
  };

  const deleteCustomer = (id: number) => {
    customers.value = customers.value.filter((c) => c.id !== id);
  };

  return { customers, createCustomer, deleteCustomer };
}
