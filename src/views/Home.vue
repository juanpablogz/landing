<template>
  <div class="home">
    <!-- <try-vue-fire/> -->
  <landing></landing>
  </div>
</template>

<script>
// @ is an alias to /src
// import TryVueFire from '../components/TryVueFirebase.vue'
import landing from '../components/landing.vue'
export default {
  name: 'Home',
  // components: {
  //   'try-vue-fire': TryVueFire
  // }
  components: {
    'landing': landing
  }
}
</script>
