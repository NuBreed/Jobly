import { defineStore } from 'pinia'

export const useJobStore = defineStore('job', {
  state: () => {
    return {
      job: {
        title: 'LagerLeiter',
        location: 'Hannover, 30419',
        details:
          'Planung und Umsetzung von Web-Anwendungen und komplexer Entwicklungsaufgaben Qualitätssicherung und Deployment von Webapplikationen Weiterentwicklung firmeneigener Softwarelösungen und Stabilitätsoptimierungen Evaluierung neuer Technologien im Umfeld unserer Lösungen',
        field: 'logistics',
      },
    }
  },
  actions: {
    toggle() {
      this.open = !this.open
    },
  },
})
