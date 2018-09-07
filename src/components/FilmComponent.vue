<template>
  <article class="film">
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
</template>
<script>
export default {
  props: {
    film: {
      type: String,
      required: true
    }
  }
}
</script>