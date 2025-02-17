import React from "react"
import { graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import {Seo} from "../components/seo"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"
import {Footer} from "../components/footer"
// import ScrollAnimation from 'react-animate-on-scroll'
export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const { showNav } = useSiteMetadata()
  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />

      {showNav ? (
        
        <div className="spacer1" style={{height:'100px', border:'0px solid yellow'}}></div>
            ) : (
              ""
            )}
      <div className="container" style={{padding:'2rem 8%', maxWidth:'1024px'}}>


      <div className="mobile"><GoBack /></div>


      <section className="article-header" style={{textAlign:'left', margin:'0 4%', height:'auto'}}>
            <h1>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
          </section>

        <article dangerouslySetInnerHTML={{ __html: html }} />


        



      </div>




      <GoBack />
      <br />
      <br />
      <Footer />
    </Layout>
  )
}

export default AboutPage
