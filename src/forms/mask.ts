export default () => {
  return document
    .querySelectorAll<HTMLInputElement>('[data-mask="phone"]')
    // Continue a máscara aqui 👇
    
    .forEach((input) => {
      input.onfocus = (ev) =>{
        console.log('Foco')
      }

      input.onblur = (ev) =>{
        console.log('Blur')
      }

      input.oninput = (ev) =>{
        console.log(input.value)
      }

    })

}
