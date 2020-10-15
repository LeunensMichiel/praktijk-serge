import React, { useState, useRef } from "react"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { gsap } from "gsap"
import { Transition } from "react-transition-group"
import Cross from "../../assets/icons/cross.svg"

const Modal = ({ children, modalIsOpen, close }) => {
  const modalRef = useRef()
  const modalInnerRef = useRef()
  const buttonRef = useRef(null)
  const [timeline] = useState(gsap.timeline({ paused: true }))

  function closeModal() {
    timeline.reverse().then(() => timeline.clear())
    gsap.delayedCall(timeline.duration(), () => close())
  }

  return (
    <Transition
      mountOnEnter
      unmountOnExit={true}
      in={modalIsOpen}
      addEndListener={(node, done) => {
        timeline.fromTo(
          modalRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "easeOut",
            duration: 0.5,
          }
        )
        timeline.fromTo(
          modalInnerRef.current,
          { y: "-50%" },
          {
            y: "0",
            ease: "easeOut",
            delay: -0.5,
            duration: 0.3,
          }
        )
        timeline.from(modalInnerRef.current.children, {
          y: "10px",
          ease: "easeOut",
          delay: -0.4,
          duration: 0.3,
          stagger: 0.3,
          autoAlpha: 0,
        })
        timeline.play().then(done)
      }}
    >
      <DialogOverlay
        isOpen={modalIsOpen}
        onDismiss={closeModal}
        aria-label="Uitleg over coronamaatregelen"
        ref={modalRef}
        initialFocusRef={buttonRef}
      >
        <DialogContent
          aria-label="Uitleg over coronamaatregelen"
          ref={modalInnerRef}
        >
          <Cross
            onClick={closeModal}
            role="button"
            tabIndex="0"
            ref={buttonRef}
          />
          {children}
        </DialogContent>
      </DialogOverlay>
    </Transition>
  )
}

export default Modal
