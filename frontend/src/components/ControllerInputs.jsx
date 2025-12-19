import '../css/controller-inputs.css'

function ControllerInputs(props) {
  const { icon: Icon, onPress} = props

  return (
    <button
      onMouseDown={onPress}
      className='controller-input-button'
    >
      <Icon size={24} />
    </button>
  )
}

export default ControllerInputs