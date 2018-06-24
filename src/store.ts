import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const exploracion = {
  namespaced: true,
  state: {
    periodoDesde : '',
    periodoHasta : '',
    periodoAnual : '',
  },
  mutations: {
    setPeriodoDesde(state: any, newPeriodo: string) {
      state.periodoDesde = newPeriodo;
    },
    setPeriodoHasta(state: any, newPeriodo: string) {
      state.periodoHasta = newPeriodo;
    },
    setPeriodoAnio(state: any, newPeriodo: string) {
      state.periodoAnual = newPeriodo;
    },
  },
  actions: {

  },
};

export default new Vuex.Store({
  modules: {
    exploracion,
  },
});
