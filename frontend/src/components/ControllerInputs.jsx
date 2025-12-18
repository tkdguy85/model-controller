function ControllerInputs({ icon: Icon, onPress, className = '' }) {
  return (
    <button
      onMouseDown={onPress}
      className={`flex items-center justify-center p-4 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white transition-colors ${className}`}
    >
      <Icon size={24} />
    </button>
  )
}

export default ControllerInputs