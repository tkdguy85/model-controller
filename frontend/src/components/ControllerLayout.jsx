import '../css/controller-layout.css'

import { PlaneTakeoff, PlaneLanding, ChevronsUp, ChevronsDown, RotateCw, RotateCcw, Plane } from 'lucide-react';
import ControllerInputs from './ControllerInputs';

function ControllerLayout({ onControl }) {
  return (
    <div className="controller-layout-container">
      <h2 className="controller-layout-header">Flight Controls</h2>
      
      {/* Vertical Controls (Thrust) */}
      <div className="controller-layout-section">
        <div className="controller-layout-label">Altitude Adjust</div>
        <div className="controller-layout-inputs">
          <ControllerInputs
            icon={ChevronsUp} 
            onPress={() => onControl('thrust-up')}
          />
          <ControllerInputs
            icon={ChevronsDown} 
            onPress={() => onControl('thrust-down')}
          />
        </div>
      </div>

      {/* Horizontal Controls (Pitch) */}
      <div className="controller-layout-section">
        <div className="controller-layout-label">Pitch Position</div>
        <div className="controller-layout-inputs">
          <ControllerInputs
            icon={PlaneTakeoff} 
            onPress={() => onControl('pitch-forward')}
          />
          <ControllerInputs
            icon={PlaneLanding} 
            onPress={() => onControl('pitch-backward')}
          />
        </div>
      </div>

      {/* Rotation Controls (Yaw) */}
      <div className="controller-layout-section">
        <div className="controller-layout-label">Sensor Yaw</div>
        <div className="controller-layout-inputs">
          <ControllerInputs
            icon={RotateCcw} 
            onPress={() => onControl('yaw-left')}
          />
          <ControllerInputs
            icon={RotateCw} 
            onPress={() => onControl('yaw-right')}
          />
        </div>
      </div>
    </div>
  )
}

export default ControllerLayout
