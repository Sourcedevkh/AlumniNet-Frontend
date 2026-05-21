<template>
  <aside class="sidebar">
    <div class="brand-section">
      <div class="logo-box">AN</div>
      <span class="brand-name">AlumiNet</span>
    </div>
    <hr class="divider" />

    <div class="nav-section">
      <!-- <span class="section-label">DASHBOARD</span> -->
      <router-link v-for="item in dashboard" :key="item.path" :to="{ name: item.path }" class="menu-item"
        active-class="active">
        <component :is="item.icon" class="menu-icon" :size="20" :stroke-width="1.6" />
        <span class="menu-label">{{ item.name }}</span>
      </router-link>
    </div>

    <div class="nav-section">
      <span class="section-label">ផ្ទាំងគ្រប់គ្រងទូទៅ</span>
      <router-link v-for="item in management" :key="item.path" :to="{ name: item.path }" class="menu-item"
        active-class="active">
        <component :is="item.icon" class="menu-icon" :size="20" :stroke-width="1.6" />
        <span class="menu-label">{{ item.name }}</span>
      </router-link>
    </div>

    <div class="nav-section">
      <span class="section-label">ផ្ទាំងគ្រប់គ្រងពិន្ទុ</span>
      <router-link v-for="item in reports" :key="item.path" :to="{ name: item.path }" class="menu-item"
        active-class="active">
        <component :is="item.icon" class="menu-icon" :size="20" :stroke-width="1.6" />
        <span class="menu-label">{{ item.name }}</span>
      </router-link>
    </div>

    <div class="spacer" />

    <div class="bottom-section">
      <div class="logout-btn" @click="isShow = true">
        <IconLogout :size="20" :stroke-width="1.6" />
        <span>ចាកចេញ</span>
      </div>
    </div>
  </aside>

  <BaseModal :show="isShow" @close="isShow = false">
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
  </BaseModal>
</template>

<script setup>
import {
  IconBook,
  IconFileDescription,
  IconHome,
  IconLayersLinked,
  IconLayoutDashboard,
  IconLogout,
  IconRosette,
  IconSquarePlus,
  IconUsersGroup,
} from "@tabler/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

import { BadgeX} from 'lucide-vue-next';
import { X } from 'lucide-vue-next';
import BaseButton from "../ui/BaseButton.vue";
import BaseModal from "../ui/BaseModal.vue";

const router = useRouter();
const isShow = ref(false);
const loading = ref(false);

const dashboard = [
  { name: "ផ្ទាំងគ្រប់គ្រង", icon: IconLayoutDashboard, path: "Dashboard" },
];

const management = [
  { name: "ផ្ទាំងគ្រប់គ្រងសិស្ស", icon: IconUsersGroup, path: "Students" },
  { name: "ផ្ទាំងគ្រប់គ្រងថ្នាក់", icon: IconHome, path: "Classes" },
  { name: "អាហារូបករណ៍", icon: IconRosette, path: "Scholarships" },
  {
    name: "ផ្ទាំងគ្រប់គ្រងជំនាន់",
    icon: IconLayersLinked,
    path: "Generations",
  },
  { name: "ផ្ទាំងគ្រប់គ្រងមុខវិជ្ជា", icon: IconBook, path: "Subjects" },
];

const reports = [
  { name: "បញ្ចូលពិន្ទុសិស្ស", icon: IconSquarePlus, path: "Scores" },
  { name: "ប្រណិប័ត្រពិន្ទុ", icon: IconFileDescription, path: "Reports" },
];

const onClickLogout = async () => {
  loading.value = true;
  try {
    await router.push({ name: "Login" });
  } finally {
    loading.value = false;
    isShow.value = false;
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600&display=swap");

* {
  box-sizing: border-box;
}

.section-label {
  font-size: 20px !important;
  color: #1b3f72 !important;
  font-weight: 500 !important;
}

.sidebar {
  width: 280px;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f1f3f5;
  font-family: "Kantumruy Pro", sans-serif;
  padding: 0;
  position: sticky;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.brand-section {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 28px 24px 24px;
}

.logo-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #1b3f72;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.brand-name {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a2e;
  letter-spacing: -0.3px;
}

.divider {
  height: 1px;
  background-color: #1b3f72;
  margin: 0 24px 20px;
  border: none;
}

.nav-section {
  padding: 0 16px;
  margin-bottom: 10px;
}

.section-label {
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: #adb5bd;
  padding: 0 10px;
  margin-bottom: 6px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 18px !important;
  font-weight: 500 !important;
  padding: 13px 16px;
  border-radius: 14px;
  color: #1b3f72;
  text-decoration: none;
  transition: background 0.18s ease, color 0.18s ease;
  margin-bottom: 2px;
}

.menu-item:hover:not(.active) {
  background: #f0f4fb;
}

.menu-item.active {
  background: #1b3f72;
  color: #ffffff;
}

.menu-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: currentColor;
  opacity: 0.85;
}

.menu-item.active .menu-icon {
  opacity: 1;
}

.menu-label {
  font-size: 18px;
  font-weight: 500;
  flex: 1;
  line-height: 1.4;
  color: currentColor;
}

.spacer {
  flex: 1;
}

.bottom-section {
  padding: 12px 16px 20px;
  border-top: 1px solid #f1f3f5;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  color: #e03131;
  font-size: 15px;
  font-weight: 400;
  transition: background 0.15s ease;
  font-family: "Kantumruy Pro", sans-serif;
}

.logout-btn:hover {
  background: #fff5f5;
}

.custom-logout-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  background: #ffffff;
  font-family: var(--font-khmer);
}


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
  font-size: 24px;
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
</style>
