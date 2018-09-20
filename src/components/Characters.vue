<template>
  <div class="content">
    <h2>Characters</h2>
    <p>Meow</p>
  </div>
</template>

<script>
export default {
  name: 'Characters',
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
        let filmsArry = [];
        response.data.forEach(element => {
          element.show = true;
          filmsArry.push(element);
        })
        this.charlist = filmsArry;
        this.getDirectors();
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
  }
}
</script>

