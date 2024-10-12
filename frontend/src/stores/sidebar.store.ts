import { defineStore } from 'pinia';

export interface ISidebarState { isVisible: boolean }

export const useSidebarStore = defineStore('sidebar', {
  state: (): ISidebarState => ({ isVisible: false }),

  actions: {
    toggleVisible() { this.isVisible = !this.isVisible },
  },

  getters: {
    getState: (state) => { return () => { return state.isVisible }},
  },
});
