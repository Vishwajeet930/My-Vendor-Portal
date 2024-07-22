<template>
    <div class="form-container">
      <h2 class="form-title">Create New Purchase Order</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="number">PO Number</label>
          <input type="text" id="number" v-model="purchaseOrder.number" required />
        </div>
        <div class="input-group">
          <label for="supplier">Supplier</label>
          <input type="text" id="supplier" v-model="purchaseOrder.supplier" required />
        </div>
        <div class="input-group">
          <label for="amount">Amount</label>
          <input type="number" id="amount" v-model="purchaseOrder.amount" required />
        </div>
        <div class="input-group">
          <label for="status">Status</label>
          <input type="text" id="status" v-model="purchaseOrder.status" required />
        </div>
        <div class="input-group">
          <label for="orderDate">Order Date</label>
          <input type="date" id="orderDate" v-model="purchaseOrder.orderDate" required />
        </div>
        <div class="input-group">
          <label for="deliveryDate">Expected Delivery Date</label>
          <input type="date" id="deliveryDate" v-model="purchaseOrder.deliveryDate" required />
        </div>
        <div class="input-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="purchaseOrder.description" required></textarea>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
      <div v-if="showSuccessAlert" class="alert success-alert">
        Purchase order submitted successfully!
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewPurchaseOrder',
    data() {
      return {
        purchaseOrder: {
          number: '',
          supplier: '',
          amount: '',
          status: '',
          orderDate: '',
          deliveryDate: '',
          description: ''
        },
        showSuccessAlert: false
      }
    },
    methods: {
      handleSubmit() {
        // Handle the form submission logic here
        console.log('Submitting purchase order:', this.purchaseOrder);
        
        // Show success alert
        this.showSuccessAlert = true;
        
        // Reset the form after submission
        this.purchaseOrder = {
          number: '',
          supplier: '',
          amount: '',
          status: '',
          orderDate: '',
          deliveryDate: '',
          description: ''
        };
  
        // Hide success alert after a few seconds
        setTimeout(() => {
          this.showSuccessAlert = false;
        }, 3000);
      }
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    max-width: 500px;
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
  
  .input-group input, .input-group textarea {
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
  