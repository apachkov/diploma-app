import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex);
 
export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      dashboard: {},
      reconnectError: false,
    }
  },
  mutations:{
    SET_DASHBOARD (state, event)  {
      state.socket.dashboard = event;
    },
    SOCKET_OPEN (state, event)  {
      state.socket.isConnected = true
    },
    SOCKET_MESSAGE (state, event)  {
      if (event.type === 'delete') {
        delete state.socket.dashboard[event.taskId];

        state.socket.dashboard = { ...state.socket.dashboard };
      }

      if (event.type === 'upsert') {
        state.socket.dashboard = {
          ...state.socket.dashboard,
          [event.taskId]: event
        };
      }

      if (event.type === 'error') {
        console.warn(event);
      }      
    },
    SOCKET_ONCLOSE (state, event)  {
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event)  {
      console.error(state, event)
    }
  }
})