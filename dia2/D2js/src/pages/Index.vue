<template>
  <q-page class="column text-center">
    <div>
      <img
        alt="Quasar logo"
        :src="carregarImagem"
        style="width: 200px; height: 200px"
      >
    </div>
    <br/>
    <div class="full-width">
      <div v-for="(item, index) in listaEquipamentos" :key="index">
        Nome: {{item.nome}}
        <span v-if="item.bateria < 50"> Alerta! Bateria quase baixa.</span>
        <bateria :bateria="item.bateria" />
      </div>
    </div>
    <!--  <div class="q-my-md">
      <q-input v-model="telefone" type="text" label="Label" />
      <br/>
      Telefone Computed: {{telefoneCorrigido}}
      <br/>
      Telefone methods: {{telefoneCorrigidoMethods()}}
    </div>
    <br/> -->
    <div>
      <q-btn color="primary" icon="check" v-bind:label="comando" @click="alterarBateria()" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Bateria from '../components/Bateria.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    "Bateria":Bateria
  },
  created() {
    this.carregarLista()
  },
  data() {
    return {
      mensagem: 'Texto Padrão',
      bateria: 0,
      comando: 'Alterar Bateria',
      telefone: '123',
      imagem: 'http://www.inovacao.ufpr.br/portal/wp-content/uploads/2021/04/banner_site-1.png',
      listaEquipamentos: []
    }
  },
  computed: {
    telefoneCorrigido() {
      const retorno = this.telefone.replaceAll(' ', '')
      return retorno
    },
    carregarImagem() {
      return ``+this.imagem+``
    },
    carregarBateria() {
      return this.bateria
    }
  },
  methods: {
    alterarImagem() {
      const imagens = ['http://www.inovacao.ufpr.br/portal/wp-content/uploads/2019/05/SEATEL-768x292.png', 'http://www.inovacao.ufpr.br/portal/wp-content/uploads/2021/04/banner_site-1.png']
      let random = Math.random()*(imagens.length-1)
      random = random.toFixed(0)
      console.log(random)
      const selecionada = imagens[random]
      this.imagem = selecionada
    },
    alterarBateria() {
      /* let random = Math.random()*100
      random = random.toFixed(2)
      console.log(random)
      this.bateria = random */

      console.log(this.$store.getters.getVariavel)
      this.$store.commit('setVariavel', '414141414141')
    },
    telefoneCorrigidoMethods() {
      const retorno = this.telefone.replaceAll(' ', '')
      return retorno
    },
    carregarImagem2() {
      return ``+this.imagem+``
    },
    carregarLista() {
      for (let index = 0; index < 5; index++) {
        let random = Math.random()*100
        random = random.toFixed(2)
        let equipamento = { nome: 'Qualquer'+index, bateria: random}
        this.listaEquipamentos.push(equipamento)
      }
    }
  },
})
</script>

<style>

</style>
