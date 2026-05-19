<template>
    <div>
        <div v-if="show" class="modal fade show" tabindex="-1" style="display: block">
            <div class="modal-dialog modal-dialog-centered">
                <slot name="modal"></slot>
            </div>
        </div>

        <div class="modal-backdrop fade show" v-if="show"></div>
    </div>
</template>

<script setup>
defineProps({
    show: { type: Boolean, default: false },
});
</script>
