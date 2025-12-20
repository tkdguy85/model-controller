import '../css/home.css'
import { useState } from 'react'
import Modal from '../components/Modal'

function Home() {
  const [isMainModalOpen, setIsMainModalOpen] = useState(false)
  const [isProtoTypeModalOpen, setIsProtoTypeModalOpen] = useState(false)
  const [selectedModel, setSelectedModel] = useState(null)

  const handleModelSelect = (modelType) => {
    setSelectedModel(modelType)
    alert(`You've selected ${modelType} model type`)
    setIsMainModalOpen(false)
    setIsProtoTypeModalOpen(false)
  }
  
  
  return (
    <div className="home-container">
      <h1 className="home-header">Model Controller Home Screen</h1>
      <p className="home-subheader">Select model type below:</p>
      
      <button 
        className="modal-button" 
        onClick={() => setIsMainModalOpen(true)}
      >
        Select Active Model Type
      </button>

      <p className="home-subheader">Or if you are using a prototype model:</p>

      <button 
        className="modal-button" 
        onClick={() => setIsProtoTypeModalOpen(true)}
      >
        Select Prototype Model Type
      </button>

      {/* Model A Modal List */}
      <Modal 
        isOpen={isMainModalOpen} 
        onClose={() => setIsMainModalOpen(false)}
        className='modal-container'
      >
        <div className="model-list-container">
          <h2 className="model-list-header">Available Model A List</h2>
          <ul className="model-list">
            {
              [
                'Model A - 1A (North America)',
                'Model A - 1Ax (North America Experimental)',
                'Model A - 1B (Central/South America)',
                'Model A - 2B (Europe/Asia)',
                'Model A - 2C (Africa)',
                'Model A - 2D (Australia)'
              ].map(model => (
                <li key={model} className="model-list-item">
                  <button
                    className={`model-button ${selectedModel === model ? 'active' : ''}`}
                    onClick={() => handleModelSelect(model)}
                    aria-pressed={selectedModel === model}
                  >
                    {model}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </Modal>
      
      {/* Model X Modal List */}
      <Modal 
        isOpen={isProtoTypeModalOpen} 
        onClose={() => setIsProtoTypeModalOpen(false)}
        className='modal-container'
      >
        <div className="model-list-container">
          <h2 className="model-list-header">Prototype Model List</h2>
          <ul className="model-list">
            {
              [
                'Model X - Test Prototype',
                'Model X - High Altitude Prototype',
                'Model X - Extended Range Prototype',
                'Model X - Payload Test Prototype'
              ].map(model => (
                <li key={model} className="model-list-item">
                  <button
                    className={`model-button ${selectedModel === model ? 'active' : ''}`}
                    onClick={() => handleModelSelect(model)}
                    aria-pressed={selectedModel === model}
                  >
                    {model}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </Modal>
    </div>
  )
}

export default Home