import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

function Modal({
  isOpen,
  onClose,
  title, 
  children,
  className = 'modal',
  showCloseButton = true,
}) {
  const modalRef = useRef(null)

  useEffect(() => {
    const modal = modalRef.current
    if (!modal) return
    
    if (isOpen) {
      modal.showModal()
      modal.style.opacity = '1'
    } else {
      modal.close()
      modal.style.opacity = '0'
    }
  }, [isOpen])

  const handleBackgroundClick = (e) => {
    const modal = modalRef.current
    const rect = modal.getBoundingClientRect()
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      onClose()
    }
  }

  return (
    <dialog
      ref={modalRef}
      className={className}
      onClick={handleBackgroundClick}
    >
      <div className="modal-content">
        {showCloseButton && (
          <button className="modal-close-button" onClick={onClose}>
            <X size={20} />
          </button>
        )}
      </div>

      <div className="modal-header">
        <h2 className="modal-title">{title}</h2>
        {children}
      </div>
    </dialog>
  )
}

export default Modal