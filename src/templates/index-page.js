/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { AiOutlineAudioMuted } from "react-icons/ai"
// import { RiArrowRightSLine } from "react-icons/ri"
import {Footer} from "../components/footer"
// import { GoArrowDown } from "react-icons/go"
// import ScrollAnimation from 'react-animate-on-scroll'
// import { FaRegPlusSquare } from 'react-icons/fa'
// import SignUp from "../components/install-discount"
// import Theme from "../components/theme"
import Tips from "../components/tippanel"
import { IoShareOutline } from 'react-icons/io5'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
import { ImPlay, ImMobile2, ImDisplay } from "react-icons/im"
// import GoBack from "../components/goBack"
import styled from "styled-components"
import {Social} from "../components/social"
// import Skills from "../templates/skills-page"
// import Newsignup from "../components/newssign"
import BlogListHome from "../components/blog-list-home"
import {Seo} from "../components/seo"
import {Layout} from "../components/layout"




const CustomBox = styled.div`

.container21 section{
  border:0px solid blue;
}

`

const navStyle = {bg: "bodyBg",}


export const pageQuery = graphql`
  query HomeQuery($id: String! ) {
    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
        showInfo
        showCover
        showFeature
        showPosts
        showResume
        showSocial
        showSkills
        showNav
        showPopup
        siteColor
        showDates
      }

    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        youtuber
        youtuber2
        youtubestart
        youtubeend
        audiostart
        audiotitle
        audioend
        youtubemute
        youtubecontrols
        youtubeautostart
        profTitle
        profText
        addressText
        addressText2
        skillsTitle
        skillsText
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        coverletter {
          coverText
          coverLink
        }
        portfolio{
          openText
          closeText
        }
        svgImage{
          relativePath
        }
      }
    }


 
    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 5
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`




const HomePage = ({ data }) => {
  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""

    // const { iconimage } = useSiteMetadata()

    const { companyname } = useSiteMetadata()
    const { siteUrl } = useSiteMetadata()
		

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart
    // const SkillsTitle = frontmatter.skillsTitle
    const SkillsText = frontmatter.skillsText
    const coverText = frontmatter.coverletter.coverText
    const { showNav } = useSiteMetadata()
    const { showInfo } = useSiteMetadata()
    const { showFeature } = useSiteMetadata()
    const { showPosts } = useSiteMetadata()
    const { showResume } = useSiteMetadata()
    const { showSocial } = useSiteMetadata()
    const { showSkills } = useSiteMetadata()
    const { showCover } = useSiteMetadata()
    const { showfooter } = useSiteMetadata()
    const { iconimage } = useSiteMetadata()
    // const { showDates } = useSiteMetadata()
    // const { showPopup } = useSiteMetadata()


    // const showCTA = frontmatter.cta.ctaText
    const CtaLink = frontmatter.cta.ctaLink
    // const coverLink = frontmatter.coverletter.coverLink
    
    
    const ProfText = frontmatter.profText
 

    const openQuote = frontmatter.portfolio.openText
    const closeQuote = frontmatter.portfolio.closeText
    
    // const docRef = typeof document !== `undefined` ? document : undefined;
    // if (!docRef) { return }

    

  //   function resizeAll() {
  //     var x = document.getElementsByClassName("iframe");
  //     alert(x[0].innerHTML);
  // }


  const resizeMobile = ()=>{
    document.getElementById("iframe1").style.width = '400px'
    document.getElementById("iframe2").style.width = '400px'
    document.getElementById("iframe3").style.width = '400px'
    document.getElementById("iframe4").style.width = '400px'
  }
  const resizeDesk = ()=>{
    document.getElementById("iframe1").style.width = 'initial'
    document.getElementById("iframe2").style.width = 'initial'
    document.getElementById("iframe3").style.width = 'initial'
    document.getElementById("iframe4").style.width = 'initial'
  }

    // getElementsByClassName
    
    // const { siteColor } = useSiteMetadata()

    // const SiteColor = sitecolor

  const Svg = frontmatter.svgImage
  const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }



  
