import React from 'react'
import FooterStyle from './footer.module.css'


export default function footer() {
  return (
    <>
        <div className={`${FooterStyle.footerBg}`}>


        <div className={`${FooterStyle.footer_width} mx-auto`}>
        <div className="row">

            <div className="col-lg-4">
                <div className="footer_item py-5">
                    <h2 className={`text-center text-white py-3 ${FooterStyle.text_header}`}>LOCATION</h2>
                    <p className='text-white text-center'>2215 John Daniel Drive
                        <br/>
                        Clark, MO 65243</p>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="footer_item py-5">
                <h2 className={`text-center text-white py-3 ${FooterStyle.text_header}`}>AROUND THE WEB</h2>
                <div className={`${FooterStyle.icon_container} d-flex justify-content-center align-items-center `}>

                    <div className='d-flex gap-3 mt-3'>

                    <div className={`${FooterStyle.icon}`}>
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className={`${FooterStyle.icon}`}>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div className={`${FooterStyle.icon}`}>
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className={`${FooterStyle.icon}`}>
                    <i class="fa-brands fa-dribbble"></i>
                    </div>


                    </div>




                </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="footer_item py-5">
                    <h2 className={`text-center text-white py-3 ${FooterStyle.text_header}`}>ABOUT FREELANCER</h2>
                    <p className='text-white text-center'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>
            </div>

        </div>
    </div>



        </div>

       <div className={`${FooterStyle.bottomOfPage} text-white text-center py-3`}>Copyright © Your Website 2021</div>

    </>
  )
}
