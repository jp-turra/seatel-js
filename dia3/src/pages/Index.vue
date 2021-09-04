<template>
  <q-page class="text-center full-width">
    <div v-if="!dispositivo.conectado">
      <div v-if="bluetoothOn && resultado">
        <div v-for="(item, index) in resultado" :key="index" @click="selecionarDisp(item)">
          <span>Nome: {{item.name}}</span> <br/>
          <span>id: {{item.id}}</span>
        </div>
      </div>
      <div class="q-mt-sm">
        <q-btn color="primary" icon="check" label="Verificar" @click="verificarBt()" />
      </div>
    </div>
    <div v-else-if="dispositivo.conectado">
      <div>
        <span>Nome: {{dispositivo.name}}</span>
        <span>ID: {{dispositivo.id}}</span>
        <span>rssi: {{dispositivo.rssi}}</span>
      </div>
      <div>
        <q-input v-model="dispositivo.carac" type="text" label="Caracteristica a escrever" />
        <q-input v-model="dispositivo.servico" type="text" label="Serviço a escrever" />
        <q-input v-model="dispositivo.mensagem" type="text" label="Mensagem" />
        <q-btn color="green" label="Enviar" @click="enviarMensagem()" />
      </div>
      <div>
        <q-btn color="red" label="Desconectar" @click="desconectar()" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { Notify } from 'quasar'

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      resultado: '',
      bluetoothOn:  false,
      dispositivo: {conectado: false}
    }
  },
  methods: {
    async verificarBt() {
      const res = await this.verificarRequisitosBlueooth()
      this.bluetoothOn = res
      if (!res) {
        Notify.create({
          message: 'Bluetooth inativo',
          type: 'warning'
        })
      }
    },
    async pesquisar() {
      if (this.bluetoothOn) {
        const resposta = await this.procurarDispositivo()
        if (reposta && resposta.length > 0) this.resultado = resposta
        else {
          Notify.create({
            message: 'Falha ao procurar',
            type: 'warning'
          })
        }
      }
    },
    async selecionarDisp(dispositivo) {
      if (this.bletoothOn) {
        const res = await this.conectarDispositivo(dispositivo)
        if (!res) {
          Notify.create({
            message: 'Falha ao conectar',
            type: 'warning'
          })
        }else {
          this.dispositivo = {
            conectado: true,
            ...dispositivo
          }
        }
      }
    },
    async desconectar() {
      await this.desconectar(this.dispositivo)
    }
  },
  async enviarMensagem() {
    const res = await  this.enviarTexto(this.dispositivo.mensagem, this.dispositivo ,this.dispositivo.carac, this.dispositivo.servico)
  }
})
</script>
