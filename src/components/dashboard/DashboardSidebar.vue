<script setup>
import { ref } from 'vue';
import Add from "../icons/Add.vue";
import ArrowLeft from "../icons/Arrow-left.vue";
import Book from "../icons/Book.vue";
import Branding from '../icons/BrandingAlumiNet.vue';
import Dashboard from "../icons/Dashboard.vue";
import file from "../icons/file.vue";
import Graduation from "../icons/Graduation.vue";
import Home from "../icons/Home.vue";
import Layer from "../icons/Layer.vue";
import User from "../icons/User.vue";
import BaseModel from "../ui/BaseModal.vue";
import { BadgeX, } from 'lucide-vue-next';
import { X } from 'lucide-vue-next'

const isShow = ref(false);
const loading = ref(false);

const dashboard = [
  {
    name: "ផ្ទាំងគ្រប់គ្រង",
    icon: Dashboard,
    path: "Dashboard",
    color: "#ffffff",
  },
];

const management = [
  {
    name: "ផ្ទាំងគ្រប់គ្រងសិស្ស",
    icon: User,
    path: "Students",
    color: "#ffffff",
  },
  {
    name: "ផ្ទាំងគ្រប់គ្រងថ្នាក់",
    icon: Home,
    path: "Classes",
    color: "#ffffff",
  },
  {
    name: "អាហារូបករណ៍",
    icon: Graduation,
    path: "Scholarships",
    color: "#ffffff",
  },
  {
    name: "ផ្ទាំងគ្រប់គ្រងជំនាន់",
    icon: Layer,
    path: "Generations",
    color: "#ffffff",
  },
  {
    name: "ផ្ទាំងគ្រប់គ្រងមុខវិជ្ជា",
    icon: Book,
    path: "Subjects",
    color: "#ffffff",
  },
];

const reports = [
  {
    name: "បញ្ចូលពិន្ទុសិស្ស",
    icon: Add,
    path: "Scores",
    color: "#ffffff",
  },
  {
    name: "ប្រណិប័ត្រពិន្ទុ",
    icon: file,
    path: "Reports",
    color: "#ffffff",
  },
];
</script>

<template>
  <aside class="sidebar">
    <div class="brand-container">
      <Branding :size="30" />
    </div>

    <router-link v-for="(item, index) in dashboard" :key="'mgmt-' + index" :to="{ name: item.path }"
      class="menu-item mt-3">
      <div class="icon-wrapper">
        <component :is="item.icon" :size="item.size || 20" />
      </div>
      <span>{{ item.name }}</span>
    </router-link>

    <label class="section-title">ផ្ទាំងគ្រប់គ្រងទូទៅ</label>

    <router-link v-for="(item, index) in management" :key="'mgmt-' + index" :to="{ name: item.path }" class="menu-item">
      <div class="icon-wrapper">
        <component :is="item.icon" :size="item.size || 20" />
      </div>
      <span>{{ item.name }}</span>
    </router-link>

    <label class="section-title">ផ្ទាំងគ្រប់គ្រងពិន្ទុ</label>

    <router-link v-for="(item, index) in reports" :key="'report-' + index" :to="{ name: item.path }" class="menu-item">
      <div class="icon-wrapper">
        <component :is="item.icon" :size="20" />
      </div>
      <span>{{ item.name }}</span>
    </router-link>

    <!-- Logout -->
    <div class="logout">
      <div class="icon logout-icon"><arrow-left /></div>
      <span @click="isShow = true">ចាកចេញ</span>
    </div>
  </aside>

  <BaseModel :show="isShow" @close="isShow = false">
    <template #modal>
      <div class="modal-content custom-logout-modal">
        <div class="close-btn-top" @click="isShow = false" aria-label="Close">
          <X :size="18" :stroke-width="2.5" />
        </div>
        <div class="icon-box">
          <BadgeX :size="40" color="white" stroke-width="2.5" />
        </div>
        <div class="content-text text-center">
          <h2 class="modal-title-custom">តើអ្នកចង់ចាកចេញមែនទេ?</h2>
          <p class="description">
            សូមបញ្ជាក់ម្ដងទៀត ប្រសិនបើអ្នកចង់ចាកចេញពីប្រព័ន្ធ
            <span>AlumiNet</span>
          </p>
        </div>
        <div class="modal-footer-custom">
          <BaseButton class="btn cancel-btn" @click="isShow = false">
            បោះបង់
          </BaseButton>
          <BaseButton class="btn confirm-btn" :loading="loading" @click="onClickLogout">
            {{ loading ? "Loading..." : "ចាកចេញ" }}
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseModel>
</template>

