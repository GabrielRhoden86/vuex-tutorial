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
