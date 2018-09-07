<template>
  <section class="film-wrapper">
    <h1>Studio Ghibli Films</h1>
    <ul class="film-nav">
      <directors-component v-for="director in directors" :key="director[director]" :director-data="director"></directors-component>
    </ul>

    <film-component v-for="film in films"  :key="film.id" :film-data="film"></film-component>
  </section>
</template>

<script>
import axios from 'axios'
import FilmComponent from './components/FilmComponent.vue'
import DirectorsComponent from './components/DirectorsComponent.vue'
export default {
  components: {
    FilmComponent,
    DirectorsComponent
  },
  data() {
    return {
      test: 'do this',
      films: [],
      directors: [],
      errors: []
    }
  },
  mounted () {
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then(response => {
      this.films = response.data

      this.getDirectors()
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    getDirectors: function() {
      let directArry = [];
      this.films.forEach(element => {
        let elDir = element.director;

        if (!directArry.includes(elDir)) {
          directArry.push(elDir);
        }
      });

      directArry.sort();
      this.directors = directArry;
    }
  }
}
</script>