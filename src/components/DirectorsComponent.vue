<template>
  <li><a href="#0">{{director}}</a></li>
</template>

<script>
export default {
  props: ['directorData'],
    data() {
      return {
        director: this.directorData
      }
    }
}
</script>