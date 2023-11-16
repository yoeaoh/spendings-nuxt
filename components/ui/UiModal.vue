<script setup lang="ts">
const emit = defineEmits(['close']);

const closeOnEscape = function (e: KeyboardEvent) {
    if (e.key === 'Escape') {
        emit('close');
    }
};

onMounted(() => {
    console.log('modal open');
    document.addEventListener('keydown', closeOnEscape);
});

onUnmounted(() => {
    console.log('modal closed');
    document.removeEventListener('keydown', closeOnEscape);
});
</script>

<template>
    <Transition name="modal">
        <div class="modal">
            <div class="modal__container">
                <div class="modal__header modal-header">
                    <h3 class="modal-header__title">
                        <slot name="header"></slot>
                    </h3>
                </div>

                <div class="modal__body">
                    <slot name="body"></slot>
                </div>

                <div class="modal__footer">
                    <slot name="footer">
                        <button class="modal__button" @click="$emit('close')">
                            Закрыть
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    transition: opacity 0.3s ease;

    &__container {
        padding: 1rem 2rem;
        color: #fff;
        background-color: #2d1c63;
        border-radius: 1rem;
        transition: all 0.3s ease;
    }

    &__header {
        color: #fff;
    }
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal__container,
.modal-leave-to .modal__container {
    transform: scale(1.1);
}
</style>
