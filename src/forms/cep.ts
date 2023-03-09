export const cep = () => {
  const input = document.querySelector<HTMLInputElement>('#cep')
  const output = document.querySelector('output')
  const form = document.querySelector('form')

  if (input && form) {
    input.oninput = () => {
      // pegando o que está informado no campo de cep e aparecendo no console quando o foco sair do campo - COMENTEI PQ NÃO ESTÁ SANDO AGR
      //console.log(input.value);

      // O D siginifica NÃO numérico - aqui ele está fazendo um raplace em todos os dígitos não numéricos por vazio
      const removeLetras = /\D/g
      // Máscara para o formatar o CEP no campo quando a pessoa digitar o cep
      const formataCep = /(\d{5})(\d{3})/

      input.value = input.value
        .replace(removeLetras, '')
        .replace(formataCep, '$1-$2')
    }

    input.onblur = () => {
      const cep = input.value

      if (cep.length === 9 && cep.indexOf('-') === 5) {
        const api = `https://brasilapi.com.br/api/cep/v1/${input.value}`
        fetch(api)
          .then((response) => response.json())
          .then((data) => {
            if (data.cep) {
              Object.keys(data).forEach((name) => {
                if (form[name]){
                    form[name].value = data[name]
                }
              })
              
            } else {
              input.style.border = '1px solid red'
              output.innerText = data.message
            }
          })
      }
    }
  }
}
