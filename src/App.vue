<template>
  <div id="app">
    <HelloWorld msg="Eingereichte Anträge"/>

    <VermoegensPlan v-for="(vp, index) in entries"
      :key="vp.produkt_gfnr"
      :vp="vp"
      :index="index"
      :prev_vn_nachname="index > 0 ? entries[index - 1].vn_nachname : undefined"
    />

    <button @click="entries = new_entries">Click me</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VermoegensPlan from './components/VermoegensPlan.vue'

export default {
  name: 'app',

  data: function () {
    return {
      entries: [{
        "produkt_gfnr":"1752167994190003801",
        "vn_geburtsdatum":"30.09.1990",
        "vn_nachname":"P*r*r",
        "vn_vorname":"Roman"
      }, {
        "produkt_gfnr":"1752167994190003802",
        "vn_geburtsdatum":"30.09.1990",
        "vn_vorname":"Florian",
        "vn_nachname":"H*l*b*r*e*"
      }, {
        "produkt_gfnr":"1752167994190003803",
        "vn_geburtsdatum":"30.09.1990",
        "vn_vorname":"Elisabeth",
        "vn_nachname":"H*l*b*r*e*"
      }],

      new_entries: [{
        "produkt_gfnr":"1752167994190003801",
        "vn_geburtsdatum":"30.09.1990",
        "vn_nachname":"P*r*r",
        "vn_vorname":"Roman"
      }, {
        "produkt_gfnr":"1752167994190003814",
        "vn_geburtsdatum":"30.09.1990",
        "vn_vorname":"Pierre",
        "vn_nachname":"S*r*h*e*e*"
      }, {
        "produkt_gfnr":"1752167994190003812",
        "vn_geburtsdatum":"30.09.1990",
        "vn_vorname":"Florian",
        "vn_nachname":"H*l*b*r*e*"
      }, {
        "produkt_gfnr":"1752167994190003803",
        "vn_geburtsdatum":"30.09.1990",
        "vn_vorname":"Elisabeth",
        "vn_nachname":"H*l*b*r*e*"
      }, {
        "produkt_gfnr":"1752167994190003813",
        "vn_geburtsdatum":"30.09.1990",
        "vn_vorname":"Maria",
        "vn_nachname":"B*a*n*t*i*"
      }, {
        "produkt_gfnr":"1752167994190003804",
        "vn_geburtsdatum":"30.09.1990",
        "vn_vorname":"Yair",
        "vn_nachname":"B*n*i*"
      }, {
        "produkt_gfnr":"1752167994190003805",
        "vn_geburtsdatum":"30.09.1990",
        "vn_vorname":"Yael",
        "vn_nachname":"B*n*i*"
      }]
    }
  },

  components: {
    HelloWorld,
    VermoegensPlan
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
