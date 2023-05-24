<template>
  <footer>
    <a href="https://tyrnisarkka.netlify.app/">Tyrni Särkkä</a> &nbsp; - &nbsp; 2023
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 2rem;
  position: fixed;
  bottom: 0;
  background-color: #3d008d;
  display: flex;
  padding-left: 1rem;
  align-items: center;
  color:rgb(255, 234, 209);
  font-size: 0.7rem;
}
a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
}
a:active,
a:hover,
a.router-link-active {
  color:rgb(255, 234, 209)
}
</style>