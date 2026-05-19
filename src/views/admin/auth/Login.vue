<script setup>
import BG from "./BG.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseCheckBox from "@/components/ui/BaseCheckBox.vue";
// icon
import Branding from "@/components/icons/BrandingAlumiNet.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<template>
    <BG>
        <template #default>
            <div class="table-wrapper">
                <div class="table-header">
                    <Branding size="40" class="mb-4" />
                    <h2 class="title mb-2">ចូលប្រើប្រាស់គណនី</h2>
                    <p class="sub-title mb-4">សូមបញ្ចូលព័ត៍មានរបស់អ្នកដើម្បីបន្ត</p>
                </div>
                <form @submit.prevent="onSubmit">
                    <BaseInput label="Email address" type="email" class="mb-4" />
                    <BaseInput label="Password" type="password" class="mb-2" />
                    <BaseCheckBox label="Remember me" class="mb-4" />
                    <BaseButton type="button" :loading="isDeleting" :disabled="isDeleting" loadingText="Deleting..."
                        btnClass="w-100" @click="handleDelete">
                        <template #btn> <span class="btn-text">ចូលប្រើប្រាស់</span></template>
                    </BaseButton>
                </form>
            </div>
        </template>
    </BG>
</template>

<style scoped>
.table-wrapper {
    width: 100%;
    max-width: 400px;
    padding: 40px;
    background-color: var(--color-bg-light);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.table-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.table-header .title {
    color: var(--color-primary);
    font-family: var(--font-khmer);
    font-size: 20px;
    font-weight: var(--font-weight-semibold);
}

.table-header .sub-title {
    font-family: var(--font-khmer);
    color: #8c8c8c;
    font-size: 14px;
    text-align: center;
}

/* ::v-deep(.btn-login) {
    background: var(--primary-color) !important;
    color: var(--color-bg-light);
}

::v-deep(.btn-login:active) {
    background: var(--color-blue-navy) !important;
    color: var(--color-bg-light);
}

::v-deep(.btn-login:disabled) {
    opacity: 0.6 !important;
    background: var(--primary-color) !important;
} */

.btn-text {
    font-family: var(--font-khmer);
    font-size: var(--text-md);
    font-weight: var(--font-weight-medium);
}
</style>
