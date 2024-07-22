<template>
  <div>
    <div v-if="$route.name !== 'Login'" class="flex flex-col h-screen">
      <!-- Header -->
      <TheHeader @toggleSidebar="toggleSidebar" />

      <div class="flex flex-1 mt-16"> <!-- Adjust margin-top to accommodate header height -->
        <!-- Sidebar -->
        <TheSidebar :isOpen="isSidebarOpen" />

        <!-- Main Content -->
        <main :class="['flex-1 p-4 transition-all duration-300', isSidebarOpen ? 'ml-64' : 'ml-0']">
          <router-view />
        </main>
      </div>

      <!-- Footer -->
      <TheFooter :isSidebarOpen="isSidebarOpen" />
    </div>

    <!-- Render only the main content for login page -->
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from './components/Header.vue'
import TheSidebar from './components/Sidebar.vue'
import TheFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
    TheFooter
  },
  data() {
    return {
      isSidebarOpen: true
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    }
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
</style>
