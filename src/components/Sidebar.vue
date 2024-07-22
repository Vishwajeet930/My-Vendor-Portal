<template>
  <div :class="['bg-gray-800 text-white h-full transition-transform', isOpen ? 'w-34' : 'w-0', isOpen ? 'opacity-100' : 'opacity-0', 'fixed top-0 left-0 z-10']">
    <button @click="toggleSidebar" class="p-2 focus:outline-none">
      <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
    <div v-if="isOpen" class="p-4">
      <nav>
        <ul>
          <li><a href="#" class="block p-2">Dashboard</a></li>
          <li><a href="#" class="block p-2">Onboarding</a></li>
          <li><a href="#" class="block p-2">Supplier Quotation</a></li>
          <li><a href="#" class="block p-2">Contracts</a></li>
          <li><a href="#" class="block p-2">Purchase Orders (POs)</a></li>
          <li><a href="#" class="block p-2">ASN</a></li>
          <li><a href="#" class="block p-2">GRN/PR</a></li>
          <li><a href="#" class="block p-2">Invoicing</a></li>
          <li><a href="#" class="block p-2">Subcontracting</a></li>
          <li><a href="#" class="block p-2">Audit</a></li>
          <li><a href="#" class="block p-2">Ledger Confirmation</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar')
    }
  }
}
</script>

<style scoped>
/* Ensure smooth transition for width and opacity */
.transition-transform {
  transition: width 0.3s ease, opacity 0.3s ease;
}
</style>
