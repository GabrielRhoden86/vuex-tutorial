import {createStore} from 'vuex';

const store = createStore({
    state: {        //state representa o 'estado' de determinado item
        listaPessoas: [ 
            {
              id: 7,
              email: "michael.lawson@reqres.in",
              first_name: "Michael",
              last_name: "Lawson",
              avatar: "https://reqres.in/img/faces/7-image.jpg",
            },
            {
              id: 8,
              email: "lindsay.ferguson@reqres.in",
              first_name: "Lindsay",
              last_name: "Ferguson",
              avatar: "https://reqres.in/img/faces/8-image.jpg",
            },
            {
              id: 9,
              email: "tobias.funke@reqres.in",
              first_name: "Tobias",
              last_name: "Funke",
              avatar: "https://reqres.in/img/faces/9-image.jpg",
            },
            {
              id: 10,
              email: "byron.fields@reqres.in",
              first_name: "Byron",
              last_name: "Fields",
              avatar: "https://reqres.in/img/faces/10-image.jpg",
            },
            {
              id: 11,
              email: "rachel.howell@reqres.in",
              first_name: "Rachel",
              last_name: "Howell",
              avatar: "https://reqres.in/img/faces/12-image.jpg"
              }
          ],
          listaFavoritos: [
            {
              id: 9,
              email: "tobias.funke@reqres.in",
              first_name: "Tobias",
              last_name: "Funke",
              avatar: "https://reqres.in/img/faces/9-image.jpg",
            },
            {
              id: 8,
              email: "lindsay.ferguson@reqres.in",
              first_name: "Lindsay",
              last_name: "Ferguson",
              avatar: "https://reqres.in/img/faces/8-image.jpg",
            },
            {
              id: 11,
              email: "rachel.howell@reqres.in",
              first_name: "Rachel",
              last_name: "Howell",
              avatar: "https://reqres.in/img/faces/12-image.jpg"
              }
          ]
        },  // Armazena o estado global
    getters: {
      totalFavoritos(state){
          return state.listaFavoritos.length;
      },

      // isFavorito: (state)=>(id) {
      //   return state.listaFavoritos.some(x=>x.id === id)
      // }

    }, // Retorna estados processados
    mutations: {
      REMOVE_FAVORITO(state, idUsuario) {
        state.listaFavoritos = state.listaFavoritos.filter(
          (x) => x.id !== idUsuario
        );
      }
    }, // Altera o estado de forma síncrona
    actions: {} // Lida com lógica assíncrona e chama mutations
})

export default store