<template>
    <div>
        <title>My Blog</title>
     <nav>
       <ul>
         <li><nuxt-link to="/">Home</nuxt-link></li>
         <li><nuxt-link to="/about">About</nuxt-link></li>
         <li><nuxt-link to="/posts">Posts</nuxt-link></li>
       </ul>
        </nav>
      <slot />
    </div>
  </template>