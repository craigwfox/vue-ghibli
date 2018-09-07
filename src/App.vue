<template>
  <section class="film-wrapper">
    <h1>Studio Ghibli Films</h1>
    <ul class="film-nav">
      <li><a href="#0">Person 1</a></li>
      <li><a href="#0">Person 2</a></li>
      <li><a href="#0">Person 3</a></li>
    </ul>
    <article class="film" v-for="film in films">
      <header class="film-title">
        <h2> 
          <a href="#0">{{film.title}}</a>
        </h2>
        <ul>
          <li><strong>Director:</strong> {{film.director}}</li>
          <li><strong>Producer:</strong> {{film.producer}}</li>
          <li><strong>Release:</strong> {{film.release_date}}</li>
          <li><strong>Rotten Tomatoes:</strong> {{film.rt_score}}</li>
        </ul>
      </header>
      <p class="film-description">{{film.description}}</p>
    </article>
  </section>
</template>

<script>
import axios from 'axios'
// import FilmComponent from './components/FilmComponent.vue'
export default {
  // components: {
  //   FilmComponent
  // },
  data() {
    return {
      test: 'do this',
      films: [],
      errors: []
    }
  },
  mounted () {
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then(response => {
      this.films = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>