import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Cat from "../components/categorys"

class IndexPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h3>Compare By Category</h3>
        <div className="homeRow" >
          <Cat />
        </div>
        <h3>Our Favorite Comparisons</h3>
         <div className="homeRow" >
          <div className="trendingBox">1</div>
          <div className="trendingBox">2</div>
          <div className="trendingBox">3</div>
        </div>
        <div className="homeRow" >
          <div className="trendingBox">4</div>
          <div className="trendingBox">5</div>
          <div className="trendingBox">6</div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
