<template>
    <div class="p-4">
      <h2 class="text-2xl font-semibold mb-4">Pending Purchase Orders</h2>
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">PO Number</th>
            <th class="py-2 px-4 border-b">Supplier</th>
            <th class="py-2 px-4 border-b">Amount</th>
            <th class="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(po, index) in purchaseOrders" :key="index">
            <td class="py-2 px-4 border-b">{{ po.number }}</td>
            <td class="py-2 px-4 border-b">{{ po.supplier }}</td>
            <td class="py-2 px-4 border-b">{{ po.amount }}</td>
            <td class="py-2 px-4 border-b">{{ po.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PendingPOs',
    data() {
      return {
        purchaseOrders: [
          { number: 'PO12345', supplier: 'Supplier A', amount: '$1,000', status: 'Pending' },
          { number: 'PO12346', supplier: 'Supplier B', amount: '$2,500', status: 'Pending' },
          { number: 'PO12347', supplier: 'Supplier C', amount: '$750', status: 'Pending' },
          { number: 'PO12348', supplier: 'Supplier D', amount: '$3,200', status: 'Pending' },
          { number: 'PO12349', supplier: 'Supplier E', amount: '$500', status: 'Pending' },
          // Add more records as needed
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Additional styles for the Pending POs component can go here */
  </style>
  


  <!-- /home/vishwajeet/dashboard/src/components/PendingPOs.vue -->