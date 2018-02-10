import Vue from 'vue'
import Vuex from 'vuex'
import { setTask, removeTask } from '@/services/ws.js'
import { getDashboard, getProfile, setProfile } from '@/services/http.js'
 
Vue.use(Vuex);
 
export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      dashboard: {},
      isDashboardLoaded: false,
      reconnectError: false,
    },
    profile: {
      name: '',
      avatar: '',
      email: '',
      isLoaded: false
    }
  },
  actions: {
    LOAD_DASHBOARD: function({ commit, state }) {
      if (state.socket.isDashboardLoaded) return;

      return getDashboard().then((data) => {
        commit('SET_DASHBOARD', data);
      });
    },
    LOAD_PROFILE: function({ commit, state }) {
      if (state.profile.isLoaded) return;

      return getProfile().then((data) => {
        state.profile.isLoaded = true;

        commit('SET_PROFILE', data);
      });
    },
    UPDATE_PROFILE: function({ commit, state }, updatedProfile) {
      return setProfile(updatedProfile).then((data) => {
        commit('SET_PROFILE', data);
      });
    },
    ADD_TASK: function({ commit, state }, uTask) {
        const message = setTask(uTask.taskId, uTask.title, uTask.description, uTask.status);

        commit('SOCKET_MESSAGE', message);
    },
    CHANGE_TASK_STATUS: function({ commit, state }, uTask) {
        const message = setTask(uTask.taskId, uTask.title, uTask.description, uTask.status);

        commit('SOCKET_MESSAGE', message);
    },
    DELETE_TASK_STATUS: function({ commit, state }, taskId) {
        const message = removeTask(taskId);

        commit('SOCKET_MESSAGE', message);
    }
  },
  mutations:{
    SET_PROFILE (state, event) {
      state.profile.name = event.name;
      state.profile.avatar = event.avatar;
      state.profile.email = event.email;
    },
    SET_DASHBOARD (state, event)  {
      state.socket.isDashboardLoaded = true;
      state.socket.dashboard = event;
    },
    SOCKET_OPEN (state, event)  {
      state.socket.isConnected = true
    },
    SOCKET_MESSAGE (state, event)  {
      if (event.type === 'delete') {
        delete state.socket.dashboard[event.taskId];

        state.socket.dashboard = Object.assign({},  state.socket.dashboard);
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