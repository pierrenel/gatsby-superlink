import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Superlink = ({ to, activeClassName, partiallyActive, children, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a
      href={to}
      rel="nofollow noopener noreferrer"
      {...other}
    >
      {children}
    </a>
  )
}

Superlink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  activeClassName: PropTypes.string,
  partiallyActive: PropTypes.bool,
}

export default Superlink
