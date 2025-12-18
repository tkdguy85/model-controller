import { useState, useEffect } from 'react'
import TelemetryData from '../components/TelemetryData'
import ActivityLog from '../components/ActivityLog'
import ControllerLayout from '../components/ControllerLayout'

function ModelControllerPage() {
  const [telemetry, setTelemetry] = useState({
    altitude: 0,
    pitch: 0,
    yaw: 0,
    thrust: 0
  })
  
  const [logs, setLogs] = useState([])
  const [windData, setWindData] = useState({ speed: 0, direction: 'N/A' })

  // Simulate wind data (replace with actual API call later)
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Digital Model Controller</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TelemetryData telemetry={telemetry} windData={windData} />
          <ControllerLayout onControl={handleControl} />
          <ActivityLog logs={logs} />
        </div>
      </div>
    </div>
  )
}

export default ModelControllerPage