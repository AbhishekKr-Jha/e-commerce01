import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/Home.vue';
import Login from '@/views/Login.vue';
import ProductListingPage from '@/views/ProductListingPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import ProductDetailsPage from '@/views/ProductDetailsPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import WishlistPage from '@/views/WishlistPage.vue';
import CartListPage from '@/views/CartListPage.vue';
import OrdersPage from '@/views/OrdersPage.vue';


const routes = [
    { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register',name: 'register', component: Login },
  { path: '/products', component: ProductListingPage },
  { path: '/product-details', component: ProductDetailsPage } ,
  { path: '/profile', component: ProfilePage,meta: { requiresAuth: true } } ,
  { path: '/wishlist', component: WishlistPage,meta: { requiresAuth: true } } ,
  { path: '/cart', component: CartListPage,meta: { requiresAuth: true } } ,
  { path: '/orders', component: OrdersPage,meta: { requiresAuth: true } } ,
  { path: '/about', component: AboutPage } ,
  { path: '/contact', component: ContactPage } ,
]; 
// orders
const router = createRouter({
  history: createWebHistory(),
  routes
});

const isAuthenticated = () => !!localStorage.getItem('token'); 
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login'); 
  } 
  else if ((to.path === '/login' || to.path === '/register') && isAuthenticated()) {
    next('/'); // 🔄 Redirect logged-in users away from login/register page
  } 
  else {
    next(); 
  }
});

export default router;
