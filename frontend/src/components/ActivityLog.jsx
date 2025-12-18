function ActivityLog({ logs }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4">Activity Log</h2>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {logs.length === 0 ? (
          <div className="text-slate-500 text-sm">No activity yet</div>
        ) : (
          logs.map(log => (
            <div key={log.id} className="text-sm p-3 bg-slate-700 rounded-lg">
              <div className="text-slate-400 text-xs mb-1">{log.timestamp}</div>
              <div className="text-white">{log.action}</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ActivityLog