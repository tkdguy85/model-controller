import '../css/home.css'

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-header">Model Controller Home Screen</h1>
      <p className="home-subheader">Select which model you are using below:</p>
      

      
      {/* Model A List */}
      <ul className="model-list">
        <li className="model-list-item"><button className='model-button'>Model A - 1A (North America)</button></li>
        <li className="model-list-item"><button className='model-button'>Model A - 1Ax (North America Experimental)</button></li>
        <li className="model-list-item"><button className='model-button'>Model A - 1B (Central/South America)</button></li>
        <li className="model-list-item"><button className='model-button'>Model A - 2B (Europe/Asia)</button></li>
        <li className="model-list-item"><button className='model-button'>Model A - 2C (Africa)</button></li>
        <li className="model-list-item"><button className='model-button'>Model A - 2D (Australia)</button></li>
      </ul>
      
      {/* Model X List */}
      <ul className="model-list">
        <li className="model-list-item"><button className='model-button'>Model X - Test Prototype</button></li>
        <li className="model-list-item"><button className='model-button'>Model X - High Altitude Prototype</button></li>
        <li className="model-list-item"><button className='model-button'>Model X - Extended Range Prototype</button></li>
      </ul>
    </div>
  )
}

export default Home