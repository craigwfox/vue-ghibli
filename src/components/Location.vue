<template>
  <section class="content">
    <header class="title">
      <h1>{{location.name}}</h1>
    </header>

    <section>
      <h3>Details</h3>
      <ul>
        <li><strong>Climate:</strong> {{location.climate}}</li>
        <li><strong>Terrain:</strong> {{location.terrain}}</li>
        <li><strong>Surface Water:</strong> {{location.surface_water}}</li>
      </ul>
    </section>
    <section>
      <h3>Residents</h3>
      <ul>
        <li v-for="resident in residentList" :key="resident.id">{{resident.name}}</li>
      </ul>
    </section>
    <section>
      <h3>Films</h3>
      <ul>
        <li v-for="film in filmList" :key="film.id">{{film.title}}</li>
      </ul>
    </section>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Location',
  props: ['locationData'],
  data() {
    return {
      location: this.locationData,
      residentList: [],
      filmList: []
    }
  },
  mounted() {
    this.apiGet(this.location.films, this.filmList);
    this.apiGet(this.location.residents, this.residentList);
  },
  methods: {
    apiGet: function(apiurl, arryname) {
      apiurl.forEach(element => {
        axios
          .get(element)
          .then(response => {
            arryname.push(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
      });
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 0;

  color: var(--green);
}

ul {
  margin: 0;
  padding: 1.5rem 2rem;

  background: #363636;
  border-radius: .5rem;

  list-style-type: none;
}

ul li {
  line-height: 1.3;
}

ul li strong {
  color: var(--green);
}

.content {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
}

header {
  grid-column: 1 / span 2;
  grid-row: 1;
}

h3 {
  margin: 0 0 1rem;
}
</style>