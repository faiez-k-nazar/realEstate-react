import React from 'react'

import { MDBCarousel, MDBCarouselItem,MDBCarouselCaption  } from 'mdb-react-ui-kit';


function Home() {
  return (
    <div>
<MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img style={{height:550}} src='apartment.jpg' className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img style={{height:550}} src='https://wallpapers.com/images/hd/red-brick-beautiful-house-kvetof9l98bai2tk.jpg' className='d-block w-100' alt='...' />

        <MDBCarouselCaption>
          <h3 className='text-primary'>Rent Your Dream Home</h3>
          <p>Grab fully or partially furnished homes inside kochi at an exciting price range! <a href="">view now</a></p>
        </MDBCarouselCaption>
      
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img  style={{height:550}} src='plot.jpg' className='d-block w-100' alt='...' />

        <MDBCarouselCaption>
          <h3 className='text-primary'>Find Unique PLots</h3>
          <p><a href="">view now</a></p>
        </MDBCarouselCaption>
      
      </MDBCarouselItem>
    </MDBCarousel>

    <div>
      <h4 className='text-center fw-bold'>FKN Real Estates</h4>
      <p style={{textAlign:'center',fontWeight:'bold',fontSize:'50px',paddingTop:'30px'}} >Keys to Your Next Home</p>

      <div className='d-flex '>
        <ul>
      <li><img src="./quintana-events-wedding-planner-napa-fairmont-sonoma.jpg" alt="" /></li>
  <li className='m-3'>hek</li>
  <li  className='m-3'>hi</li>
  <li>jj</li>
  <li></li>
  
  </ul>
      </div>
    </div>


    <div class="sect-1">
        <div class="row">
            <div class="col-md-6">
               <h5 class="weddingplan"> </h5> 
            <hr /> <br />
             <p class="para1"> Selling or renting out your property is no longer a tedious task. You can easily sell or rent out a property online with Kerala's Own Real Estate Portal - FKN RealEstates.com, List your property with us and we help you find the ideal buyer or tenant quickly and conveniently. Start posting your property by clicking the property type of your choice.</p>
            </div>
            <div class="col-md-6">
             <img style={{width:'500px'}} src="real1.jpg" alt="" />
            </div>
        </div>

      </div>
  
    </div>
  )
}

export default Home