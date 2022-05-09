import Auth from '@/services/auth';
import Axios from '@/utils/axios';

const AuthStore = {
  state: {
    token: localStorage.getItem('token') || null,
    next: null,
  },
  getters: {
    authentified(state) {
      return Boolean(state.token);
    },
  },
  mutations: {
    setToken(state, { token }) {
      if (token) {
        state.token = token;
        localStorage.setItem('token', token);
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    },
    setNext(state, { next }) {
      state.next = next;
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      let data = {
        username,
        password,
      };
      Auth.login({ data }).then((data) => {
        commit({
          type: 'setToken',
          token: data.token,
        });
        commit({
          type: 'setNext',
          next: '/home'
        });
      });
    },
  },
};

export default AuthStore;

