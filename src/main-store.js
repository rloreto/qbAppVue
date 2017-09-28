export default {
  state: {
    backRoute: '/',
    hash: '',
    icon: '',
    iframeTabs: false,
    title: 'QuieroBesarte App',
    tabs: []
  },
  set (newState) {
    this.state.title = newState.title || ''
    this.state.hash = newState.hash || ''
    this.state.icon = newState.icon || ''
    this.state.iframeTabs = newState.iframeTabs || false
    this.state.backRoute = newState.backRoute || '/'
    this.state.tabs = newState.tabs || []
  }
}
