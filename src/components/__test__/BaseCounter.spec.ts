import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'
import TestComponent from './TestComponent.vue'
import BaseCounter from '../BaseCounter.ce.vue'
import MetricsDisplay from '../MetricsDisplay.ce.vue'
import ControlPanel from '../ControlPanel.ce.vue'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'fr',
  allowComposition: true,
  messages: {
    en,
    fr
  }
})

const wrapperMount = () =>
  mount(TestComponent, {
    global: {
      plugins: [i18n]
    }
  })

const incrementBtn = (wrapper: ReturnType<typeof wrapperMount>) =>
  wrapper.findComponent(BaseCounter).find('.plus')
const decrementBtn = (wrapper: ReturnType<typeof wrapperMount>) =>
  wrapper.findComponent(BaseCounter).find('.minus')
const resetBtn = (wrapper: ReturnType<typeof wrapperMount>) =>
  wrapper.findComponent(ControlPanel).find('.reset')

const metricsValue = (wrapper: ReturnType<typeof wrapperMount>) =>
  wrapper.findComponent(MetricsDisplay).find('.metrics strong').html()

describe('BaseCounter', () => {
  it('Increment check', async () => {
    const wrapper = wrapperMount()

    await incrementBtn(wrapper).trigger('click')
    await incrementBtn(wrapper).trigger('click')

    expect(metricsValue(wrapper)).toContain('2')
  })

  it('Decrement check', async () => {
    const wrapper = wrapperMount()

    await decrementBtn(wrapper).trigger('click')
    await decrementBtn(wrapper).trigger('click')

    expect(metricsValue(wrapper)).toContain('-2')
  })

  it('Reset check', async () => {
    const wrapper = wrapperMount()

    await incrementBtn(wrapper).trigger('click')
    await incrementBtn(wrapper).trigger('click')

    await resetBtn(wrapper).trigger('click')

    expect(metricsValue(wrapper)).toContain('0')
  })
})
