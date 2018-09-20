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
  props: ['filmData'],
    data() {
      return {
        film: this.filmData
      }
    }
}
</script>

<style scoped>
/* film item */
.film {
  padding: 3rem 0;
}

@media (min-width: 767px) {
  .film {
    display: flex;
    align-items: stretch;
  }
}

/* Film Title */
.film-title {
  flex: 1 0 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@media (min-width: 767px) {
  .film-title {
    padding-right: 2rem;
  
    border-right: 1px solid var(--orange);
  }
}

.film-title h2 {
  margin: 0;
  
  font-size: 2.3rem;
}

.film-title h2,
.film-title h2 a {
  color: var(--blue);  
}

.film-title ul {
  margin: 1rem 0 0;
  padding: 0;
  
  list-style-type: none;
}

/* Film Description */
.film-description {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  
  margin: 1.5rem 0 0;
  
  font-size: 1.8rem;
}

@media (min-width: 767px) {
  .film-description {
    margin: 0;
    padding-left: 2rem;
  }
}
</style>