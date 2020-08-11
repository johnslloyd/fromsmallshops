import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

function Cat() {
  return (
    <StaticQuery
      query={tagQuery}
      render={data => {
        const alltags = data.allMdx.group
        return (
          <ul className="homeRow">
            {alltags.map(tag => (
              <li className="compareBox" key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue}
                </Link>
              </li>
            ))}
          </ul>
        )
      }}
    />
  )
}

export default Cat

const tagQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMdx(limit: 2000) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
  `

  

