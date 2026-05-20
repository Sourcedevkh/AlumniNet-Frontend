<script setup>
import { ref, onMounted ,computed } from "vue";
import StatCard from "@/components/ui/StatCard.vue";
import DoughnutChart from "@/components/chartjs/DoughnutChart.vue";
import DatePicker from "@/components/ui/DatePicker.vue";
import GraduationPage from "@/components/icons/GraduationPage.vue";
import Box from "@/components/icons/Box.vue";
import Rating from "@/components/icons/Rating.vue";
import Time from "@/components/icons/Time.vue";
import BaseTable from "@/components/ui/BaseTable.vue";

const stats = ref([
  {
    title: "សិស្សសរុប",
    value: "500",
    percentage: "6.5%",
    bg: "#e9effd",
    color: "#3f6ad8",
    icon: GraduationPage,
  },
  {
    title: "ចំនួនថ្នាក់សរុប",
    value: "500",
    percentage: "8.5%",
    bg: "#fff4de",
    color: "#ffa800",
    icon: Box,
  },
  {
    title: "ប្រភេទអាហាររូបករណ៍",
    value: "500",
    percentage: "9.5%",
    bg: "#e1f9f0",
    color: "#1bc5bd",
    icon: Rating,
  },
  {
    title: "ជំនាន់",
    value: "500",
    percentage: "7.5%",
    bg: "#ffe8e2",
    color: "#f64e60",
    icon: Time,
  },
]);

const isLoading = ref(true)

const tableFields = ref([
  { key: 'id', label: 'ID', thClass: 'text-center', tdClass: 'text-center' },
  { key: 'name', label: 'ឈ្មោះពេញ' },
  { key: 'email', label: 'អ៊ីមែល' },
  { key: 'status', label: 'ស្ថានភាព', thClass: 'text-center', tdClass: 'text-center' },
  { key: 'actions', label: 'សកម្មភាព', thClass: 'text-center', tdClass: 'text-center' }
]);

const users = ref([
  { id: 1, name: 'កុក សារ៉ាត់', email: 'sarat@example.com', status: 'Active' },
  { id: 2, name: 'ចាន់ ធារ៉ា', email: 'theara@example.com', status: 'Inactive' },
  { id: 3, name: 'សុខ ជា', email: 'cheasokh@example.com', status: 'Active' },
  { id: 4, name: 'ស្រី ហួង', email: 'houng@example.com', status: 'Active' },
  { id: 5, name: 'លី ម៉េង', email: 'mengly@example.com', status: 'Inactive' },
  { id: 6, name: 'វណ្ណដា', email: 'vannda@example.com', status: 'Active' },
  { id: 7, name: 'ស្រី ហួង', email: 'houng@example.com', status: 'Active' },
  { id: 8, name: 'លី ម៉េង', email: 'mengly@example.com', status: 'Inactive' },
  { id: 9, name: 'វណ្ណដា', email: 'vannda@example.com', status: 'Active' },
  { id: 10, name: 'ស្រី ហួង', email: 'houng@example.com', status: 'Active' },
  { id: 11, name: 'លី ម៉េង', email: 'mengly@example.com', status: 'Inactive' },
  { id: 12, name: 'វណ្ណដា', email: 'vannda@example.com', status: 'Active' },
]);

const currentPage = ref(1);
const perPage = ref(5);

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  return users.value.slice(start, end);
});

const handlePageChange = (page) => {
  console.log("ឡូដទិន្នន័យសម្រាប់ទំព័រទី: ", page);
};

const editUser = (user) => {
  alert(`កែប្រែអ្នកប្រើប្រាស់: ${user.name}`);
};

const deleteUser = (user) => {
  alert(`លុបអ្នកប្រើប្រាស់: ${user.name}`);
};
</script>

<template>
  <main>
    <div class="stat-grid">
      <StatCard
        v-for="(item, index) in stats"
        :key="index"
        :title="item.title"
        :value="item.value"
        :percentage="item.percentage"
        :iconBg="item.bg"
        :iconColor="item.color"
      >
        <template #icon>
          <component :is="item.icon" :style="{ color: item.color }" />
        </template>
      </StatCard>
    </div>
    <div class="graph-grid">
      <DoughnutChart />
      <DatePicker />
    </div>
    <div class="table-wrapper container">
      <h3 class="title mb-4">បញ្ជីឈ្មោះអ្នកប្រើប្រាស់</h3>

      <!-- ការហៅប្រើប្រាស់ BaseTable -->
      <BaseTable
        :items="paginatedUsers"
        :fields="tableFields"
        v-model:currentPage="currentPage"
        :perPage="perPage"
        :totalRows="users.length"
        :loading="isLoading"
        @page-changed="handlePageChange"
      >
        <!-- Custom Content សម្រាប់ Column "status" ដោយប្រើ Slot -->
        <template #cell(status)="{ item }">
          <span
            class="badge"
            :class="item.status === 'Active' ? 'bg-success' : 'bg-danger'"
          >
            {{ item.status }}
          </span>
        </template>

        <!-- Custom Content សម្រាប់ Column "actions" (ប៊ូតុង Edit/Delete) -->
        <template #cell(actions)="{ item }">
          <button
            class="btn btn-sm btn-outline-primary me-2"
            @click="editUser(item)"
          >
            កែប្រែ
          </button>
          <button
            class="btn btn-sm btn-outline-danger"
            @click="deleteUser(item)"
          >
            លុប
          </button>
        </template>
      </BaseTable>
    </div>
  </main>
</template>

<style scoped>
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  background-color: var(--color-bg-card);
}

.graph-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  background-color: var(--color-bg-card);
}

.table-wrapper {
  width: 100%;
  margin-top: 20px;
  border-radius: 16px;
  background-color: white;
  padding: 24px;
  border: var(--border-1);
}

.table-wrapper .title{
  color: var(--color-black);
  font-family: var(--font-khmer);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-md);
}
.shadow-none {
  box-shadow: none;
}
</style>
