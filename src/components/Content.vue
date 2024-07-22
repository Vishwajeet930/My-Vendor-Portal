<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <router-link to="/pendingpo" class="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100 transition">
        <h3 class="text-lg font-semibold mb-2">Pending POs</h3>
        <p class="text-gray-600">List of pending purchase orders</p>
      </router-link>
      <router-link to="/pendingpo" class="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100 transition">
        <h3 class="text-lg font-semibold mb-2">Upcoming Deliveries</h3>
        <p class="text-gray-600">List of scheduled deliveries</p>
      </router-link>
      <router-link to="/pendingpo" class="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100 transition">
        <h3 class="text-lg font-semibold mb-2">Unpaid Invoices</h3>
        <p class="text-gray-600">List of unpaid invoices</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>

<style scoped>
/* Additional styles for the main content can go here */
</style>
