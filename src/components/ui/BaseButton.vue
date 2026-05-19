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
    default: "btn-primary w-100 fw-semibold",
  },
});

const emit = defineEmits(["click"]);

const onClick = (e) => {
  emit("click", e);
};
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    @click="onClick"
    :class="[
      'btn d-flex align-items-center justify-content-center btn-primary px-4 global-style',
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
      <h1></h1>
    </template>

    <!-- Normal -->
    <template v-else>
      <slot name="btn">Button</slot>
    </template>
  </button>
</template>

<style scoped>
    .global-style{
        font-family: var(--font-khmer);
        gap: 10px;
        font-size: var(--text-2xl);
        font-weight: var(--font-weight-medium);
        border-radius: var(--radius-xl);
        /* background-color: #0075FF; */
    }



</style>
