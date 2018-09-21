<template>
  <div class="content">
    <h2>Characters</h2>
    
    <ul class="character-list">
      <li v-for="character in charlist" :key="character.id">
        <!-- <a href="#0">{{character.name}}</a> -->
        <router-link :to="{name: 'character', params: {name: character.name, charData: character}}">{{character.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import characterComponent from './Character.vue'

  export default {
    components: {
      characterComponent
    },
    data () {
      return {
        charlist: [],
        errors: []
      }
    },
    mounted () {
      axios
        .get('https://ghibliapi.herokuapp.com/people')
        .then(response => {
          this.charlist = response.data;
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    methods: {
    }
  }
</script>

<style>
.character-list {
  margin: 0;
  padding: 0;

  list-style-type: none;
}

.character-list a {
  color: var(--blue);
  line-height: 1.4;
}
</style>