function AddSvg(){
  const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
  return (
    <object title="Animation" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto',  }} alt="Animation" ></object>
  )
}





const YouTube = frontmatter.youtuber

  if (!YouTube) {

  }
  else{
    
    <Iframer />
  }

function Iframer() {
    

    const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
    return (
      <ReactPlayer
      className='react-player66'
      url={Url}
      width="100%"
      height="100%"
  style={{zIndex:'1'}}
      config={{
        youtube: {
          playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute, loop:true  }
        },
      }}
      playing
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'1', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column',  paddingTop:'100px'}}>



    <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', height:'90vh', margin:'5vh auto', border:'0px solid red', display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', flexDirection:'column'}}>
    
    {/* <div style={{position:'relative', maxWidth:'100vw', margin:'0', zIndex:'0', background:'transparent !important',}}>



    {iconimage ? (
        
        <img className="homepage-bg" src={iconimage} width="" height="" alt="Logo" style={{ width:'50vw', maxWidth:'30vw', maxHeight:'', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important', objectFit:'contain', backgroundSize:'contain'}} />
                  ) : (
                    ""
                  )}



</div> */}


<div style={{display:'flex', justifyContent:'center', height:'', margin:'0 auto 0 auto', width:'100%', border:'0px solid yellow'}}>
<div style={{ fontWeight:'bold', padding:'0 1rem', margin:'0 auto', fontSize:'clamp(1.2rem, 2.8vw, 3.4rem)',  borderRadius:'12px', border:'0px solid #333', filter:'drop-shadow(2px 2px 2px #000)', opacity:'.7' }}><ImPlay style={{margin:'0 auto', width:'100px', fontSize:'60px'}} />Play</div>
                
            </div>


      </div>
      </button>}
        light="../assets/transparent.png"
    />
    )
  }

  


  const YouTube2 = frontmatter.youtuber2
  const AudioStart = frontmatter.audiostart
  const AudioEnd = frontmatter.audioend
  const AudioTitle = frontmatter.audiotitle

  function Iframer3() {
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtuber2
    return (
<div style={{marginTop:'10px', position:'relative', zIndex:'1',
display:'flex', justifyContent:'center', maxHeight:'80px !important', height:'100px', border:'0px solid yellow', width:'100%'
}}>
<ReactPlayer
          className='react-player67'
          url={iframeUrl3}
          // url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          width="250px"
          height="100%"
          style={{
            border:'0px solid red'
        }}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
          
        <div className="" style={{position:'absolute', top:'-40px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
    

          <div className="popped" style={{display:'flex', minWidth:'200px', margin:'0 auto', fontWeight:'bold', padding:'.2rem .4rem', fontSize:'2rem', background:'rgba(0,0,0,0.30)', borderRadius:'12px', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)',}}>
            
            <div style={{fontSize:'.8rem', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)', textAlign:'center'}}>
            I'm listening now to:<br />



            <div style={{fontSize:'1rem', fontWeight:'bold', marginTop:'5px' }}>{ AudioTitle }</div>
      
            <div style={{display:'flex', justifyContent:'center', marginTop:'5px'}}>
            <div><AiOutlineAudioMuted style={{margin:'0 auto', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000),', color:'#06f21a'}} /></div> &nbsp; <div>Click to listen </div>
            
            </div>
            </div>

          </div>
         
          </div>
          </button>}
   
            light="../assets/transparent.png"
          />
     </div>




    )
  }


  
  return (

    // TOP OF HOME
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage" />
  {/* <link rel="stylesheet" href={frontmatter.portfolio.closeText} /> */}
</Helmet>
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
   image={ siteUrl + getSrc(frontmatter.featuredImage) }
      />


<div name="pagetop" className="container22" style={{
 	// overflowY: 'scroll',
  //  overflowX: 'hidden',
  //  overscrollBehavior: 'contain',
  //  scrollSnapAlign: 'center',
  //  scrollPadding: '0 5%',
  //  scrollSnapType: 'y mandatory',
  //  height:'100vh',

}}>
{/* { sitecolor } */}



{/* show feature */}
  {showFeature ? (   

<section id="feature" order="2" name="feature" className="print no-app" style={{ display:'', margin:'0', padding:'0', position:'relative'}}>


  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'100vh', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>



{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'', border:'0px solid red !important'}}
            />





          ) : (

   
            <StaticImage src="../../static/assets/default-background.webp" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}








 



{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}

         

        


      </div>
  </article>

</section>


) : (
  ""
)}
{/* end show feature */}







{showNav ? (
  <div className="spacer" style={{height:'70px', border:'0px solid yellow'}}></div>
      ) : (
        ""
      )}


<div className="" style={{maxHeight:'100vh', height:'100vh', overflow:'hidden',position:'fixed', bottom:'-10vh', zIndex:'-1',}}>
{UnderlayImage ? (
            <GatsbyImage
            image={UnderlayImage}
            alt={frontmatter.title + " - image"}
            className="mcboaty print"
            placeholder="blurred" loading="eager"
              style={{height:'100vh', width:'100vw', maxHeight:'',  objectFit:'cover', overflow:'', border:'0px solid red !important', filter:'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.9))'}}
          />
       
          
          ) : (
            ""
          )}

{/* <StaticImage placeholder="blurred" loading="eager" className="print" src="../../static/assets/underlay.webp" alt="Default Image" width="100vw" height="100vh" style={{width:'100vw', height:'90vh', maxHeight:'', position:'fixed', zIndex:'1', bottom:'0', border:'1px solid !important', backgroundSize:'cover', objectFit:'cover', filter:'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.9))'}} /> */}
       
</div>






{/* show Info */}

{showInfo ? (

<div className="horizontal-holder allin60panel" style={{position:'relative', maxHeight:'', margin:'0 0', border:'0px solid red'}}>
 <div className="horizontal-scroll panels sitegrad movingBG" style={{ scrollSnapType: '', maxHeight:'', margin:'0 0 0 0'}}>
 <div className="" style={{height:'50%', paddingTop:'50%'}}></div>



{/* <div className="introspacer" style={{border:'0px solid', width:''}} /> */}



<div>
{/* <section className="vertical" id="info" order="1" name="info" style={{ display:'',  minHeight:'', position:'relative', zIndex:'0', overflow:'', margin:'0', padding:'0', border:'0px solid red'}}>
  <article style={{ margin:'0 0 0 0'}}> */}






{/* {UnderlayImage ? (
""
) : (
  ""
)} */}
             
             <div id="top" className="flexbutt" style={{display:'flex', gap:'30px', justifyContent:'center', alignItems:"center", margin:'0 auto',
  padding:'2% 4% 0 4%',
  // textShadow:'0 2px 3px #000',
  //  background:'rgba(0,0,0,0.70)',
  //  color:'#fff', 
   borderRadius:'0 0 10px 10px',}}>





{!UnderlayImage ? (
  // custom image in effect //

  <div className="flexcheek mob print nameblock" style={{marginTop:'', padding:'0', maxHeight:'', fontSize:'clamp(1rem, 1.4vw, 3.2rem)', textShadow:'0 2px 3px #000', color:'#fff', 
  background:'rgba(0,0,0,0.50)', 
  backdropFilter:'blur(12px)',
  borderRadius:'10px'}}>
  
  <h1 className="title1">{frontmatter.title}</h1>
            <h2 className="tagline1">
              {frontmatter.tagline}
            </h2>
            <div
            style={{paddingBottom:'2rem'}}
              className="description"
              dangerouslySetInnerHTML={{ __html: ProfText }}
            />
            </div>
  
            ) : (
          
            <div className="flexcheek mob print" style={{padding:'0', maxHeight:'', fontSize:'clamp(1rem, 1.5vw, 3.2rem)',}}>
  
              <h1 className="title1" dangerouslySetInnerHTML={{ __html: frontmatter.profTitle }} />
            <h2 className="tagline1 normal" style={{fontWeight:'', marginTop:'-1.5vh'}}>
              {frontmatter.tagline}
            </h2>
  
            {/* <div
            style={{}}
              className="description"
              dangerouslySetInnerHTML={{ __html: ProfText }}
            /> */}
     <div style={{fontFamily:'sans-serif'}}>       
    <p style={{padding:'0 1rem', fontFamily:'sans-serif'}}>MyResume® Sites are progressive website apps(PWAs) with customizable resume and portfolio pages and can be installed to any device without the need for App Stores.</p>
   
    <p style={{padding:'0 1rem', fontFamily:'sans-serif'}}>Uniquely designed to use cloud based services, MyResume uses modern, server-less technology for the fastest, no-cost sites possible.</p>

    <h3 style={{padding:'0 1rem', textAlign:'center', fontFamily:'sans-serif'}}>All MyResume Sites:</h3><br />
<ul style={{display:'grid', placeSelf:'center', textAlign:'left', margin:'0 auto', width:'70%', padding:'0', border:'0px solid red', fontWeight:''}}>
<li>Operate for <u>FREE</u></li>
<li>Work on all devices - responsive design</li>

<li>100% accessibility and privacy standards</li>

<li>Run anywhere and even work offline</li>

<li>Score 100 on Google Page Speed</li>
</ul>


{/* [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/StaticJsCMS/static-cms-hugo-netlify-template&amp;stack=cms) */}
{/* <a className="button" href="https://app.netlify.com/start/deploy?repository=https://github.com/myresumesite/default&amp;stack=cms" rel="nofollow">
Deploy to Netlify
</a> */}


{/* <br /><br />
<Link to="/about" className="button print" style={{color:'', fontSize:'', margin:'5px auto 0 auto', textAlign:'center', textDecoration:'none', maxWidth:'600px', padding:'1rem 2rem'}}>Somewhere Special</Link> */}

</div>
<br />




 </div>

            )}
        


      <div className="flexcheek mob2 print" style={{position:'', maxHeight:'', overflow:'', marginBottom:'', paddingTop:'2vh', borderRadius:'0 0 10px 10px',
      // textShadow:'0 2px 7px #000', 
      }}>





           {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="drop-shadow avatar-frame"
              style={{ maxWidth:'', height:'', maxHeight:'20vh', position:'relative',  top:'', objectFit:'contain', backgroundSize:'contain', marginBottom:'10px'}}
            />
          ) : (
            ""
          )}





{!UnderlayImage ? (

  <div className="nameblock" style={{margin:'20px auto 0 auto', padding:'0 0 10px 0',alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center',
  color:'#fff',
  border:'0px solid red', 
  maxWidth:'80%', paddingTop:'', 
  fontSize:'clamp(1rem, 1.4vw, 3.2rem)',
  background:'rgba(0,0,0,0.50)',
  // backdropFilter:'blur(8px)',
  borderRadius:'10px',
  textShadow:'0 2px 7px #000',
  }} >

<span style={{marginTop:'10px', fontSize:'160%'}}>{companyname}</span>
{frontmatter.addressText}
<br />
{frontmatter.addressText2}
<br />
<Link state={{modal: true}} to="/contact" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'0 auto', textAlign:'center', borderRadius:'8px', maxWidth:'300px', padding:'1rem', display:'grid', placeContent:'center' }}>Contact Me</Link>

<br />
{showCover ? (
  <Link state={{modal: true}} to="/about" className="print" style={{color:'', fontSize:'', margin:'5px auto 0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>{coverText}</Link>
) : (
  ""
)}


{showSocial ? (
           <Social />
          ) : (
            ""
          )}



{ !YouTube2 ? (
            ""
       
          ) : (
            
            <Iframer3 />
            
          )}
          <br />
</div> // end nameblock



) : (


  
  <div className="nameblock infomenu" sx={navStyle}  style={{margin:'0 auto 0 auto', padding:'20px 0 0 0',alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center',

  border:'1px solid #222', 
  maxWidth:'80%', paddingTop:'', 
  fontSize:'clamp(1rem, 1.4vw, 3.2rem)',
  // background:'rgba(0,0,0,0.60)',
  // background:'linear-gradient(rgba(47, 71, 74, 0.656) 10%, rgba(35, 63, 67, 0.745) 80%)',
  // background:'radial-gradient(rgba(47, 71, 74, 0.656) 10%, rgba(35, 63, 67, 0.745) 80%)',
  backdropFilter:'blur(0)',
  borderRadius:'10px',
  // textShadow:'0 1px 1px #444',
  }} ><br />
<span className="font" style={{color:'', fontSize:'160%'}}>
  {/* {companyname} */}
  Let's Get Started
</span>
<br />
<span className="" style={{color:'', fontSize:'inherit'}}>Zero to Live Website (in 5 minutes)</span>
<span className="" style={{color:'', fontSize:'inherit'}}>
{frontmatter.addressText }</span>

<span className="" style={{color:'', fontSize:'inherit'}}>{frontmatter.addressText2}</span>
<br /><br />
{CtaLink ? (
           <a
   href={frontmatter.cta.ctaLink}
   className=" print"
   target="_blank"
   rel="noreferrer"
    style={{
    cursor:'pointer',
    textDecoration:'underline',
    width:'',
    maxWidth:'',
    margin:'0 auto',
    display:'flex',
    alignSelf:'center',
    color:''
    }}>{frontmatter.cta.ctaText}
</a>
          ) : (
            
            <Link to="/#getstarted" className="button print font" style={{color:'#fff', fontSize:'120%', margin:'0 auto', textAlign:'center', borderRadius:'8px', maxWidth:'',  display:'grid', placeContent:'center', background:'linear-gradient(rgba(69, 99, 107, 0.703) 10%, rgba(167, 190, 197, 0.822) 80%)'}}>{frontmatter.cta.ctaText}</Link>
          )}


{showSocial ? (
           <Social />
       
          ) : (
            ""
          )}



{showCover? (

<Link state={{modal: true}} to="/about" className="print" style={{color:'', fontSize:'', margin:'5px auto 0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'1rem 2rem'}}>{frontmatter.coverletter.coverText}</Link>

) : (
  
""

)}


{ !YouTube2 ? (
            ""
       
          ) : (
            
            <Iframer3 />
            
          )}



<br /><br />
<span className="font" style={{color:'', fontSize:'110%'}}>Fast | Flexible | Secure | Featured</span>
<br />


<br />
</div> // end nameblock
)}





</div>
</div> 
{/* <div style={{height:'100px', border:'1px solid red'}}>&nbsp;</div> */}
{/* </article>
</section> */}

</div>







            




<div id="getstarted" className="featured mobilesize1" style={{position:'', border:'0px solid yellow', width:'100vw', height:'80vh', color:'#ccc', padding:''}}>
<ReactPlayer
      className='react-player66'
      url="https://youtu.be/2_Noj7lS-tM"
      width="100%"
      height="90%"
  style={{zIndex:'1', display:'grid', placeSelf:'center'}}
      config={{
        youtube: {
          playerVars: { showinfo:false, autoplay:true, controls:false, start:YouTubeStart, end:YouTubeEnd, mute:true, loop:true  }
        },
      }}
      playing
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'1', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column',  paddingTop:'100px'}}>

    <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', height:'90vh', margin:'5vh auto', border:'0px solid red', display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', flexDirection:'column'}}>

<div style={{display:'flex', justifyContent:'center', height:'', margin:'0 auto 0 auto', width:'100%', border:'0px solid yellow'}}>
<div style={{ fontWeight:'bold', padding:'0 1rem', margin:'0 auto', fontSize:'clamp(1.2rem, 2.8vw, 3.4rem)',  borderRadius:'12px', border:'0px solid #333', filter:'drop-shadow(2px 2px 2px #000)', opacity:'.7' }}><ImPlay style={{margin:'0 auto', width:'100px', fontSize:'60px'}} />Play</div>             
            </div>
      </div>
      </button>}
        // light="../assets/transparent.png"
    />
    <div className="sitelabel" style={{display:'flex', placeSelf:'center', position:'absolute', zIndex:'1', bottom:'-85px', left:'20%', right:'20%', width:'58%', margin:'0 auto', padding:'.5rem 0', background:'rgba(0,0,0,.6)', color:'#fff', textShadow:'0 1px 1px #222',  borderRadius:'10px', justifyContent:'space-around'}}>Two Great Options: MyResume and MyResume+ </div>
</div>

</div></div>



) : (
  ""
)}
{/* end show Info */}




<div id="checkout" className="featured mobilesize1" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', gap:'10vw', justifyContent:'space-around', alignItems:'center', width:'100vw', height:'80vh', color:'#ccc'}}>

<div className="flexbutt" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'row', gap:'10vw', justifyContent:'center', alignItems:'center', width:'100vw', maxWidth:'1000px', padding:'0 10vw', height:'85vh', color:'#ccc'}}>
          
          
          <Link className="button flexcheek" to="/posts/2" style={{textDecoration:'none', color:'inherit', textAlign:'center', lineHeight:'120%', display:'flex', flexDirection:'column', gap:'30px', margin:'0', width:'30vw', maxHeight:'50vh'}}>
          <StaticImage src="../../static/assets/logo.webp" alt="MyResume Logo Plus" style={{minWidth:'150px',  border:'none'}} /><br />
          MyResume<br />
          <span style={{fontSize:'120%',}}>$49</span>
          </Link>

          <Link className="button flexcheek" to="/posts/2" style={{textDecoration:'none', color:'inherit', textAlign:'center', lineHeight:'120%', display:'flex', flexDirection:'column', gap:'30px', margin:'0', width:'30vw', maxHeight:'50vh'}}>
          <StaticImage src="../../static/assets/logoplus.webp" alt="MyResume Logo Plus" style={{minWidth:'150px',  border:'none'}} /><br />
          MyResume+<br />
          <span style={{fontSize:'120%',}}>$99</span>
          </Link>
