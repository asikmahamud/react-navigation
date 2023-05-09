import { defineStore } from 'pinia'

export const useStore = defineStore('mainStore', {
    state: () => {
      return { 
        dropDown: false,
        dropMenu: false,
        mobileMenu: false,
        darkMode: false
       }
    },
    actions: {
      
    },
  })