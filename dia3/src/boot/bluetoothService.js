import ble from "app/src-cordova/plugins/cordova-plugin-ble-central/www/ble";

export default ({ app, store }) => {
  app.mixin({
    methods: {
      verificarRequisitosBlueooth() {
        console.log("teste");
        return new Promise((resolve, reject) => {
          ble.isEnabled(
            (success) => {
              resolve(true);
            },
            (failure) => {
              resolve(false);
            }
          );
        });
      },
      procurarDispositivo(referencia, timeout) {
        if (!timeout) timeout = 10000;
        return new Promise((resolve, reject) => {
          const listaDips = [];
          ble.scan(
            "",
            timeout,
            (success) => {
              if (success && referencia) {
                const incluiNome = success.name
                  .toString()
                  .includes(referencia, 0);
                const incluiMAC = success.id.toString().includes(referencia, 0);

                if (incluiNome || incluiMAC) listaDips.push(success);
              } else if (success) listaDips.push(success);
            },
            (failure) => {
              reject(false);
            }
          );
          setTimeout(() => {
            resolve(listaDips);
          }, timeout);
        });
      },
      conectarDispositivo(dispositivo) {
        return new Promise((resolve, reject) => {
          ble.connect(
            dispositivo.id,
            (sucesso) => {
              resolve(true);
            },
            (falha) => {
              reject(false);
            }
          );
        });
      },
      desconectar(dispositivo) {
        return new Promise((resolve, reject) => {
          ble.disconnect(
            dispositivo.id,
            (sucesso) => {
              resolve(sucesso);
            },
            (falha) => {
              reject(falha);
            }
          );
        });
      },
      enviarTexto(mensagem, dispositivo, caract, service_uuid) {
        return new Promise((resolve, reject) => {
          ble.write(
            dispositivo.id,
            service_uuid,
            caract,
            mensagem,
            (sucesso) => {
              resolve(sucesso);
            },
            (falha) => {
              reject(falha);
            }
          );
        });
      },
    },
  });
};
