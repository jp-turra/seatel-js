export function setTelefone(context, telefone) {
  context.commit("setVariavel", telefone.toString().replace(" ", ""));
}
