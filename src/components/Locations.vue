<template>
  <div class="content">
    <h2>Locations</h2>
    
    <ul class="list">
      <li v-for="location in locationlist" :key="location.id">
        <router-link :to="{name: 'location', params: {name: location.name, locationData: location}}">{{location.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        locationlist: [],
        errors: []
      }
    },
    mounted () {
      axios
        .get('https://ghibliapi.herokuapp.com/locations')
        .then(response => {
          this.locationlist = response.data;
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
.list {
  margin: 0;
  padding: 0;

  list-style-type: none;
}

.list a {
  color: var(--blue);
  line-height: 1.4;
}
</style>


