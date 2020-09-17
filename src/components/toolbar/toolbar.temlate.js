function toButton(button) {
  const meta = `
  data-type="button"
  data-value='${JSON.stringify(button.value)}'
  `
  return `
  <div class="button ${button.active ? 'active':''}"
  ${meta}
  >
  <span 
  ${meta}
  class="material-icons"
  >${button.icon}</span>
  </div>
  `
}

export function createToolbar(state) {
  console.log('render');
  const buttons = [
    {
      icon: 'format_align_left',
      active: state['textAlign'] === 'left',
      value: {textAlign: state['textAlign'] === 'left' ? 'right' : 'left'},
    },
    {
      icon: 'format_align_justify',
      active: state['textAlign'] === 'center',
      value: {textAlign: state['textAlign'] === 'center' ? 'left' : 'center'},
    },
    {
      icon: 'format_align_right',
      active: state['textAlign'] === 'right',
      value: {textAlign: state['textAlign'] === 'right' ? 'left' : 'right'},
    },
    {
      icon: 'format_bold',
      active: state['fontWeight'] === 'bold',
      value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'},
    },
    {
      icon: 'format_italic',
      active: state['fontStyle'] === 'italic',
      value: {fontStyle: state['fontStyle'] === 'italic' ? 'nolmal' : 'italic'},
    },
    {
      icon: 'format_underlined',
      active: state['textDecoration'] === 'underline',
      value: {textDecoration: state['textDecoration'] ===
      'underline' ? 'normal' : 'underline'},
    },
  ]
  return buttons.map(toButton).join('')
}