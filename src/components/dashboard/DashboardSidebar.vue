<template>
  <aside class="sidebar">
    <div class="brand-section">
      <div class="logo-box">AN</div>
      <span class="brand-name">AlumiNet</span>
    </div>
    <hr class="divider" />

    <div class="nav-section">
      <!-- <span class="section-label">DASHBOARD</span> -->
      <router-link
        v-for="item in dashboard"
        :key="item.path"
        :to="{ name: item.path }"
        class="menu-item"
        active-class="active"
      >
        <component :is="item.icon" class="menu-icon" :size="20" :stroke-width="1.6" />
        <span class="menu-label">{{ item.name }}</span>
      </router-link>
    </div>

    <div class="nav-section">
      <span class="section-label">ផ្ទាំងគ្រប់គ្រងទូទៅ</span>
      <router-link
        v-for="item in management"
        :key="item.path"
        :to="{ name: item.path }"
        class="menu-item"
        active-class="active"
      >
        <component :is="item.icon" class="menu-icon" :size="20" :stroke-width="1.6" />
        <span class="menu-label">{{ item.name }}</span>
      </router-link>
    </div>

    <div class="nav-section">
      <span class="section-label">ផ្ទាំងគ្រប់គ្រងពិន្ទុ</span>
      <router-link
        v-for="item in reports"
        :key="item.path"
        :to="{ name: item.path }"
        class="menu-item"
        active-class="active"
      >
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

  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isShow" class="modal-overlay" @click.self="isShow = false">
        <div class="modal-box">
          <div class="modal-body">
            <div class="modal-icon">
              <IconLogout :size="20" :stroke-width="1.6" />
            </div>
            <div class="modal-title">ចាកចេញពីប្រព័ន្ធ</div>
            <p class="modal-desc">
              តើអ្នកពិតជាចង់ចាកចេញពី <span>AlumiNet</span> មែនទេ?
            </p>
          </div>
          <div class="modal-actions">
            <button class="btn-cancel" :disabled="loading" @click="isShow = false">
              បោះបង់
            </button>
            <button class="btn-confirm" :disabled="loading" @click="handleLogout">
              {{ loading ? 'ផ្អាក...' : 'ចាកចេញ' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  IconLayoutDashboard,
  IconUsersGroup,
  IconHome,
  IconRosette,
  IconLayersLinked,
  IconBook,
  IconSquarePlus,
  IconFileDescription,
  IconLogout,
} from '@tabler/icons-vue'

const router = useRouter()
const isShow = ref(false)
const loading = ref(false)

const dashboard = [
  { name: "ផ្ទាំងគ្រប់គ្រង", icon: IconLayoutDashboard, path: "Dashboard" },
]

const management = [
  { name: "ផ្ទាំងគ្រប់គ្រងសិស្ស",   icon: IconUsersGroup,     path: "Students" },
  { name: "ផ្ទាំងគ្រប់គ្រងថ្នាក់",    icon: IconHome,           path: "Classes" },
  { name: "អាហារូបករណ៍",               icon: IconRosette,        path: "Scholarships" },
  { name: "ផ្ទាំងគ្រប់គ្រងជំនាន់",    icon: IconLayersLinked,   path: "Generations" },
  { name: "ផ្ទាំងគ្រប់គ្រងមុខវិជ្ជា", icon: IconBook,           path: "Subjects" },
]

const reports = [
  { name: "បញ្ចូលពិន្ទុសិស្ស", icon: IconSquarePlus,      path: "Scores" },
  { name: "ប្រណិប័ត្រពិន្ទុ",  icon: IconFileDescription, path: "Reports" },
]

const handleLogout = async () => {
  loading.value = true
  try {
    await router.push({ name: 'Login' })
  } finally {
    loading.value = false
    isShow.value = false
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600&display=swap');

* {
  box-sizing: border-box;
}


.section-label {
  font-size: 20px !important;
  color:#1B3F72 !important;
  font-weight: 500 !important;
}
.sidebar {
  width: 280px;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f1f3f5;
  font-family: 'Kantumruy Pro', sans-serif;
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
  background: #1B3F72;
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
  background-color: #1B3F72;
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
  color: #1B3F72;
  text-decoration: none;
  transition: background 0.18s ease, color 0.18s ease;
  margin-bottom: 2px;
}

.menu-item:hover:not(.active) {
  background: #f0f4fb;
}

.menu-item.active {
  background: #1B3F72;
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
  font-family: 'Kantumruy Pro', sans-serif;
}

.logout-btn:hover {
  background: #fff5f5;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-box {
  background: #ffffff;
  border-radius: 18px;
  width: 310px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.14);
}

.modal-body {
  padding: 24px 22px 18px;
}

.modal-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #fff5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  color: #e03131;
}

.modal-title {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;
  font-family: 'Kantumruy Pro', sans-serif;
}

.modal-desc {
  font-size: 13px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  font-family: 'Kantumruy Pro', sans-serif;
}

.modal-desc span {
  color: #1B3F72;
  font-weight: 600;
}

.modal-actions {
  display: flex;
  border-top: 1px solid #f1f3f5;
}


.modal-actions button {
  flex: 1;
  padding: 14px;
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Kantumruy Pro', sans-serif;
  transition: background 0.15s ease;
}

.btn-cancel {
  color: #64748b;
  border-right: 1px solid #f1f3f5;
}

.btn-cancel:hover:not(:disabled) {
  background: #f8f9fa;
}

.btn-confirm {
  color: #e03131;
  font-weight: 600;
}

.btn-confirm:hover:not(:disabled) {
  background: #fff5f5;
}

.btn-cancel:disabled,
.btn-confirm:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
