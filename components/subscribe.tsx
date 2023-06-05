import React from 'react';
import Image from "next/image";
const Subscribe: React.FC  = ()=>{
    return (
        <section className="bg-subscribe">
        <div className="container">
          <div className="row pt-md-5 pb-5 align-items-end d-flex">
            <div className="col-md-6">
              <h2 className="com-head-1 mb-0">
                Subscribe <br /> For Conference Updates
              </h2>
            </div>
            <div className="col-md-6 pt-3 pt-md-0">
              <form className="d-flex">
                <input
                  type="email"
                  placeholder="Enter Your email "
                  id="email"
                />
                <div className="arr-img">
                  <img src="public/images/arrow-down.png" alt=""/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 text-center ">
          <img src="public/images/sub.png" className="img-fluid" alt=""/>
        </div>
      </section>
    )
}
export default Subscribe;