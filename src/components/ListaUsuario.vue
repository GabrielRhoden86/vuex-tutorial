<template>
  <h1>Lista de usuários</h1>
  <span v-for="(nome, i) in nomeSelecionados" :key="i">
    {{ nome }}{{ nomeSelecionados.length > 1 ? ", " : "" }}
  </span>
  <div class="lista">
    <div v-for="item in listaPessoas" :key="item.id">
      <Usuario @selecionado="setUsuarioSelecionado($event)" @removeSelecionado="removeUsuarioSelecionado($event)" :usuario="item"/>
    </div>
  </div>
</template>

<script>
import Usuario from "@/components/Usuario.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Usuario,
  },
  setup() {
    const store = useStore();
    const selecionados = ref([]);
    const listaPessoas = computed(()=>store.state.listaPessoas);
    const nomeSelecionados = computed(() => {
    return selecionados.value.map((x) => `${x.first_name} ${x.last_name}`);
    });
    
    function setUsuarioSelecionado(idUsuario) {
      const usuarioSelecionado = listaPessoas.value.find((x) => x.id == idUsuario);
      selecionados.value = [...selecionados.value, usuarioSelecionado];
    }
    function removeUsuarioSelecionado(idUsuario) {
      selecionados.value = selecionados.value.filter((x) => x.id !== idUsuario);
    }
    return {
      listaPessoas,
      setUsuarioSelecionado,
      removeUsuarioSelecionado,
      nomeSelecionados,
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
}
.lista {
  display: grid;
  margin: 0 20px;
  grid-template-columns: repeat(4, minmax(200px, 400px));
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
