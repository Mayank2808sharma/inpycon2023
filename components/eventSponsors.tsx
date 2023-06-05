import React from 'react';
import Image from "next/image";
const EventSponsors: React.FC  = ()=>{
    return (
        <section className="bg-event" id="sponsors">
        <div className="container pt-4">
          <div className="row justify-content-center align-items-center pt-5 pb-md-5">
            <div className="col-md-12">
              <h2 className="com-head">
                Event Sponsors{" "}
                <img
                  src="public/images/handshake.png"
                  alt=""
                  className="img-fluid ps-3"
                />
              </h2>
            </div>
            <div className="col-md-8">
              <p className="pt-md-5 pb-5">
                Pycon India is completely driven by volunteers. Sponsering the
                event helps to sustain and grow the conference as well as the
                Community. Sponsor help in making the conference affordable, and
                maintaing the inventory for the conference.
              </p>
            </div>
            <div className="col-md-4 pb-md-0 pb-5 text-center ">
              <button className="green-btn p-2 px-5">
                <a href="#" className="text-decoration-none text-light">
                  Download Prospectus
                </a>
              </button>
            </div>
            {/* sponsors */}
            <div className="col-md-12 m-auto sp-sor text-center pt-5">
              <div className="sponsortitle">Platinum</div>
            </div>
            <div className="row pt-5 pb-5">
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-2.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-3.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" alt=""/>
              </div>
            </div>
            <div className="col-md-12 m-auto sp-sor text-center pt-md-5">
              <div className="sponsortitle">Gold</div>
            </div>
            <div className="row pt-5 pb-5">
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-2.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-3.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default EventSponsors;