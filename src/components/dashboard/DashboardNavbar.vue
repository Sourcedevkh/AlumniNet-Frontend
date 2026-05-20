<script setup>
import { Search } from 'lucide-vue-next'
</script>

<template>
  <header class="topbar">
    <div class="search-box">
      <Search class="search-icon" :size="18" />
      <input type="text" placeholder="Search" />
    </div>
    
    <div class="user-info">
      <div class="user-text">
        <span class="user-name">PumpuyPikheat</span>
        <span class="user-role">Admin</span>
      </div>
      <div class="avatar">PP</div>
    </div>
  </header>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.topbar {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: #ffffff;
  border-bottom: 1px solid #eef1f6;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 320px;
  min-width: 200px;
  background: #f4f7fb;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px 12px;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.search-box:focus-within {
  background: #ffffff;
  border-color: #1B3F72;
}

.search-box input {
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.95rem;
  color: #1a1a2e;
}

.search-box input::placeholder {
  color: #8c9ba5;
}

.search-icon {
  color: #8c9ba5;
  flex-shrink: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-text {
  text-align: right;
}

.user-name {
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  color: #1a1a2e;
  line-height: 1.2;
}

.user-role {
  display: block;
  font-size: 0.75rem;
  color: #8c9ba5;
  margin-top: 2px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #dde8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1B3F72;
  font-size: 0.85rem;
  font-weight: 600;
  flex-shrink: 0;
}
</style>