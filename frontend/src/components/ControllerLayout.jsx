import { ArrowUp, ArrowDown, RotateCw, RotateCcw } from 'lucide-react';
import ControllerInputs from './ControllerInputs';

function ControllerLayout({ onControl }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4">Controls</h2>
      
      {/* Vertical Controls (Thrust) */}
      <div className="mb-6">
        <div className="text-sm text-slate-400 mb-2">Vertical</div>
        <div className="flex flex-col items-center gap-2">
          <ControllerInputs
            icon={ArrowUp} 
            onPress={() => onControl('thrust-up')}
          />
          <ControllerInputs
            icon={ArrowDown} 
            onPress={() => onControl('thrust-down')}
          />
        </div>
      </div>

      {/* Horizontal Controls (Pitch) */}
      <div className="mb-6">
        <div className="text-sm text-slate-400 mb-2">Pitch</div>
        <div className="flex justify-center gap-2">
          <ControllerInputs
            icon={ArrowUp} 
            onPress={() => onControl('pitch-forward')}
          />
          <ControllerInputs
            icon={ArrowDown} 
            onPress={() => onControl('pitch-backward')}
          />
        </div>
      </div>

      {/* Rotation Controls (Yaw) */}
      <div>
        <div className="text-sm text-slate-400 mb-2">Yaw (Rotation)</div>
        <div className="flex justify-center gap-2">
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
