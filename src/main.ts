import './assets/main.css'

import { createApp } from 'vue'
import {
  I18nHostElement,
  LocalePickerElement,
  BaseCounterElement,
  MetricsDisplayElement,
  ControlPanelElement
} from './components'
import App from './App.vue'
import './index.css'

customElements.define('i18n-host', I18nHostElement)
customElements.define('locale-picker', LocalePickerElement)
customElements.define('base-counter', BaseCounterElement)
customElements.define('metrics-display', MetricsDisplayElement)
customElements.define('control-panel', ControlPanelElement)

createApp(App).mount('#app')
