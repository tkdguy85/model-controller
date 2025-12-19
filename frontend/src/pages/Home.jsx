function Home() {
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to the Model Controller Home Screen</h1>
      <p className="home-subheader">Select which model you are using below:</p>
      <ul className="model-list">
        <li className="model-list-item">Model A - 1A (North America)</li>
        <li className="model-list-item">Model A - 1B (Central/South America)</li>
        <li className="model-list-item">Model A - 2B (Europe/Asia)</li>
        <li className="model-list-item">Model A - 2C (Africa)</li>
        <li className="model-list-item">Model A - 2D (Australia)</li>
        <li className="model-list-item">Model X - Prototype</li>
        <li className="model-list-item">Model X - High Altitude</li>
        <li className="model-list-item">Model X - Extended Range</li>
      </ul>
    </div>
  )
}

export default Home