</div>
              
              <div className="sitelabel" style={{display:'flex', placeSelf:'center', position:'absolute', zIndex:'1', bottom:'-40px', left:'20%', right:'20%', width:'58%', margin:'0 auto', padding:'.5rem 0', background:'rgba(0,0,0,.6)', color:'#fff', textShadow:'0 1px 1px #222',  borderRadius:'10px', justifyContent:'space-around'}}>Two Great Options: MyResume and MyResume+ </div>
</div>
























{/*  show Resume */}
{showResume ? (
<section className="vertical" id="resume" order="" style={{ display:'', minHeight:'100vh', overflow:'', margin:'0 0 2rem 0', position:'relative', border:'0px solid blue'}}>


<div className="toolbar noapp print" style={{display:'flex', flexDirection:'', gap:'', width:'', borderTop:'1px solid #777', borderBottom:'1px solid #777', justifyContent:'', background:'rgba(24, 29, 31, 0.2)', borderRadius:'12px', padding:'5px 0 5px 0', }}>
<div className="keyboard" order="" style={{display:'flex', justifyContent:'', border:'0px solid red', width:'', margin:'0 auto', padding:'4px 0 0 0',}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Print:</span> &nbsp;<kbd>⌘</kbd> + <kbd>p</kbd> &nbsp;OR&nbsp; <kbd>Ctrl</kbd> + <kbd>p</kbd></div>
{/* <div order="" className="themer" style={{display:'flex', justifyContent:'center', border:'0px solid red', minWidth:'400px', margin:'0 auto', verticalAlign:'center'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}><Theme  style={{color:'inherit !important',}} /></span></div> */}
  <div order="" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'auto !important', margin:'0 auto'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Install:</span> &nbsp;<IoShareOutline style={{fontSize:'30px',}} />&nbsp;+&nbsp; 'Add to Home Screen'</div>
  </div>
<br />
<article className="hasapp"  style={{ display:'', height:'', overflow:'', padding:'1.6rem', margin:'0', position:'relative', fontSize:'clamp(1rem, 1.4vw, 3.2rem)'}}>

<div id="resumename" style={{display:'none', position:'relative', top:'', fontSize:'160%', padding:'0 0 2rem 0', textAlign:'left', width:'100%',}}>{companyname}<br />
{frontmatter.addressText}
<br />
{frontmatter.addressText2}
</div>

<div id="resume" className="">

<span
          style={{  columnCount:'2',
            columnGap:'20px',
            columnWidth:'100%'}}
            className=""
            dangerouslySetInnerHTML={{ __html: html }}
          />
          
</div>

<div className="toolbar print" style={{display:'flex', flexDirection:'', gap:'', width:'', border:'1px solid #777', borderBottom:'1px solid #777', justifyContent:'', background:'rgba(24, 29, 31, 0.2)', borderRadius:'12px', padding:'5px 0 5px 0', marginTop:'2rem' }}>
<div className="keyboard" order="" style={{display:'flex', justifyContent:'', border:'0px solid red', width:'', margin:'0 auto', padding:'4px 0 0 0',}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Print:</span> &nbsp;<kbd>⌘</kbd> + <kbd>p</kbd> &nbsp;OR&nbsp; <kbd>Ctrl</kbd> + <kbd>p</kbd></div>
{/* <div order="" className="themer" style={{display:'flex', justifyContent:'center', border:'0px solid red', minWidth:'400px', margin:'0 auto', verticalAlign:'center'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}><Theme  style={{color:'inherit !important',}} /></span></div> */}
  <div order="" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'auto !important', margin:'0 auto'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Install:</span> &nbsp;<IoShareOutline style={{fontSize:'30px',}} />&nbsp;+&nbsp; 'Add to Home Screen'</div>
  </div>

</article>





</section>
) : (
  ""
)}
{/* end show Resume */}

{/*  show Skills */}
{showSkills ? (
  // <ScrollAnimation animateIn="zoomInDown" animateOnce={false} animatePreScroll={false} delay={100}> 
<section className="print vertical" id="skills" order="" style={{ width:'100%', overflow:'hidden', position:'relative',  justifyContent:'center', alignContent:'center', margin:'5vh auto', textAlign:'center', borderRadius:'8px', minHeight:'100vh', maxWidth:'', padding:'1rem', display:'', placeContent:'', border:'0px solid green', }}>
<br />
<div className="flexbutt" style={{display:'flex', justifyContent:'center', width:'100vw', marginLeft:'', columnGap:'150px', border:'0px solid blue' }} dangerouslySetInnerHTML={{ __html: SkillsText }}>
</div>
  </section>
// </ScrollAnimation>
          ) : (
            ""
          )}
{/* end show Skills */}


<section id="support" className="outer section section--gradient" >
  <div className="container" style={{padding: '0 8%', maxWidth:'', justifyContent:'center', margin:'10vh 0', color:'#fff'}}>
    <Tips />
  </div>
</section>










{/* end show Posts */}
{showPosts ? (
<section className="vertical" id="posts" order="" name="posts" style={{margin:'0 0 0 0', background:'inherit', minHeight:'', overflow:'', border:'0px solid yellow', display:'flex', verticalAlign:'center'}}>


<div className="horizontal-holder allin60panel" style={{position:'relative', maxHeight:'', margin:'0 0', border:'0px solid red'}}>

<div  style={{position:'absolute', left:'0', top:'20vh', zIndex:'1', width:'', background:'rgba(0, 0, 0, .7)', color:'#fff', height:'', display:'flex', flexDirection:'column', gap:'30px', justifyContent:'center', 
  alignItems:'center', alignContent:'center', textAlign:'center', borderRadius:'0 12px 12px 0', border:'1px solid #999 !important', borderLeft:'none !important', padding:'1rem',
textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold',}}><button onClick={resizeMobile}><ImMobile2 style={{fontSize:'24px', margin:'0 auto'}} />Mobile </button><button onClick={resizeDesk}><ImDisplay style={{fontSize:'24px', margin:'0 auto'}} />Desktop</button></div>





 <div className="horizontal-scroll panels sitegrad movingBG" style={{ scrollSnapType: '', maxHeight:'', margin:'0 0 0 0'}}>

 <div className="" style={{height:'50%', paddingTop:'50%'}}></div>


 {/* <div style={{display:'grid', placeContent:'center'}}>
 <iframe title="iFrame" className="" width="980" height="550" src="https://www.youtube.com/embed/X7H_0AqV2ew?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=0&amp;start=22&amp;end=80&amp;loop=1&amp;mute=1&amp;playlist=X7H_0AqV2ew" frameBorder="0" allowFullScreen></iframe>
 </div> */}




        {openQuote ? (
              <div
            style={{display:'grid', placeContent:'center'}}
              className="featured"
              dangerouslySetInnerHTML={{ __html: openQuote }}
            />
          ) : (
            ""
          )}

<div className="introspacer" style={{border:'1px solid', height:'200px'}} />





            <div className="featured mobilesize1">
              <iframe id="iframe1" style={{}} title="iFrame" className="iframe" width="980" height="550" src="https://deighleen.com" frameBorder="0" allowFullScreen></iframe>
              
              <div className="sitelabel" style={{}}>Simple profile or business calling card </div>
            </div>

            


            <div style={{}}
              className="featured mobilesize1">
              <iframe id="iframe3" style={{}} title="iFrame" className="iframe" width="980" height="550" src="https://fluffy-kringle-4442f5.netlify.app/#resume" frameBorder="0" allowFullScreen></iframe>
              
              <div className="sitelabel" style={{}}>Simple profile or business calling card </div>
            </div>



            <div style={{}}
              className="featured">
              <iframe id="iframe2" style={{}} title="iFrame" className="iframe" width="980" height="550" src="https://toddlambert.myresume.site" frameBorder="0" allowFullScreen></iframe>

              <div className="sitelabel" style={{}}>Simple profile or business calling card </div>
            </div>


            <div style={{}}
              className="featured">
              <iframe id="iframe4" style={{}} title="iFrame" className="iframe" width="980" height="550" src="https://silly-pothos-289a5c.netlify.app/#skills" frameBorder="0" allowFullScreen></iframe>

              <div className="sitelabel" style={{}}>Full featured, yet fast and flexible </div>
            </div>



        <BlogListHome data={posts} />

        <div style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'50vh', color:'#ccc'}}>

          <Link className="button" to="/posts/2" style={{textDecoration:'none', color:'inherit', textAlign:'center', height:'', display:'', placeContent:'', border:'px solid red',}}>View More </Link>

        </div>

{closeQuote ? (

        <div style={{display:'grid', placeContent:'center'}}><blockquote style={{fontFamily:'', minWidth:'300px', textAlign:'left', borderRadius: '12px', textShadow:'none', fontSize:'clamp(1rem, 1.8vw, 2.8rem)',}}><div style={{padding:'2rem 10% 0px', color:''}}>{closeQuote}</div>
        {/* <div className="logofirst" style={{textAlign:'right', margin:'2rem 30% 0px 0px'}}>- Todd Lambert</div> */}
        </blockquote></div>

        ) : (
            ""
          )}


   </div>

  </div>
</section>
   ) : (
    ""
  )}
{/* end show Posts */}













 </div>{/* end scooch */}



<div id="bottom" className="usability" style={{position:'relative', zIndex:'', bottom:'0', display:'flex', placeSelf:'center', placeContent:'center', width:'100%', margin:'0 auto', alignContent:'center', alignItems:'center', justifyContent:'center', border:'0px solid blue', textAlign:'center'}}>
{/* <Theme /> */}
<div id="branding" style={{position:'relative', left:'0', bottom:'5px', fontSize:'90%'}}><a href="https://myresume.site" target="_blank" rel="noreferrer">MyResume®</a></div>
</div>


{/* show footer */}
{showfooter ? (
<Footer className="vertical" />
) : (
  ""
)}
{/* end show footer */}

    </Layout>
    </CustomBox>
  )
}

export default HomePage