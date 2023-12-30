export const useGlobalStore = defineStore("global", () => {
    const isSidebarOpen: Ref<Boolean> = ref(true);

    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value;
    }

    return {
        isSidebarOpen,
        toggleSidebar,
    };
});
