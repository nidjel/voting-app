import Server from 'socket.io'

export function startServer(store) {
  const io = new Server().attach(3001)
  
  store.subscribe(() => io.emit('state', store.getState()))
  
  io.on('connection', (client) => {
    console.log('new client was connected')
    
    client.emit('state', store.getState())
    client.on('action', store.dispatch.bind(store))
  })
}