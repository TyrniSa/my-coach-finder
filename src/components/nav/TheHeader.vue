<template>
  <header>
    <nav>
      <h1 v-if="isLoggedIn">
        <RouterLink to="/">Hello {{ this.$store.getters.email }}!</RouterLink>
      </h1>
      <h1 v-else><RouterLink to="/">Find a Coach ✏️</RouterLink></h1>
      <ul>
        <li>
          <RouterLink to="/coaches">Coaches</RouterLink>
        </li>
        <li v-if="isLoggedIn">
          <RouterLink to="/requests">Requests</RouterLink>
        </li>
        <li v-else>
          <RouterLink to="/auth">Login/Signup</RouterLink>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout" link class="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #007965;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #FFCC29;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #FFCC29;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
.logout {
  background-color: transparent;
}
.logout:active,
.logout:hover {
  background-color: transparent;
  border-radius: 0;
  border: 1px solid #FFCC29;
}
@media screen and (max-width: 650px) {
  header {
    height: 7rem;
  }
  header h1 {
    font-size: 1.5rem;
  }
  header nav {
    width: 100%;
    flex-direction: column;
  }
  header a{
  padding: 0.5rem 1rem;
  }

  li {
    margin: 0;
  }
}
</style>
