import React, { useState, useRef } from "react"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { gsap } from "gsap"
import { Transition } from "react-transition-group"

import { BannerWrapper } from "./notificationStyles"
import Cross from "../../assets/icons/cross.svg"

const Banner = () => {
  const buttonRef = useRef()
  const modalRef = useRef()
  const modalInnerRef = useRef()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [timeline] = useState(gsap.timeline({ paused: true }))

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    timeline.reverse().then(() => timeline.clear())
    gsap.delayedCall(timeline.duration(), () => setIsOpen(false))
  }

  return (
    <>
      <BannerWrapper>
        Corona-maatregelen: Het zijn uitzonderlijke tijden.{" "}
        <button onClick={openModal}>Lees hier</button> meer over de huidige
        richtlijnen.
      </BannerWrapper>
      <Transition
        mountOnEnter
        unmountOnExit={false}
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
            <h3>
              In het kader van de coronacrisis en met het oog op de ieders
              veiligheid, zijn de volgende richtlijnen van toepassing:
            </h3>
            <ol>
              <li>
                <b>
                  Bij de minste ziekteklachten (niezen, keelpijn, hoesten,
                  koorts), gelieve niet te komen naar de consultatie.
                </b>
              </li>
              <li>
                Het dragen van een <b>mondmasker is verplicht</b> (heeft u geen
                mondmasker dan kan u ook met sjaal neus en mond bedekken).
              </li>
              <li>
                Graag maximaal 2 patienten tegelijk in de wachtzaal, daarom:
                <ul>
                  <li>
                    Kom <b>niet te vroeg</b>. U kan eventueel even in uw auto
                    wachten tot het tijdstip van uw afspraak.
                  </li>
                  <li>
                    Kom <b>alleen</b> tenzij u begeleiding nodig hebt.
                  </li>
                  <li>
                    Breng <b>geen kinderen</b> mee, behalve indien zij de
                    patiënt zijn. Andere kinderen kunnen niet meekomen.
                  </li>
                </ul>
              </li>
              <li>
                Wij proberen de tijd dat u in de wachtzaal moet verblijven te
                beperken. Daarom is het belangrijk dat de consultaties zo stipt
                mogelijk verlopen. De consultatie zal dan ook{" "}
                <b>kort en bondig </b>
                zijn. Niet-dringende bijkomende problemen worden verwezen naar
                een latere consultatie.
              </li>
              <li>
                Ontsmet uw handen met handgel bij binnengaan in de wachtzaal en
                bij de dokter.
              </li>
              <li>Bij voorkeur betalen met BANKCONTACTapp of PAYCONIQ.</li>
            </ol>
          </DialogContent>
        </DialogOverlay>
      </Transition>
    </>
  )
}

export default Banner