<style scoped>
.custom-logout-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 10px;
  background: #ffffff;
  font-family: var(--font-khmer);
}

/* រៀបចំប្រអប់ Icon ក្រហម */
.custom-logout-modal .icon-box {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 24px;
  background: linear-gradient(135deg, #fb7185, #e11d48);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 14px 30px rgba(225, 29, 72, 0.25);
}

.custom-logout-modal .modal-title-custom {
  font-size: 28px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.5;
  margin-bottom: 12px;
}

.custom-logout-modal .description {
  font-size: 15px;
  line-height: 1.8;
  color: #64748b;
  margin-bottom: 32px;
}

.custom-logout-modal .description span {
  color: #e11d48;
  font-weight: 700;
}

.custom-logout-modal .modal-footer-custom {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;
}

.custom-logout-modal .close-btn-top {
  position: absolute;
  top: -12px;
  right: -12px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #ffffff;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

.custom-logout-modal .close-btn-top:hover {
  background: #f1f5f9;
  color: #e11d48;
  transform: scale(1.08) rotate(90deg);
  box-shadow: 0 6px 16px rgba(225, 29, 72, 0.15);
}

.custom-logout-modal .close-btn-top:active {
  transform: scale(0.95) rotate(90deg);
}

.custom-logout-modal :deep(.confirm-btn) {
  border: none !important;
  background: linear-gradient(135deg, #f43f5e, #e11d48) !important;
  color: white !important;
  box-shadow: 0 10px 24px rgba(225, 29, 72, 0.25);
}

.custom-logout-modal :deep(.confirm-btn:hover) {
  transform: translateY(-2px);
}

@media (max-width: 576px) {
  .custom-logout-modal .modal-title-custom {
    font-size: 24px;
  }

  .custom-logout-modal .modal-footer-custom {
    flex-direction: column;
  }
}

.sidebar {
  width: 270px;
  height: 100vh;
  background: var(--color-bg-sidebar-navbar);
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  font-family: var(--font-khmer);
  box-shadow: var(--shadow-md);
}

.brand-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid color-mix(in srgb, var(--primary-color), transparent 50%);
  padding-bottom: 16px;
}

.section-title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--primary-color);
  margin: 10px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 16px;
  border-radius: 15px;
  cursor: pointer;
  color: color-mix(in srgb, var(--primary-color) 70%, transparent);
  transition: var(--transition-slow);
  margin-bottom: 5px;
  text-decoration: none;
}

.menu-item .icon-wrapper {
  width: 30px;
  height: 30px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
}

.menu-item span {
  font-weight: var(--font-weight-medium);
  font-size: var(--text-lg);
}

.menu-item:hover {
  background: rgba(8, 59, 115, 0.08);
  color: #083b73;
}

.menu-item.active {
  background: var(--primary-color);
  color: var(--color-gray-light);
  box-shadow: 0 8px 18px rgba(8, 59, 115, 0.18);
}

.menu-item.active .icon-wrapper {
  background: var(--color-blue);
}

.menu-item .icon-wrapper.active {
  background: var(--color-blue);
}


.icon {
  width: 30px;
  height: 30px;
  border-radius: 12px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-item.active .icon {
  background: var(--color-blue);
}

.logout {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  color: #ff4b4b;
  font-weight: 700;
  text-decoration: none;
}

.logout-icon {
  background: #ffe6e6;
  color: #ff4b4b;
}


.modal-content {
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid #f1f5f9;
  padding: 24px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-b: 1px solid #f1f5f9;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #94a3b8;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 4px 8px;
  border-radius: 8px;
}

.btn-close:hover {
  color: #64748b;
  background-color: #f8fafc;
}

.btn-close::before {
  content: "✕";
}


.description {
  font-size: 17px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 24px 0;
  text-align: center;
  padding: 10px 0;
}

.description span {
  font-weight: 700;
  color: #3b82f6;
  background-color: #eff6ff;
  padding: 2px 8px;
  border-radius: 6px;
  margin: 0 4px;
  display: inline-block;
}

.modal-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.btn {
  padding: 10px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
}

.cancel-btn {
  background-color: #f1f5f9;
  color: #475569;
}

.cancel-btn:hover {
  background-color: #e2e8f0;
  color: #1e293b;
}

.confirm-btn {
  background-color: #ef4444;
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.2);
}

.confirm-btn:hover {
  background-color: #dc2626;
  box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.3);
  transform: translateY(-1px);
}

.confirm-btn:active {
  transform: translateY(0);
}

.confirm-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
</style>
