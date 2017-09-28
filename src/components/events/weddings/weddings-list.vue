<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-infinite-scroll :handler="refresher">
        <q-item v-for="(item, index) in weddings">
          <q-side-link item v-bind:to="'weddings/'+item.id" exact>
            <q-item-main v-bind:label="item.name" label-lines="1" />
            <q-item-main>
              <q-item-tile label>
                Detail
              </q-item-tile>
            </q-item-main>
          </q-side-link>
        </q-item>
        <div class="row justify-center" style="margin-bottom: 50px;">
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
  QTooltip
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
    QTooltip
  },
  methods: {
    refresher (index, done) {
      if (!this.isLoading && !this.error) {
        this.$store.dispatch('getWeddings', {page: this.currentPage})
      }
      done()
    }
  },
  computed: mapGetters({
    weddings: 'weddings',
    isLoading: 'isLoading',
    currentPage: 'currentPage',
    error: 'error'
  }),
  created () {
  }

}
</script>
