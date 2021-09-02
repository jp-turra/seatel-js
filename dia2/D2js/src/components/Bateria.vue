<template>
  <div class="full-width row bateria">
      <div class="round" :style="nivelBateria"></div>
  </div>
</template>

<script>
export default {
    name: 'Bateria',
    props: ['bateria'],
    computed: {
        nivelBateria() {
            const num = Number.parseInt(this.bateria)
            console.log("component", num)
            return `
                background-color: pink;
                width: `+num+`%;
            `
        }
    }
}
</script>

<style>
.bateria {
    border: 1px solid black;
    border-radius: 10px;
    height: 100px;
}
.round {
    border-radius: 10px;
}
</style>