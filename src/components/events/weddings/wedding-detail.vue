<template>
  <div class="layout-padding row justify-center" v-if="currentWedding">
    <div style="width: 500px; max-width: 90vw;">
      <q-list>
        <q-collapsible group="somegroup" icon="explore" label="Datos generales" opened>
          <div>
              <q-input :value="currentWedding.name" @input="debounceUpdateProperty('name', $event)" @blur="updateProperty('name', $event)" float-label="Nombre" />
              <q-datetime :value="currentWedding.date" @change="updateProperty('date', $event)" format="DD-MM-YYYY"  :month-names="monthNames" :day-names='daysNames' type="date" />
              <q-input :value="currentWedding.place" @input="debounceUpdateProperty('place', $event)" @blur="updateProperty('place',$event)" float-label="Lugar" />
              <q-input :value="currentWedding.email" @input="debounceUpdateProperty('email', $event)" @blur="updateProperty('email',$event)" float-label="Email" />
              <q-input :value="currentWedding.deposit" @input="debounceUpdateProperty('deposit',$event)" @blur="updateProperty('deposit',$event)" type="number" float-label="Depósito" prefix="€" suffix="EUR" />
              <q-input :value="currentWedding.total" @input="debounceUpdateProperty('total', $event)" @blur="updateProperty('total',$event)" type="number" float-label="Cantidad pactada" prefix="€" suffix="EUR" />
           </div>
        </q-collapsible>
        <q-collapsible group="bride" icon="face" label="Novia">
          <q-checkbox :value="currentWedding.brideHomeFilm" @input="updateProperty('brideHomeFilm', $event)" label="¿Se filma a la novia?" />
          <div v-show="currentWedding.brideHomeFilm">
            <q-input :value="currentWedding.brideName" @input="debounceUpdateProperty('brideName', $event)" @blur="updateProperty('brideName',$event)" float-label="Nombre" />
            <q-input :value="currentWedding.brideDressedUpPlace" @input="debounceUpdateProperty('brideDressedUpPlace', $event)" @blur="updateProperty('brideDressedUpPlace',$event)" float-label="Lugar" />
            <q-datetime :value="currentWedding.brideDressedUpTime" @change="updateProperty('brideDressedUpTime', $event)" :format24h="true" :month-names="monthNames" :day-names='daysNames'  type="time" />
            <q-input :value="currentWedding.brideMobile" @input="debounceUpdateProperty('brideMobile', $event)" @blur="updateProperty('brideMobile',$event)" float-label="Telefono" />
            <q-input :value="currentWedding.brideDressedUpNotes" @input="debounceUpdateProperty('brideDressedUpNotes', $event)" @blur="updateProperty('brideDressedUpNotes',$event)" float-label="Notas" :min-rows="5"  type="textarea" />
          </div>
        </q-collapsible>
        <q-collapsible group="groom" icon="perm_identity" label="Novio">
        <div>
          <q-checkbox :value="currentWedding.groomHomeFilm" @input="updateProperty('groomHomeFilm', $event)" label="¿Se filma al novio?" />
          <div v-show="currentWedding.groomHomeFilm">
            <q-input :value="currentWedding.groomName" @input="debounceUpdateProperty('groomName', $event)" @blur="updateProperty('groomName',$event)" float-label="Nombre" />
            <q-input :value="currentWedding.groomDressedUpPlace" @input="debounceUpdateProperty('groomDressedUpPlace', $event)" @blur="updateProperty('groomDressedUpPlace',$event)" float-label="Lugar" />
            <q-datetime :value="currentWedding.groomDressedUpTime" @change="updateProperty('groomDressedUpTime', $event)" :format24h="true" :month-names="monthNames" :day-names='daysNames'  type="time" />
            <q-input :value="currentWedding.groomMobile" @input="debounceUpdateProperty('groomMobile', $event)" @blur="updateProperty('groomMobile',$event)" float-label="Telefono" />
            <q-input :value="currentWedding.groomDressedUpNotes" @input="debounceUpdateProperty('groomDressedUpNotes', $event)" @blur="updateProperty('groomDressedUpNotes',$event)" float-label="Notas" :min-rows="5"  type="textarea" />
          </div>
        </div>
        </q-collapsible>
        <q-collapsible group="ceremoy" icon="local_see" label="Ceremonia">
          <q-input :value="currentWedding.ceremonyPlace" @input="debounceUpdateProperty('ceremonyPlace', $event)" @blur="updateProperty('ceremonyPlace',$event)" float-label="Lugar de la ceremonia" />
          <q-datetime :value="currentWedding.ceremonyTime" @change="updateProperty('ceremonyTime', $event)" :format24h="true" :month-names="monthNames" :day-names='daysNames'  type="time" />
          <q-input :value="currentWedding.ceremonyNotes" @input="debounceUpdateProperty('ceremonyNotes', $event)" @blur="updateProperty('ceremonyNotes',$event)" float-label="Notas" :min-rows="5"  type="textarea" />
        </q-collapsible>
        <q-collapsible group="celebration" icon="local_bar" label="Celebración">
          <q-input :value="currentWedding.celebrationPlace" @input="debounceUpdateProperty('celebrationPlace', $event)" @blur="updateProperty('celebrationPlace',$event)" float-label="Lugar de la ceremonia" />
          <q-datetime :value="currentWedding.celebrationTime" @change="updateProperty('celebrationTime', $event)" :format24h="true" :month-names="monthNames" :day-names='daysNames'  type="time" />
          <q-input :value="currentWedding.celebrationNotes" @input="debounceUpdateProperty('celebrationNotes', $event)" @blur="updateProperty('celebrationNotes',$event)" float-label="Notas" :min-rows="5"  type="textarea" />
        </q-collapsible>
        <q-collapsible group="somegroup" icon="attach_file" label="Documentos">
          <div>
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
           </div>
        </q-collapsible>
        <q-collapsible group="somegroup" icon="email" label="Entrega">
          <div>
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
           </div>
        </q-collapsible>
        <q-item>
          <q-input :value="currentWedding.additionalInfo" @input="debounceUpdateProperty('additionalInfo', $event)" @blur="updateProperty('additionalInfo',$event)" float-label="Notas" :min-rows="5"  type="textarea" />
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import {
  QCard,
  QCardTitle,
  QCardMedia,
  QCardActions,
  QCardSeparator,
  QCardMain,
  QList,
  QItem,
  QItemMain,
  QItemSide,
  QItemTile,
  QCollapsible,
  QBtn,
  QChip,
  QInput,
  QDatetime,
  QToggle,
  QCheckbox
} from 'quasar'
import { mapGetters } from 'vuex'
export default {
  components: {
    QCard,
    QCardTitle,
    QCardMedia,
    QCardActions,
    QCardSeparator,
    QCardMain,
    QList,
    QItem,
    QItemMain,
    QItemSide,
    QItemTile,
    QCollapsible,
    QBtn,
    QChip,
    QInput,
    QDatetime,
    QToggle,
    QCheckbox
  },
  data () {
    return {
      counter: 0,
      daysNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    }
  },
  methods: {
    updateProperty (propertyName, value) {
      if (value.target) {
        value = value.target.value
      }
      if (!this.isLoading) {
        this.$store.dispatch('updateWedding', {id: this.currentWedding.id, data: {propertyName, value}})
      }
    },
    debounceUpdateProperty: _.debounce(function (propertyName, value) {
      if (!this.isLoading) {
        this.$store.dispatch('updateWedding', {id: this.currentWedding.id, data: {propertyName, value}})
      }
    }, 1000)
  },
  computed: mapGetters({
    currentWedding: 'currentWedding',
    isLoading: 'isLoading'
  }),
  /* watch: {
    currentWedding: function (oldWedding, newWedding) {
      console.log(newWedding)
    }
  }, */
  beforeCreate () {
    if (this.$route.params.id) {
      this.$store.dispatch('getWedding', this.$route.params.id)
    }
  }
}
</script>
