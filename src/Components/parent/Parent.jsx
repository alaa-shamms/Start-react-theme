import React from 'react'
import portImg1 from "../assets/cabin.png"
import portImg2 from "../assets/cake.png"
import portImg3 from "../assets/circus.png"

import portImg4 from "../assets/game.png"
import portImg5 from "../assets/safe.png"
import portImg6 from "../assets/submarine.png"


import portStyle from "./parent.module.css"

export default function Portfolio() {
  return (
    <> 
      <div className={`${portStyle.portHeigt} container   d-flex justify-content-center align-items-center `}>
        <div className="row g-5 ">

        <h1 className={`text-uppercase  text-center ${portStyle.homeH}`}>Portfolio</h1>

<div className='d-flex justify-content-center align-items-center my-4'>
<div className={`${portStyle.line} text-white`}></div>
<li className={`${portStyle.starColor} fa fa-star fa-2x  mx-4`}></li>
   <div className={`${portStyle.line}`}></div>
</div>     
          {/* 1 */}
          <div className="col-lg-4 col-md-6">
              <div className="portItem" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <div className="parent position-relative">
                  <img src={portImg1} className={`w-100 ${portStyle.imgProps}`} alt="" />
                  <div className={`position-absolute top-0 w-100 h-100 ${portStyle.item_layer} d-flex justify-content-center align-items-center`}>
                      <li className='fa fa-solid fa-plus fa-5x text-white'></li>
                  </div>
                </div>
              </div>
          </div>
          
                    {/* 2 */}
                    <div className="col-lg-4 col-md-6">
              <div className="portItem"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <div className="parent position-relative">
                  <img src={portImg2} className={`w-100 ${portStyle.imgProps}`} alt="" />
                  <div className={`position-absolute top-0 w-100 h-100 ${portStyle.item_layer} d-flex justify-content-center align-items-center`}>
                      <li className='fa fa-solid fa-plus fa-5x text-white'></li>
                  </div>
                </div>
              </div>
          </div>

          {/* 3 */}
          <div className="col-lg-4 col-md-6">
              <div className="portItem"  data-bs-toggle="modal" data-bs-target="#exampleModal3">
                <div className="parent position-relative">
                  <img src={portImg3} className={`w-100 ${portStyle.imgProps}`} alt="" />
                  <div className={`position-absolute top-0 w-100 h-100 ${portStyle.item_layer} d-flex justify-content-center align-items-center`}>
                      <li className='fa fa-solid fa-plus fa-5x text-white'></li>
                  </div>
                </div>
              </div>
          </div>


          {/* 4 */}
          <div className="col-lg-4 col-md-6">
              <div className="portItem"  data-bs-toggle="modal" data-bs-target="#exampleModal4">
                <div className="parent position-relative">
                  <img src={portImg4} className={`w-100 ${portStyle.imgProps}`} alt="" />
                  <div className={`position-absolute top-0 w-100 h-100 ${portStyle.item_layer} d-flex justify-content-center align-items-center`}>
                      <li className='fa fa-solid fa-plus fa-5x text-white'></li>
                  </div>
                </div>
              </div>
          </div>
          
                    {/* 5 */}
                    <div className="col-lg-4 col-md-6">
              <div className="portItem"  data-bs-toggle="modal" data-bs-target="#exampleModal5">
                <div className="parent position-relative">
                  <img src={portImg5} className={`w-100 ${portStyle.imgProps}`} alt="" />
                  <div className={`position-absolute top-0 w-100 h-100 ${portStyle.item_layer} d-flex justify-content-center align-items-center`}>
                      <li className='fa fa-solid fa-plus fa-5x text-white'></li>
                  </div>
                </div>
              </div>
          </div>

          {/* 6 */}
          <div className="col-lg-4 col-md-6">
              <div className="portItem"  data-bs-toggle="modal" data-bs-target="#exampleModal6">
                <div className="parent position-relative">
                  <img src={portImg6} className={`w-100 ${portStyle.imgProps}`} alt="" />
                  <div className={`position-absolute top-0 w-100 h-100 ${portStyle.item_layer} d-flex justify-content-center align-items-center`}>
                      <li className='fa fa-solid fa-plus fa-5x text-white'></li>
                  </div>
                </div>
              </div>
          </div>

                                   {/*  //////////////////////////modals////////////////////////////////// */}

{/* modal 1 */}
<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl py-5">
    
    <div className="modal-content">
    <button type="button" className={`${portStyle.closeColor} btn-close ms-auto me-3 mt-3 fa-2x`} data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="modal-header d-flex flex-column">
      <h1 className={`${portStyle.model_head}`}>Log Cabin</h1>
          <div className='d-flex justify-content-center align-items-center mt-3 '>
        <div className={`${portStyle.line} text-white`}></div>
        <li className={`${portStyle.starColor} fa fa-star fa-2x  mx-4`}></li>
           <div className={`${portStyle.line}`}></div>
      </div>       
      </div>

      <div className="modal-body d-flex justify-content-center">
        <img src={portImg1} className='w-75' alt="" />
      </div>
      <p className='text-center px-5 w-75  mx-auto text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      <div className="modal-footer d-flex justify-content-center">
        <button type="button" className={`${portStyle.closeBtn} btn text-white pe-3`}  data-bs-dismiss="modal"><i className='fa fa-solid fa-close me-2'></i> Close Window</button>
      </div>
    </div>
  </div>
</div>
{/* modal 2 */}
<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl py-5">
    
    <div className="modal-content">
    <button type="button" className={`${portStyle.closeColor} btn-close ms-auto me-3 mt-3 fa-2x`} data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="modal-header d-flex flex-column">
      <h1 className={`${portStyle.model_head}`}>TASTY CAKE</h1>
          <div className='d-flex justify-content-center align-items-center mt-3 '>
        <div className={`${portStyle.line} text-white`}></div>
        <li className={`${portStyle.starColor} fa fa-star fa-2x  mx-4`}></li>
           <div className={`${portStyle.line}`}></div>
      </div>       
      </div>

      <div className="modal-body d-flex justify-content-center">
        <img src={portImg2} className='w-75' alt="" />
      </div>
      <p className='text-center px-5 w-75  mx-auto text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      <div className="modal-footer d-flex justify-content-center">
        <button type="button" className={`${portStyle.closeBtn} btn text-white pe-3`}  data-bs-dismiss="modal"><i className='fa fa-solid fa-close me-2'></i> Close Window</button>
      </div>
    </div>
  </div>
</div>
{/* modal 3 */}
<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl py-5">
    
    <div className="modal-content">
    <button type="button" className={`${portStyle.closeColor} btn-close ms-auto me-3 mt-3 fa-2x`} data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="modal-header d-flex flex-column">
      <h1 className={`${portStyle.model_head}`}>CIRCUS TENT</h1>
          <div className='d-flex justify-content-center align-items-center mt-3 '>
        <div className={`${portStyle.line} text-white`}></div>
        <li className={`${portStyle.starColor} fa fa-star fa-2x  mx-4`}></li>
           <div className={`${portStyle.line}`}></div>
      </div>       
      </div>

      <div className="modal-body d-flex justify-content-center">
        <img src={portImg3} className='w-75' alt="" />
      </div>
      <p className='text-center px-5 w-75  mx-auto text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      <div className="modal-footer d-flex justify-content-center">
        <button type="button" className={`${portStyle.closeBtn} btn text-white pe-3`}  data-bs-dismiss="modal"><i className='fa fa-solid fa-close me-2'></i> Close Window</button>
      </div>
    </div>
  </div>
</div>
{/* modal 4 */}
<div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl py-5">
    
    <div className="modal-content">
    <button type="button" className={`${portStyle.closeColor} btn-close ms-auto me-3 mt-3 fa-2x`} data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="modal-header d-flex flex-column">
      <h1 className={`${portStyle.model_head}`}>CONTROLLER</h1>
          <div className='d-flex justify-content-center align-items-center mt-3 '>
        <div className={`${portStyle.line} text-white`}></div>
        <li className={`${portStyle.starColor} fa fa-star fa-2x  mx-4`}></li>
           <div className={`${portStyle.line}`}></div>
      </div>       
      </div>

      <div className="modal-body d-flex justify-content-center">
        <img src={portImg4} className='w-75' alt="" />
      </div>
      <p className='text-center px-5 w-75  mx-auto text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      <div className="modal-footer d-flex justify-content-center">
        <button type="button" className={`${portStyle.closeBtn} btn text-white pe-3`}  data-bs-dismiss="modal"><i className='fa fa-solid fa-close me-2'></i> Close Window</button>
      </div>
    </div>
  </div>
</div>
{/* modal 5 */}
<div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl py-5">
    
    <div className="modal-content">
    <button type="button" className={`${portStyle.closeColor} btn-close ms-auto me-3 mt-3 fa-2x`} data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="modal-header d-flex flex-column">
      <h1 className={`${portStyle.model_head}`}>LOCKED SAFE</h1>
          <div className='d-flex justify-content-center align-items-center mt-3 '>
        <div className={`${portStyle.line} text-white`}></div>
        <li className={`${portStyle.starColor} fa fa-star fa-2x  mx-4`}></li>
           <div className={`${portStyle.line}`}></div>
      </div>       
      </div>

      <div className="modal-body d-flex justify-content-center">
        <img src={portImg5} className='w-75' alt="" />
      </div>
      <p className='text-center px-5 w-75  mx-auto text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      <div className="modal-footer d-flex justify-content-center">
        <button type="button" className={`${portStyle.closeBtn} btn text-white pe-3`}  data-bs-dismiss="modal"><i className='fa fa-solid fa-close me-2'></i> Close Window</button>
      </div>
    </div>
  </div>
</div>
{/* modal 6 */}
<div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl py-5">
    
    <div className="modal-content">
    <button type="button" className={`${portStyle.closeColor} btn-close ms-auto me-3 mt-3 fa-2x`} data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="modal-header d-flex flex-column">
      <h1 className={`${portStyle.model_head}`}>Submarine</h1>
          <div className='d-flex justify-content-center align-items-center mt-3 '>
        <div className={`${portStyle.line} text-white`}></div>
        <li className={`${portStyle.starColor} fa fa-star fa-2x  mx-4`}></li>
           <div className={`${portStyle.line}`}></div>
      </div>       
      </div>

      <div className="modal-body d-flex justify-content-center">
        <img src={portImg6} className='w-75' alt="" />
      </div>
      <p className='text-center px-5 w-75  mx-auto text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      <div className="modal-footer d-flex justify-content-center">
        <button type="button" className={`${portStyle.closeBtn} btn text-white pe-3`}  data-bs-dismiss="modal"><i className='fa fa-solid fa-close me-2'></i> Close Window</button>
      </div>
    </div>
  </div>
</div>



        </div>
      </div>



      
    </>
  )
}