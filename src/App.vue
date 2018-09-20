<template>
  <div class="page-wrapper">
    <header class="page-header">
      <nav class="nav-main">
        <h1><a href="#0">Studio Ghibli Films</a></h1>
        <ul>
          <li>
            <router-link to="/">Films</router-link>
          </li>
          <li>
            <router-link to="/characters">Characters</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
