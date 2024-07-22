import { createRouter, createWebHistory } from 'vue-router'
import PendingPOs from '../components/PendingPOs.vue'
import MainContent from '../components/Content.vue'
import Login from '../components/Login.vue'
import NewPurchaseOrder from '../components/NewPurchaseOrder.vue'
import VendorOnboarding from '../components/VendorOnboarding.vue'
import supplierquotation from '../components/SupplierQuotation.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent
  },
  {
    path: '/pendingpo',
    name: 'PendingPOs',
    component: PendingPOs
  },
  {
    path : '/login',
    name : 'Login',
    component : Login

  },
  {
    path : '/newpo',
    name : 'NewPurchaseOrder',
    component : NewPurchaseOrder

  },
  {
    path : '/onboarding',
    name : 'VendorOnboarding',
    component : VendorOnboarding

  },
  {
    path : '/supplierquotation',
    name : 'supplierquotation',
    component : supplierquotation

  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
