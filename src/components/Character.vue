<template>
  <section class="content">
    <header class="film-title">
      <h1>{{character.name}}</h1>
    </header>
    
    <section>
      <h3>About</h3>
      <ul>
        <li><strong>Gender:</strong> {{character.gender}}</li>
        <li><strong>Age:</strong> {{character.age}}</li>
        <li><strong>Eye Color:</strong> {{character.eye_color}}</li>
        <li><strong>Hair Color:</strong> {{character.hair_color}}</li>
      </ul>
    </section>

    <section>
      <h3>Films</h3>
      <ul>
        <li v-for="film in filmlist" :key="film.id">{{film.title}}</li>
      </ul>
    </section>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Character',
  props: ['charData'],
  data() {
    return {
      character: this.charData,
      filmlist: []
    }
  },
  mounted() {
    let filmUrls = this.character.films,
      filmArry = [];

    filmUrls.forEach(element => {
      axios
        .get(element)
        .then(response => {
          filmArry.push(response.data);
      })
      .catch(e => {
        this.errors.push(e)
      })
    });
    this.filmlist = filmArry;
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
  grid-template-areas: "header header" "section1 section2";
  grid-gap: 3rem;
}

header {
  grid-area: header;
}

.content section:nth-of-type(1) {
  grid-area: section1;
}

.content section:nth-of-type(2) {
  grid-area: section2;
}

section h3 {
  margin: 0 0 1rem;
}
</style>