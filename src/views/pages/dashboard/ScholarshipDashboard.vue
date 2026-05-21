<template>
    <div class="container mt-3">
        <div class="d-flex justify-content-between align-items-center">
            <span class="title">ផ្ទាំងគ្រប់គ្រងថ្នាក់រៀន</span>
            <BaseButton :loading="loading"  class="btn-add" @click="showAddModal = true">
                បង្កើតថ្នាក់រៀនថ្មី
                <IconHexagonPlus  stroke={2} />
            </BaseButton>
        </div>
        <div class="row mt-4">
      <div class="col-3">
        <StatCard
          title="ថ្នាក់រៀនទាំងអស់"
          value="12"
          percentage="15%"
          trend="up"
          :icon="IconBook"
          iconBg="#eff6ff"
          iconColor="#3b82f6"
        />
      </div>
      <div class="col-3">
        <StatCard
          title="ថ្នាក់រៀនសកម្ម"
          value="10"
          percentage="10%"
          trend="up"
          :icon="IconUsers"
          iconBg="#f0fdf4"
          iconColor="#10b981"
        />
      </div>
      <div class="col-3">
        <StatCard
          title="ថ្នាក់រៀនអសកម្ម"
          value="2"
          percentage="5%"
          trend="down"
          :icon="IconBookOff"
          iconBg="#fff1f2"
          iconColor="#ef4444"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { IconHexagonPlus } from '@tabler/icons-vue';
import StatCard from '@/components/ui/StatCard.vue';

const loading = ref(false);
const showAddModal = ref(false);
</script>

<style scoped>
.btn-add {
    font-size: 16px;
    padding: 12px 16px;
    background-color: var(--color-blue);
    font-weight: 500 !important;
}

.btn-add:hover {
    background-color: oklch(70.7% 0.165 254.624) !important;
    border: none !important;
}
.title {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary-color);
}
</style>