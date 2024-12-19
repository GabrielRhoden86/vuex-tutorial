## Vuex é responsável por gerenciar os estados dos dados por meio do "store" que  funciona como um coração da aplicação

## 1 - npm install vuex@next

## 2 - implmente em: src\store\index.js
encarregado de exportar o objeto store para outros componentes

## 3 - implmente em: src\main.js
conect o store a aplicação

## 4 -  em src\store\index.js
no objeto 'createStore' coloque o dados em 'state'

## 5 - implemente o store: src\components\ListaUsuario.vue para obter os dados
import { useStore } from "vuex";
const store = useStore();
const listaPessoas = computed(()=>store.state.listaPessoas);

## 6 - mutations modificar o estado da store de forma síncrona:~
Para alterar o state(dados) no vuex é necessário aplicar os mutations
O erro  as propriedades 'readonly' computadas (computed) em Vue.js são somente leitura. 
Isso significa que você não pode modificar diretamente o valor de listaFavoritos dentro da função removeFavorito.
Para resolver esse problema, você deve disparar uma ação ou uma mutação no Vuex para atualizar o estado.
 em src\store\index.js implmente mutations 'REMOVE_FAVORITO'.  Chame a mutations em src\views\Favoritos.vue 'removeFavorito'

## 7 - aplicar mudança de estado para que o item do componente(favorito) tenha o mesmo estados em todas as páginas
 