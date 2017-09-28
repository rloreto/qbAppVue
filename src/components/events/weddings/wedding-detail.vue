<template>
  <div class="layout-padding row justify-center" v-show="currentWedding">
    <div style="width: 500px; max-width: 90vw;">
      <q-list>
        <q-collapsible group="somegroup" icon="explore" label="Datos generales" opened>
          <div>
              <q-input v-model="currentWedding.name" float-label="Nombre" />
              <q-input v-model="currentWedding.name" float-label="Nombre" />
              <q-input v-model="currentWedding.name" float-label="Nombre" />
              <q-input v-model="currentWedding.name" float-label="Nombre" />
           </div>
        </q-collapsible>
        <q-collapsible group="somegroup" icon="perm_identity" label="Novio">
        <div>
          <q-input v-model="currentWedding.name" float-label="Nombre" />
          <q-input v-model="currentWedding.name" float-label="Nombre" />
          <q-input v-model="currentWedding.name" float-label="Nombre" />
          <q-input v-model="currentWedding.name" float-label="Nombre" />
           </div>
        </q-collapsible>
        <q-collapsible group="somegroup" icon="face" label="Novia">
          <div>
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
           </div>
        </q-collapsible>
        <q-collapsible group="somegroup" icon="local_see" label="Ceremonia">
          <div>
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
           </div>
        </q-collapsible>
        <q-collapsible group="somegroup" icon="local_bar" label="Celebración">
          <div>
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
            <q-input v-model="currentWedding.name" float-label="Nombre" />
           </div>
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
      </q-list>

      <p class="caption">Using @open and @close events</p>
      <q-list>
        <q-collapsible
          @open="counterStart"
          @close="counterStop"
          icon="explore"
          label="Counter"
        >
          <div>Will only count when opened, using the @open and @close events to control count timer.</div>
          <q-chip style="margin-top: 15px">Counter: {{counter}}</q-chip>
        </q-collapsible>
      </q-list>


      <p class="caption">Ubiquity. Using Cards as content.</p>
      <q-list separator>
        <q-collapsible icon="explore" label="First Card">
          <q-card color="primary">
            <q-card-title>
              Card Title
            </q-card-title>
            <q-card-main>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </q-card-main>
          </q-card>
        </q-collapsible>
        <q-collapsible icon="perm_identity" label="Second Card">
          <q-card>
            <q-card-media>
              <img src="~assets/mountains.jpg">
            </q-card-media>
            <q-card-main>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </q-card-main>
          </q-card>
        </q-collapsible>
        <q-collapsible icon="shopping_cart" label="Third Card">
          <q-card>
            <q-card-media>
              <img src="~assets/map.png">
            </q-card-media>
            <q-card-main>
              <q-item>
                <q-item-side icon="local_bar" />
                <q-item-main>
                  <q-item-tile label>Bar XYZ</q-item-tile>
                  <q-item-tile sublabel>Have a drink.</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side icon="local_gas_station" />
                <q-item-main>
                  <q-item-tile label>Gas Station</q-item-tile>
                  <q-item-tile sublabel>Fill your gas tank.</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side icon="local_movies" />
                <q-item-main>
                  <q-item-tile label>Cinema XYZ</q-item-tile>
                  <q-item-tile sublabel>Watch a movie.</q-item-tile>
                </q-item-main>
              </q-item>
            </q-card-main>
            <q-card-actions class="group">
              <div class="text-lime">
                13 minutes
              </div>
              <div>
                (1 mile)
              </div>
              <div class="col"></div>
              <q-btn flat color="primary" small icon="directions">
                Start
              </q-btn>
            </q-card-actions>
          </q-card>
        </q-collapsible>
      </q-list>
    </div>
  </div>
</template>

<script>
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
  QInput
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
    QInput
  },
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    counterStart () {
      this.timer = setInterval(() => {
        this.counter++
      }, 1000)
    },
    counterStop () {
      clearInterval(this.timer)
    }
  },
  computed: mapGetters({
    currentWedding: 'currentWedding'
  }),
  beforeCreate () {
    if (this.$route.params.id) {
      this.$store.dispatch('getWedding', this.$route.params.id)
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
