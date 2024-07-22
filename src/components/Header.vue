<template>
  <header class="bg-gray-800 text-white p-4 flex justify-between items-center fixed w-full top-0 z-20">
    <div class="flex items-center">
      <button @click="$emit('toggleSidebar')" class="mr-4 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 class="text-lg font-semibold">Vendor Portal Dashboard</h1>
    </div>
    <nav>
      <a href="#" class="mx-2">Home</a>
      <a href="#" class="mx-2">Support</a>
      <a href="#" class="mx-2">Notifications</a>
    </nav>
    <div>
      <a href="#" class="mx-2">Profile</a>
      <a href="#" class="mx-2">Settings</a>
      <router-link to="/login"> <a href="#" class="mx-2">Login</a>
      </router-link>
        
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
/* Additional styles for the header can go here */
</style>
