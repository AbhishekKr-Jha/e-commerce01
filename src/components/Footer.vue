<template>
    <footer class="footer ">
        <div  class="flex flex-col gap-10 text-lg">
        <p>&copy; {{ new Date().getFullYear() }} Grabit. All rights reserved.</p>
        <nav >
          <router-link to="/">About</router-link> |
          <router-link to="/products">Products</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/contact">Contact</router-link> 
        </nav>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #222;
    color: white;
    text-align: center;
    padding: 20px 0;
    margin-top: 100px;

  }
  
 
  
  .footer a {
    color: #f2f2f2;
    text-decoration: none;
    margin: 0 10px;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  </style>
  