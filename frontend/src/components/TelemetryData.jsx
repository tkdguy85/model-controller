import '../css/telemetry.css'

function TelemetryData({ telemetry, windData }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4">Telemetry</h2>
      <div className="space-y-4">
        <div>
          <div className="text-sm text-slate-400">Current Altitude</div>
          <div className="text-3xl font-bold text-green-400">{telemetry.altitude.toFixed(0)} ft</div>
        </div>
        <div>
          <div className="text-sm text-slate-400">Relational Pitch</div>
          <div className="text-2xl font-bold text-blue-400">{telemetry.pitch.toFixed(0)}°</div>
          <div className="w-full bg-slate-700 h-2 rounded-full mt-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${50 + (telemetry.pitch / 45) * 50}%` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="text-sm text-slate-400">Relational Yaw</div>
          <div className="text-2xl font-bold text-purple-400">{telemetry.yaw}°</div>
        </div>
        <div>
          <div className="text-sm text-slate-400">Gas Thrust Impulse</div>
          <div className="text-2xl font-bold text-orange-400">{telemetry.thrust}%</div>
          <div className="w-full bg-slate-700 h-2 rounded-full mt-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all"
              style={{ width: `${telemetry.thrust}%` }}
            ></div>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-700">
          <div className="text-sm text-slate-400">Wind Speed</div>
          <div className="text-xl font-bold text-cyan-400">{windData.speed} mph {windData.direction}</div>
        </div>
      </div>
    </div>
  )
}

export default TelemetryData