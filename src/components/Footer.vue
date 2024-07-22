<template>
  <footer :class="['bg-gray-800 text-white p-4', isSidebarOpen ? 'h-16' : 'h-20', 'transition-height']">
    <p class="text-center">© 2024 Vendor Portal. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
/* Smooth transition for footer height */
.transition-height {
  transition: height 0.3s ease;
}
</style>
