import '../css/controller-layout.css'

import { PlaneTakeoff, PlaneLanding, ChevronsUp, ChevronsDown, RotateCw, RotateCcw, Plane } from 'lucide-react';
import ControllerInputs from './ControllerInputs';

function ControllerLayout({ onControl }) {
  return (
    <div className="controller-layout-container">
      <h2 className="controller-layout-header">Controls</h2>
      
      {/* Vertical Controls (Thrust) */}
      <div className="controller-layout-section">
        <div className="controller-layout-label">Vertical</div>
        <div className="controller-layout-inputs">
          <ControllerInputs
            icon={PlaneTakeoff} 
            onPress={() => onControl('thrust-up')}
          />
          <ControllerInputs
            icon={PlaneLanding} 
            onPress={() => onControl('thrust-down')}
          />
        </div>
      </div>

      {/* Horizontal Controls (Pitch) */}
      <div className="controller-layout-section">
        <div className="controller-layout-label">Pitch</div>
        <div className="controller-layout-inputs">
          <ControllerInputs
            icon={ChevronsUp} 
            onPress={() => onControl('pitch-forward')}
          />
          <ControllerInputs
            icon={ChevronsDown} 
            onPress={() => onControl('pitch-backward')}
          />
        </div>
      </div>

      {/* Rotation Controls (Yaw) */}
      <div className="controller-layout-section">
        <div className="controller-layout-label">Yaw (Rotation)</div>
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
