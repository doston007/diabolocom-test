import { defineCustomElement } from 'vue'
import I18nHost from './I18nHost.ce.vue'
import LocalePicker from './LocalePicker.ce.vue'
import BaseCounter from './BaseCounter.ce.vue'
import MetricsDisplay from './MetricsDisplay.ce.vue'
import ControlPanel from './ControlPanel.ce.vue'

const I18nHostElement = defineCustomElement(I18nHost)
const LocalePickerElement = defineCustomElement(LocalePicker)
const BaseCounterElement = defineCustomElement(BaseCounter)
const MetricsDisplayElement = defineCustomElement(MetricsDisplay)
const ControlPanelElement = defineCustomElement(ControlPanel)

const registerCustomElements = () => {
  customElements.define('i18n-host', I18nHostElement)
  customElements.define('locale-picker', LocalePickerElement)
  customElements.define('base-counter', BaseCounterElement)
  customElements.define('metrics-display', MetricsDisplayElement)
  customElements.define('control-panel', ControlPanelElement)
}

export {
  I18nHostElement,
  LocalePickerElement,
  BaseCounterElement,
  MetricsDisplayElement,
  ControlPanelElement
}

export default registerCustomElements
