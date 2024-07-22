<template>
    <div class="form-container">
      <h2 class="form-title">Supplier Quotation Form</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="quotationNumber">Quotation Number</label>
          <input type="text" id="quotationNumber" v-model="quotation.quotationNumber" required />
        </div>
        <div class="input-group">
          <label for="supplierName">Supplier Name</label>
          <input type="text" id="supplierName" v-model="quotation.supplierName" required />
        </div>
        <div class="input-group">
          <label for="date">Date</label>
          <input type="date" id="date" v-model="quotation.date" required />
        </div>
        <div class="input-group">
          <label for="validity">Validity Period (Days)</label>
          <input type="number" id="validity" v-model="quotation.validity" required />
        </div>
        <div class="input-group">
          <label for="items">Items</label>
          <textarea id="items" v-model="quotation.items" rows="4" required></textarea>
        </div>
        <div class="input-group">
          <label for="totalAmount">Total Amount</label>
          <input type="number" id="totalAmount" v-model="quotation.totalAmount" required />
        </div>
        <div class="input-group">
          <label for="currency">Currency</label>
          <select id="currency" v-model="quotation.currency" required>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
            <!-- Add more currencies as needed -->
          </select>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
      <div v-if="showSuccessAlert" class="alert success-alert">
        Supplier quotation submitted successfully!
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SupplierQuotation',
    data() {
      return {
        quotation: {
          quotationNumber: '',
          supplierName: '',
          date: '',
          validity: '',
          items: '',
          totalAmount: '',
          currency: 'USD'
        },
        showSuccessAlert: false
      }
    },
    methods: {
      handleSubmit() {
        console.log('Submitting supplier quotation:', this.quotation);
        this.showSuccessAlert = true;
        this.quotation = {
          quotationNumber: '',
          supplierName: '',
          date: '',
          validity: '',
          items: '',
          totalAmount: '',
          currency: 'USD'
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
  .input-group textarea,
  .input-group select {
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
  