import { useEffect, useRef } from 'react'

/**
 * Thin wrapper around the native <dialog> element, which gives us focus
 * trapping, Escape-to-close and a proper top layer for free.
 */
export default function Modal({ open, onClose, labelledBy, ariaLabel, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    document.body.classList.toggle('modal-open', open)
    return () => document.body.classList.remove('modal-open')
  }, [open])

  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => {
        // click on the backdrop (the dialog element itself, outside the panel)
        if (e.target === ref.current) onClose()
      }}
    >
      {open && children}
    </dialog>
  )
}
