Vue.component('vermoegensplan', {
  template: '#vermoegensplan-template',
  props: {
    vp: Object,
    index: Number,
    prev_vn_nachname: String
  }
});

var app = new Vue({ 
    el: '#vermoegensplaene-stage',

    data: {
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
        "produkt_gfnr":"17521679941900038",
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
});
