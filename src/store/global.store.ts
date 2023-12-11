import { DEFAULT_THEME } from "~/constants/global.constants";
import type { ITheme } from "~/interfaces/global.interface";

export const useGlobalStore = defineStore('global', () => {
    const theme: Ref<ITheme> = ref(DEFAULT_THEME);
    const isSidebarOpen: Ref<Boolean> = ref(true);

    function toggleTheme () {
        if (theme.value === 'light') {
            theme.value = 'dark';
    
            return;
        }
    
        theme.value = 'light';
    }
    
    function toggleSidebar () {
        isSidebarOpen.value = !isSidebarOpen.value;
    }

    return { theme, isSidebarOpen, toggleTheme, toggleSidebar }
});
