<template>
  <li><a :href="'#' + director.url" :data-id="director.name">{{director.name}}</a></li>
</template>

<script>
export default {
  props: ['directorData'],
    data() {
      return {
        director: this.directorData,
      }
    }
}
</script>