import { useState, useEffect } from 'react'
import TelemetryData from '../components/TelemetryData'
import ActivityLog from '../components/ActivityLog'
import ControllerLayout from '../components/ControllerLayout'
import '../css/model-controller.css'

function ModelControllerPage() {
  const [telemetry, setTelemetry] = useState({
    altitude: 0,
    pitch: 0,
    yaw: 0,
    thrust: 0
  })
  
  const [logs, setLogs] = useState([])
  const [windData, setWindData] = useState({ speed: 0, direction: 'N/A' })

  // TODO - Simulates wind data - updates every 5 seconds. Will be replaced with realtime model data later.
  useEffect(() => {
    const interval = setInterval(() => {
      setWindData({
        speed: Math.floor(Math.random() * 15) + 5,
        direction: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][Math.floor(Math.random() * 8)]
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const addLog = (action) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [{
      id: Date.now(),
      timestamp,
      action
    }, ...prev].slice(0, 10))
  }

  const handleControl = (type) => {
    setTelemetry(prev => {
      const updated = { ...prev }
      
      switch(type) {
        case 'thrust-up':
          updated.thrust = Math.min(100, prev.thrust + 10)
          updated.altitude = Math.min(1000, prev.altitude + 5)
          addLog(`Thrust increased to ${updated.thrust}%`)
          break
        case 'thrust-down':
          updated.thrust = Math.max(0, prev.thrust - 10)
          updated.altitude = Math.max(0, prev.altitude - 5)
          addLog(`Thrust decreased to ${updated.thrust}%`)
          break
        case 'pitch-forward':
          updated.pitch = Math.max(-45, prev.pitch - 5)
          addLog(`Pitched forward to ${updated.pitch}°`)
          break
        case 'pitch-backward':
          updated.pitch = Math.min(45, prev.pitch + 5)
          addLog(`Pitched backward to ${updated.pitch}°`)
          break
        case 'yaw-left':
          updated.yaw = (prev.yaw - 15 + 360) % 360
          addLog(`Yawed left to ${updated.yaw}°`)
          break
        case 'yaw-right':
          updated.yaw = (prev.yaw + 15) % 360
          addLog(`Yawed right to ${updated.yaw}°`)
          break
      }
      
      return updated
    })
  }

  return (
    <div className="model-controller-container">
      <div className="model-controller-content">
        <h1 className="model-controller-header">Digital Model Controller</h1>
        
        <div className="model-controller-grid">
          <TelemetryData telemetry={telemetry} windData={windData} />
          <ControllerLayout onControl={handleControl} />
          <ActivityLog logs={logs} />
        </div>
      </div>
    </div>
  )
}

export default ModelControllerPage