import { io } from 'socket.io-client'

const signalingServer = process.env.REACT_APP_SERVER_IP

// let signalingSocket = io(signalingServer, {
//     withCredentials: true,
//     extraHeaders: {
//       'my-custom-header': 'webrtcSocketFromClient',
//     },
//   })

  const initialState = {
    // signalingSocket: signalingSocket,
  }

  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
  
      default:
        return state
    }
  }