<template>
    <div class="form-container">
      <h2 class="form-title">Vendor Onboarding</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="vendorName">Vendor Name</label>
          <input type="text" id="vendorName" v-model="vendor.vendorName" required />
        </div>
        <div class="input-group">
          <label for="contactPerson">Contact Person</label>
          <input type="text" id="contactPerson" v-model="vendor.contactPerson" required />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="vendor.email" required />
        </div>
        <div class="input-group">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" v-model="vendor.phone" required />
        </div>
        <div class="input-group">
          <label for="address">Address</label>
          <input type="text" id="address" v-model="vendor.address" required />
        </div>
        <div class="input-group">
          <label for="city">City</label>
          <input type="text" id="city" v-model="vendor.city" required />
        </div>
        <div class="input-group">
          <label for="state">State</label>
          <input type="text" id="state" v-model="vendor.state" required />
        </div>
        <div class="input-group">
          <label for="zip">Zip Code</label>
          <input type="text" id="zip" v-model="vendor.zip" required />
        </div>
        <div class="input-group">
          <label for="country">Country</label>
          <input type="text" id="country" v-model="vendor.country" required />
        </div>
       
        <div class="input-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="vendor.description" required></textarea>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
      <div v-if="showSuccessAlert" class="alert success-alert">
        Vendor onboarding information submitted successfully!
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VendorOnboarding',
    data() {
      return {
        vendor: {
          vendorName: '',
          contactPerson: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          country: '',
          companyWebsite: '',
          description: ''
        },
        showSuccessAlert: false
      }
    },
    methods: {
      handleSubmit() {
        console.log('Submitting vendor information:', this.vendor);
        this.showSuccessAlert = true;
        this.vendor = {
          vendorName: '',
          contactPerson: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          country: '',
          companyWebsite: '',
          description: ''
        };
        setTimeout(() => {
          this.showSuccessAlert = false;
        }, 3000);
      }
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-title {
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
  
  .input-group input,
  .input-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  
  .alert {
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
  }
  
  .success-alert {
    background-color: #dff0d8;
    color: #3c763d;
    border: 1px solid #d6e9c6;
  }
  </style>
  