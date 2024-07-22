<template>
    <div class="login-container">
      <div class="login-box">
        <h2 class="login-title">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <router-link to = "/"><button type="submit" class="login-button">Login </button></router-link>
          
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TheLogin',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      handleLogin() {
        // Handle the login logic here
        console.log('Logging in with', this.email, this.password);
        // Redirect or perform further actions upon successful login
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('@/assets/VendorPortal.jpg') no-repeat center center;
    background-size: cover;
    /* /home/vishwajeet/dashboard/src/assets/VendorPortal.jpg */
  }
  
  .login-box {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  
  .login-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .input-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .login-button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .login-button:hover {
    background-color: #45a049;
  }
  </style>
  