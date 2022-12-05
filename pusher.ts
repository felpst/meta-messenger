import Pusher from 'pusher'
import ClientPusher from 'pusher-js'

export const serverPusher = new Pusher({
  appId: '',
  key: '',
  secret: '',
  cluster: '',
  useTLS: true,
})

export const clientPusher = new ClientPusher('', {
  cluster: '',
  forceTLS: true,
})
