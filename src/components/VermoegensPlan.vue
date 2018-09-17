<template>
  <div class="vp">
    <h2 class="subtitle" v-show="prev_vn_nachname === undefined ? true : vp.vn_nachname !== prev_vn_nachname">{{ vp.vn_nachname }}</h2>

    <h2>{{ vp.produkt_gfnr }} - {{ vp.vn_vorname }} ({{ index }})</h2>
  </div>
</template>

<script>
export default {
  name: 'VermoegensPlan',
  props: {
    vp: Object,
    index: Number,
    prev_vn_nachname: String
  }
}
</script>

<style scoped>
h2.subtitle {
  text-decoration: underline;
}
</style>
