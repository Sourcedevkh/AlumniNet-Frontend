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
            <div class="form-container">
                <div class="left-content">
                    <h3 class="title">ផ្លូវរបស់អ្នកឆ្ពោះទៅរកការតភ្ជាប់អតីតនិស្សិត និងភាពជោគជ័យរបស់និស្សិត</h3>
                    <p class="sub-title">សូមស្វាគមន៍មកកាន់ AlumiNet ដែលភ្ជាប់អតីតនិស្សិត និងនិស្សិតតាមរយៈកិច្ចសហការ
                        និងការរីកចម្រើន</p>
                    <img src="../../../assets/images/auth/login-image.png" alt="Login Image" class="login-image">
                </div>
                <div class="right-content">
                    <div class="table-header">
                        <Branding size="40" class="mb-4" />
                        <h2 class="title mb-3">ចូលប្រើប្រាស់គណនី</h2>
                        <p class="sub-title mb-4">សូមបញ្ចូលព័ត៍មានរបស់អ្នកដើម្បីបន្ត</p>
                    </div>
                    <form @submit.prevent="onSubmit">
                        <BaseInput label="Email address" type="email" class="mb-4" />
                        <BaseInput label="Password" type="password" class="mb-3" />
                        <div class="action mb-4">
                            <BaseCheckBox label="Remember me" />
                            <router-link to="/forgot-password" class="forgot-password">ភ្លេចពាក្យសម្ងាត់?</router-link>
                        </div>
                        <BaseButton type="button" :loading="isDeleting" :disabled="isDeleting" loadingText="Deleting..."
                            btnClass="w-100" @click="handleDelete">
                            <template #btn> <span class="btn-text">ចូលប្រើប្រាស់</span></template>
                        </BaseButton>
                    </form>
                </div>
            </div>
        </template>
    </BG>
</template>

<style scoped>
.mb-4 {
    margin-bottom: 2rem !important;
}

.mb-3 {
    margin-bottom: 1rem !important;
}

.form-container {
    display: flex;
    min-height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10%;
    padding: 20px;
}

.form-container .left-content {
    flex: 1;
    color: var(--color-bg-light);
    max-width: 40%;
    text-align: center;
}

.form-container .left-content .title {
    font-family: var(--font-khmer);
    font-size: var(--text-2xl);
    line-height: 1.8;
    font-weight: var(--font-weight-semibold);
    margin-bottom: 20px;
}

.form-container .left-content .sub-title {
    font-family: var(--font-khmer);
    color: #d2d2d2;
    font-size: var(--text-lg);
    margin-bottom: 30px;
}

.form-container .left-content .login-image {
    width: 100%;
    max-width: 300px;
    border-radius: 16px;
}

.right-content {
    width: 50%;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 450px;
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

.btn-text {
    font-family: var(--font-khmer);
    font-size: var(--text-md);
    font-weight: var(--font-weight-medium);
}

.action {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.forgot-password {
    font-family: var(--font-khmer);
    font-size: 12px;
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition-slow);
}

.forgot-password:hover {
    text-decoration: underline;
}
</style>
