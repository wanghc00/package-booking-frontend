import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packageInfo:{
      billNo:"",
      receivePerson:"",
      telephone:"",
      packageWeight:"",
    }

  },
  mutations: {

  },
  actions: {
    inStorage(context,packageInfo){
      axios.post('http://localhost:8080/packages', packageInfo)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    subscribePackage(context,data){
      axios.post('http://localhost:8080/subscribePackage', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
})
