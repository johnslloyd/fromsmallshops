import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"


function Extension() {
  return (
    <div className="secondaryBanner">
        <span> 
              <Link to='/'>CompareSmall.com</Link>
        </span>
        <span>
        <Link to="/mailinglistsignup">Check out our CompareSmall Chrome extension here </Link>
        </span>
    </div>
    )
}

export default Extension

  

