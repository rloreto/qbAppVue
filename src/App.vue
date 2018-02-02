<template>
  <q-layout ref="layout" view="Lhh lpr lFf" reveal>
    <q-toolbar slot="header">
      <q-btn flat v-go-back.single="store.backRoute" class="cordova-only electron-only">
        <q-icon name="arrow_back" />
      </q-btn>
      <q-toolbar-title>
        <q-icon
          v-show="store.icon"
          style="font-size: 2rem; margin-right: 5px;"
          :name="store.icon"
        />
        {{ store.title }}
      </q-toolbar-title>
      <q-btn flat class="within-iframe-hide" @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>

    <q-tabs
      slot="navigation"
      v-if="store.tabs.length > 0"
      :class="{'within-iframe-hide': !store.iframeTabs}"
    >
      <q-route-tab
        v-for="tab in store.tabs"
        :key="tab.hash"
        slot="title"
        :icon="tab.icon"
        :to="`/${store.hash}/${tab.hash}`"
        :label="tab.label"
        exact
        replace
      />
    </q-tabs>

    <q-scroll-area
      slot="left"
      style="width: 100%; height: 100%;"
      class="bg-grey-3"
    >
      <div class="row flex-center bg-white" style="width: 100%; height: 100px;">
        <img src="~assets/qb_logo.svg" style="height: 75px; width 75px;"/>
        <div style="margin-left: 15px">v0.1</div>
      </div>
      <q-list no-border>
        <q-side-link
          item
          to="/showcase"
          exact
          replace
        >
          <q-item-side icon="home" />
          <q-item-main label="Home" />
          <q-item-side right icon="chevron_right" />
        </q-side-link>
        <q-item-separator />
        <template v-for="category in categories">
          <q-list-header :key="category.hash">
            {{ category.title }}
          </q-list-header>
          <q-side-link
            item
            v-for="feature in category.features"
            :key="feature.hash"
            :to="`/${category.hash}/${feature.hash}`"
            replace
          >
            <q-item-side :icon="feature.icon" />
            <q-item-main :label="feature.title" />
            <q-item-side right icon="chevron_right" />
          </q-side-link>
          <q-item-separator :key="'separator-'+category.hash"/>
        </template>
        <q-item-separator />
         <q-side-link
          item
          to="/logout"
          replace
        >
          <q-item-side icon="exit to app"/>
          <q-item-main label="Cerrar sesión" />
        </q-side-link>
      </q-list>
    </q-scroll-area>

    <router-view />
  </q-layout>
</template>

<script>
import store from './main-store'
import categories from './categories'
import {
  QScrollArea,
  QList,
  QSideLink,
  QListHeader,
  QItemSide,
  QItemMain,
  QItemSeparator,
  QBtn,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QIcon,
  QTabs,
  QRouteTab,
  GoBack
} from 'quasar'
export default {
  components: {
    QScrollArea,
    QList,
    QSideLink,
    QListHeader,
    QItemSide,
    QItemMain,
    QItemSeparator,
    QBtn,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QIcon,
    QTabs,
    QRouteTab
  },
  directives: {
    GoBack
  },
  data () {
    return {
      categories,
      store: store.state
    }
  },
  methods: {
    logout (e, done) {
      this.$store.dispatch('logout').then(() => {
        this.$router.replace('/login')
      })
    }
  }
}
</script>
