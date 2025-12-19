import '../css/activity-log.css'

function ActivityLog({ logs }) {
  return (
    <div className="activity-container">
      <h2 className="activity-header">Activity Log</h2>
      <div className="activity-card">
        {logs.length === 0 ? (
          <div className="activity-card-item">No activity yet</div>
        ) : (
          logs.map(log => (
            <div key={log.id} className="activity-card-item">
              <div className="activity--card-item-time">{log.timestamp}</div>
              <div className="activity-card-item-action">{log.action}</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ActivityLog