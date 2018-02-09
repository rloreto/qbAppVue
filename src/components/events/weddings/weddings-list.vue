<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-fixed-position corner="top-right" :offset="[16, 16]" style="z-index: 1000">
        <q-btn push color="orange" >
          {{ selectedYear }}
          <q-popover ref="popover2">
            <q-list link style="min-width: 100px">
              <q-item
                v-for="n in years"
                :key="n"
                @click="showToast(n), $refs.popover2.close()">
                <q-item-main :label="n +''" />
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>
      </q-fixed-position>
      <q-infinite-scroll :handler="refresher" ref="infiniteScroll">
        <q-item v-for="item in weddings" :key="item.id">
          <q-side-link item v-bind:to="'weddings/'+item.id" exact>
            <q-item-main :label="item.name" :sublabel="formatDate(item.date)" label-lines="2" />
          </q-side-link>
        </q-item>
        <div v-show="!isLastPage" class="row justify-center" style="margin-bottom: 50px;">
          <q-spinner-dots slot="message" :size="40" />
        </div>
      </q-infinite-scroll>
      <q-fixed-position corner="bottom-right" :offset="[16, 16]">
        <q-fab
          color="primary"
          active-icon="alarm"
          direction="up"
          class="animate-pop"
        >
          <q-fab-action color="purple" @click="toast('mail')" icon="mail">
            <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Mail</q-tooltip>
          </q-fab-action>
          <q-fab-action color="secondary" @click="toast('alarm')" icon="alarm">
            <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Alarm</q-tooltip>
          </q-fab-action>
        </q-fab>
      </q-fixed-position>
    </div>
  </div>
</template>

<script>
import {
  QInfiniteScroll,
  QChip,
  QSpinnerDots,
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QItemTile,
  QSideLink,
  QFixedPosition,
  QFab,
  QFabAction,
  QTooltip,
  Toast,
  QBtn,
  QPopover,
  date
} from 'quasar'
import { mapGetters } from 'vuex'
export default {
  components: {
    QInfiniteScroll,
    QChip,
    QSpinnerDots,
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile,
    QSideLink,
    QFixedPosition,
    QFab,
    QFabAction,
    QTooltip,
    Toast,
    QBtn,
    QPopover,
    date
  },
  data () {
    return {
      years: [2019, 2018, 2017, 2016, 2015, 2014, 2013]
    }
  },
  methods: {
    refresher (index, done) {
      if (!this.isLastPage) {
        if (!this.isLoading && !this.error) {
          this.$store.dispatch('getWeddings', {
            page: this.currentPage,
            year: this.selectedYear || (new Date()).getFullYear()
          })
        }
      }
      else {
        this.$refs.infiniteScroll.stop()
      }
      done()
    },
    showToast (year) {
      Toast.create('Filtro activo. Año: ' + year)
      this.$store.dispatch('setYear', { year }).then(() => {
        this.$refs.infiniteScroll.reset()
        this.$refs.infiniteScroll.resume()
        this.$refs.infiniteScroll.loadMore()
      })
    },
    formatDate: (dateToFormat) => {
      let timeStamp = new Date(dateToFormat)
      return date.formatDate(timeStamp, 'dddd, DD  MMM  YYYY', {
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      })
    }
  },
  computed: mapGetters({
    weddings: 'weddings',
    isLoading: 'isLoading',
    currentPage: 'currentPage',
    error: 'error',
    selectedYear: 'selectedYear',
    isLastPage: 'isLastPage'
  })
}
</script>
