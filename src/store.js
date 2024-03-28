import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => {
    return {
      name: 'Douglas',
      isAdmin: true,
      hasChanged: true,
    }
  },
})