<script setup>
import { ref } from "vue";
// icon
import Branding from "../icons/BrandingAlumiNet.vue";
import Dashboard from "../icons/Dashboard.vue";
import Add from "../icons/Add.vue";
import ArrowLeft from "../icons/Arrow-left.vue";
import Book from "../icons/Book.vue";
import file from "../icons/file.vue";
import Graduation from "../icons/Graduation.vue";
import Home from "../icons/Home.vue";
import User from "../icons/User.vue";
import Layer from "../icons/Layer.vue";
import BaseModel from "../ui/BaseModal.vue";

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
    <!-- Logo -->
    <div class="brand-container">
      <!-- <h1 class="logo-text">AlumiNet</h1> -->
      <Branding :size="30" />
    </div>

    <!-- Dashboard -->
    <!-- <label class="section-title">Dashboard</label> -->
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
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirm Logout</h5>
          <button class="btn-close" @click="isShow = false"></button>
        </div>
        <p class="description">
          សូមបញ្ជាក់ម្ដងទៀត ប្រសិនបើអ្នកចង់ចាកចេញពីប្រព័ន្ធ
          <span>AlumiNet</span>
        </p>

        <div class="modal-footer">
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
.sidebar {
  width: 270px;
  height: 100vh;
  /* background: var(--color-bg-sidebar-navbar); */
  background: var(--color-bg-light);
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  font-family: "Kantumruy Pro", sans-serif;
  box-shadow: var(--shadow-md);
}

/* Logo */
.brand-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid color-mix(in srgb, var(--primary-color), transparent 50%);
  padding-bottom: 16px;
}

/* Section */
.section-title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--primary-color);
  margin: 10px 0;
}

/* Menu */

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-radius: 14px;
  color: color-mix(in srgb, var(--primary-color) 70%, transparent);
  transition: var(--transition-slow);
  text-decoration: none;
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
}

.menu-item .icon-wrapper {
  width: 30px;
  height: 30px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-bg-light);
  background: var(--primary-color);
}

.menu-item span {
  font-weight: var(--font-weight-medium);
  font-size: var(--text-lg);
}

.menu-item:hover {
  background: rgba(8, 59, 115, 0.06);
  color: var(--primary-color);
  transform: translateX(3px);
}

/* Active State */
.menu-item.active {
  background: linear-gradient(
    135deg,
    var(--primary-color),
    #0d4d96
  );
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(8, 59, 115, 0.22);
}

/* Small active indicator */
.menu-item.active::before {
  content: "";
  position: absolute;
  left: -10px;
  width: 4px;
  height: 26px;
  border-radius: 10px;
  background: var(--primary-color);
}

.menu-item.active .icon-wrapper {
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(6px);
}

/* Icon */
.icon {
  width: 30px;
  height: 30px;
  border-radius: 12px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Logout */
.logout {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 0 0 16px;
  color: #ff4b4b;
  font-weight: 700;
  text-decoration: none;
  border-top: 2px solid color-mix(in srgb, var(--primary-color), transparent 50%);
  cursor: pointer;
}

.logout-icon {
  background: #ffe6e6;
  color: #ff4b4b;
}

/* Container របស់ Modal */
.modal-content {
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid #f1f5f9;
  padding: 24px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-family:
    "Kantumruy Pro", "Inter", sans-serif;
  /* ប្រើ Font ខ្មែរបែបសម័យថ្មី */
}

/* Header Section */
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
  /* ពណ៌ប្រផេះចាស់បែប Premium */
  margin: 0;
}

/* ប៊ូតុងខ្វែង (x) សម្រាប់បិទ */
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
  /* ករណីមិនទាន់មាន icon ស្រាប់ */
}

/* ផ្នែកអត្ថបទពិពណ៌នា (Body) */
.description {
  font-size: 17px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 24px 0;
  text-align: center;
  padding: 10px 0;
}

/* លេងពណ៌លើឈ្មោះប្រព័ន្ធ AlumiNet ឱ្យលេចធ្លោ */
.description span {
  font-weight: 700;
  color: #3b82f6;
  /* ពណ៌ខៀវបែបបច្ចេកវិទ្យា */
  background-color: #eff6ff;
  padding: 2px 8px;
  border-radius: 6px;
  margin: 0 4px;
  display: inline-block;
}

/* Footer Section */
.modal-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

/* ស្ទីលរួមរបស់ប៊ូតុង */
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

/* ប៊ូតុងបោះបង់ (Cancel) */
.cancel-btn {
  background-color: #f1f5f9;
  color: #475569;
}

.cancel-btn:hover {
  background-color: #e2e8f0;
  color: #1e293b;
}

/* (Confirm Logout) */
.confirm-btn {
  background-color: #ef4444;
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.2);
}

.confirm-btn:hover {
  background-color: #dc2626;
  box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.3);
  transform: translateY(-1px);
  /* រំកិលឡើងលើបន្តិចពេល Hover */
}

.confirm-btn:active {
  transform: translateY(0);
}

/* ស្ទីលពេលប៊ូតុងកំពុង Loading */
.confirm-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
</style>
