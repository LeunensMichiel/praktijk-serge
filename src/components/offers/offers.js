import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Modal from "../modal/modal"
import { OfferWrapper } from "./offersStyles"
import Info from "../../assets/icons/info.svg"

const Offers = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(0)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const data = useStaticQuery(graphql`
    query {
      offers: allMarkdownRemark(sort: { fields: frontmatter___rang }) {
        edges {
          node {
            frontmatter {
              name
            }
            html
          }
        }
      }
    }
  `)

  return (
    <>
      <OfferWrapper id="aanbod">
        {data.offers.edges.map((edge, index) => (
          <div className="offer-item" key={edge.node.frontmatter.name}>
            <h4>{edge.node.frontmatter.name}</h4>
            <button
              onClick={() => {
                setCurrentItem(index)
                openModal()
              }}
            >
              <Info />
            </button>
          </div>
        ))}
      </OfferWrapper>
      <Modal modalIsOpen={modalIsOpen} close={closeModal}>
        <h3>{data.offers.edges[currentItem].node.frontmatter.name}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: data.offers.edges[currentItem].node.html,
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Offers
