<template>
  <div class="page-wrapper">
    <nav>
      <h1><a href="#0">Studio Ghibli Films</a></h1>
      <ul>
        <li><a href="#0">Movie List</a></li>
        <li><a href="#0">Characters</a></li>
      </ul>
    </nav>
    <section class="film-wrapper">
      <ul class="film-nav">
        <li class="active"><a href="#all" data-id="all" @click="navDirector">All</a></li>
        <directors-component @click.native="navDirector" v-for="director in directors" :key="director[director]" :director-data="director"></directors-component>
      </ul>

      <film-component v-if="film.show" v-for="film in films"  :key="film.id" :film-data="film"></film-component>
    </section>
  </div>
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
          let filmsArry = [];
          response.data.forEach(element => {
            element.show = true;
            filmsArry.push(element);
          })
          this.films = filmsArry;
          this.getDirectors();
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    methods: {
      getDirectors: function() {
        let directArry = [];
        this.films.forEach(element => {
          let elDir = {
            name: element.director,
            id: element.id,
            url: element.director.replace(/ /g,'-').toLowerCase()
          };

          let dirfound = false;
          for(let i = 0; i < directArry.length; i++) {
            if (directArry[i].name == elDir.name) {
              dirfound = true;
              break;
            }
          }

          if (!dirfound) {
            directArry.push(elDir);
          }
        });

        directArry.sort();
        this.directors = directArry;
      },
      navDirector: function(e) {
        let curid = e.target.getAttribute('data-id');
        let filmnav = document.querySelectorAll('.film-nav li');

        filmnav.forEach(navel => {
          navel.classList.remove('active');
        })

        e.target.closest('li').classList.add('active');

        if(curid === 'all') {
          console.log('show:', curid);
          this.films.forEach(element => {
            element.show = true;
          })
        } else {
          console.log('show:', curid);
          this.films.forEach(element => {
            if (element.director === curid) {
              element.show = true;
            } else {
              element.show = false;
            }
          })
        }
      }
    }
  }
</script>
