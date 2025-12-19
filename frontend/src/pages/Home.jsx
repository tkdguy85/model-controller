import '../css/home.css'

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-header">Model Controller Home Screen</h1>
      <p className="home-subheader">Select which model you are using below:</p>
      <ul className="model-list">
        <li className="model-list-item">Model A - 1A (North America)</li>
        <li className="model-list-item">Model A - 1Ax (North America Experimental)</li>
        <li className="model-list-item">Model A - 1B (Central/South America)</li>
        <li className="model-list-item">Model A - 2B (Europe/Asia)</li>
        <li className="model-list-item">Model A - 2C (Africa)</li>
        <li className="model-list-item">Model A - 2D (Australia)</li>
        <li className="model-list-item">Model X - Test Prototype</li>
        <li className="model-list-item">Model X - High Altitude Prototype</li>
        <li className="model-list-item">Model X - Extended Range Prototype</li>
      </ul>
    </div>
  )
}

export default Home