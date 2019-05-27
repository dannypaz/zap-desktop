import createIpc from 'redux-electron-ipc'
import { initApp, terminateApp } from './app'
import { killNeutrino } from './neutrino'
import { receiveLocale } from './locale'
import { bitcoinPaymentUri, lightningPaymentUri } from './pay'
import { lndconnectUri } from './onboarding'

const ipc = createIpc({
  initApp,
  terminateApp,
  killNeutrino,
  receiveLocale,
  bitcoinPaymentUri,
  lightningPaymentUri,
  lndconnectUri,
})

export default ipc