import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('counter', {
  state: () => {
    return {
      open: false,
    }
  },
  actions: {
    toggle() {
      this.open = !this.open
    },
  },
})
