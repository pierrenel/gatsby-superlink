// @ts-nocheck It's drunk. Component props defined as optional are detected as required.
import React from "react"
import renderer from "react-test-renderer"
import Superlink from "../index"

global = Object.assign(global, { ___loader: { enqueue: jest.fn() } })

/**
 * @param {JSX.Element} component
 */
const getSnapshot = (component) => {
  return renderer.create(component).toJSON()
}

describe(`<Superlink />`, () => {
  describe(`internal links`, () => {
    it(`as default`, () => {
      const component = getSnapshot(
        <Superlink
          to="/blog"
        >
          Don't Panic!
      </Superlink>
      )
      expect(component).toMatchSnapshot()
    })

    it(`as full of props`, () => {
      const component = getSnapshot(
        <Superlink
          to="/blog"
          activeClassName="dolphin"
          partiallyActive={true}
          otherThing="otherThing"
        >
          So long and thanks for all the fish.
      </Superlink>
      )
      expect(component).toMatchSnapshot()
    })
  })

  describe(`external links`, () => {
    it(`as default`, () => {
      const component = getSnapshot(
        <Superlink
          to="https://douglas.adams"
        >
          Don't Panic!
      </Superlink>
      )
      expect(component).toMatchSnapshot()
    })

    it(`as full of props`, () => {
      const component = getSnapshot(
        <Superlink
          to="https://douglas.adams"
          ariaLabel="Douglas Adams"
          target="_blank"
        >
          Don't Panic!
      </Superlink>
      )
      expect(component).toMatchSnapshot()
    })
  })
})
