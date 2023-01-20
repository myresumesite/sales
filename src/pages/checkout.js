import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import styled from "styled-components"
const CustomBox = styled.div`





`

// const shareButton = document.querySelector('.share-button')
// const shareDialog = document.querySelector('.share-dialog')
// const closeButton = document.querySelector('.close-button')

// shareButton.addEventListener('click', event => {
//   shareDialog.classList.add('is-open')
// })

// closeButton.addEventListener('click', event => {
//   shareDialog.classList.remove('is-open')
// })

const Checkout = () => (



<Layout>

    <CustomBox style={{}}>


    <div className="spacer" style={{height:'60px', border:'0px solid yellow'}}></div>


      <div className="wrapper" style={{padding:'20px 1rem 0 1rem'}}>
<h1 className="title neonText" style={{textAlign:'center', fontSize:'clamp(2.2rem, 3vw, 3.6rem)'}}>Choose your version of MyResume:</h1>

    <div id="" className="featured mobilesize1" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', gap:'10vw', justifyContent:'space-around', alignItems:'center', width:'', height:'', color:'#ccc', marginTop:'10vh'}}>

<div className="flexbutt" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'row', gap:'5vw', justifyContent:'center', alignItems:'center', width:'100vw', maxWidth:'1000px', padding:'0 10vw', height:'', color:'#ccc'}}>
          
          
          <Link className="button flexcheek" to="/#checkout1" style={{textDecoration:'none', color:'inherit', textAlign:'center', lineHeight:'100%', display:'flex', flexDirection:'column', gap:'10px', margin:'0', width:'', maxHeight:''}}>
          <StaticImage src="../../static/assets/logo.webp" alt="MyResume Logo Plus" style={{minWidth:'100px', maxHeight:'100px',  border:'none'}} />
          Includes Profile, Resume, Skills and Cover Letter.<br />
          <span style={{fontSize:'140%', fontWeight:'bold'}}>$49</span>
          </Link>

          <Link  state={{modal: true}} className="button flexcheek" to="/notes" style={{textDecoration:'none', color:'inherit', textAlign:'center', lineHeight:'100%', display:'flex', flexDirection:'column', gap:'10px', margin:'0', width:'', maxHeight:''}}>
          <StaticImage src="../../static/assets/logoplus.webp" alt="MyResume Logo Plus" style={{minWidth:'100px', maxHeight:'100px',  border:'none'}} />
          All the bells and whistles. Includes the kitchen sink.<br />
          <span style={{fontSize:'140%', fontWeight:'bold'}}>$99</span>
          </Link>
</div>
              
              {/* <div className="sitelabel" style={{display:'flex', placeSelf:'center', position:'absolute', zIndex:'1', bottom:'-40px', left:'20%', right:'20%', width:'58%', margin:'0 auto', padding:'.5rem 0', background:'rgba(0,0,0,.6)', color:'#fff', textShadow:'0 1px 1px #222',  borderRadius:'10px', justifyContent:'space-around'}}>Two Great Options: MyResume and MyResume+ </div> */}
      </div>
</div>

</CustomBox>
</Layout>



)

export default Checkout
