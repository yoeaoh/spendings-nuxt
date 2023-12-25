<script setup lang="ts">
defineProps<{
    isOpen: Boolean;
}>();

const emit = defineEmits(["close"]);

const closeOnEscape = function (e: KeyboardEvent) {
    if (e.key === "Escape") {
        emit("close");
    }
};

onMounted(() => {
    // console.log("modal open");
    document.addEventListener("keydown", closeOnEscape);
});

onUnmounted(() => {
    // console.log("modal closed");
    document.removeEventListener("keydown", closeOnEscape);
});
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="isOpen" class="modal" @click.self="emit('close')">
                <div class="modal__container">
                    <div class="modal__header">
                        <button class="modal__close">
                            <Icon
                                name="lets-icons:close-round"
                                @click="emit('close')"
                            />
                        </button>
                    </div>

                    <div class="modal__body">
                        <slot name="default"></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: hsla(0, 0%, 0%, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;

    &__container {
        padding: 1rem;
        color: #fff;
        background-color: hsla(0, 0%, 0%, 0.75);
        border: 1px solid hsla(0, 0%, 100%, 0.5);
        border-radius: 1rem;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    &__header {
        display: flex;
    }

    &__close {
        margin-left: auto;
        font-size: 1.5rem;
        background-color: transparent;
        border: 0;
        color: hsla(0, 0%, 100%, 0.75);
        cursor: pointer;

        &:hover {
            color: hsla(0, 0%, 100%, 1);
        }
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
