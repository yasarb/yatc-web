/* eslint-disable */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth';
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://192.168.99.100:8080/',
});

const state = {
  token: localStorage.getItem('access-token') || '',
  status: '',
  hasLoadedOnce: false,
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
};

const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
    return http
      .post('auth/signin', user)
      .then(resp => {
        const token = resp.data.accessToken;

        if (token) {
          localStorage.setItem('access-token', token);
          axios.defaults.headers.common['Authorization'] = 'Bearer '.token;
          commit(AUTH_SUCCESS, token);
          // dispatch(USER_REQUEST)
        }
      })
      .catch(error => {
        commit(AUTH_ERROR, error);
        localStorage.removeItem('access-token');
      });
  },
  [AUTH_LOGOUT]: ({ commit, dispatch }) => {
    return http
      .post('auth/signout')
      .then(resp => {
        commit(AUTH_LOGOUT);
        localStorage.removeItem('access-token');
      })
      .catch(err => {
        commit(AUTH_ERROR, error);
        // localStorage.removeItem('access-token');
      });
  },
};

const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = 'loading';
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = 'success';
    state.token = token;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: state => {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: state => {
    state.token = '';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
/* eslint-enable */
