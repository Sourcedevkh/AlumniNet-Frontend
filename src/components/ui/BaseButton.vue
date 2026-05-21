<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    @click="onClick"
    :class="[
      'btn d-flex align-items-center justify-content-center px-4 global-style',
      btnClass,
      { disabled: disabled || loading },
    ]"
  >
    <!-- Loading -->
    <template v-if="loading">
      <span
        class="spinner-border spinner-border-sm me-2"
        role="status"
        aria-hidden="true"
      ></span>
      {{ loadingText }}
    </template>

    <!-- Normal -->
    <template v-else>
      <slot>Button</slot>
    </template>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: "Loading...",
  },
  btnClass: {
    type: String,
    default: "w-fit btn-primary",
  },
});

const emit = defineEmits(["click"]);

const onClick = (e) => {
  emit("click", e);
};
</script>

<style scoped>
.global-style {
  font-family: var(--font-khmer);
  gap: 10px;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-md);
  background: var(--primary-color);
  color: var(--color-bg-light);
  transition: background 0.2s ease, opacity 0.2s ease;
}


.global-style:hover:not(:disabled) {
  background: var(--color-blue-navy);
  color: var(--color-bg-light);
}


.global-style:active:not(:disabled) {
  background: var(--color-blue-navy);
  color: var(--color-bg-light);
}

.global-style:disabled,
.global-style.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: var(--primary-color);
  pointer-events: none;
}
</style>