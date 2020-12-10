import React from 'react'
import './get-latest.css'

const GetLatestUpdates = ()=>{
  return (
    <section class="latest-update-sec">
      <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="latest-update-box text-center">
                <div class="circle-1"></div>
                <div class="circle-2"></div>
                <div class="circle-3"></div>
                <div class="circle-4"></div>
                 <h4>Get the Latest Updates</h4>
                  <p>We’ll send you updates about our special offers</p>
                  <form class="input-group">
                    <input type="text" class="form-control" placeholder="Your email address" />
                    <div class="submit-btn">
                      <button class="btn thm-btn thm-btn-org" type="button" id="button-addon2">Submit</button>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default GetLatestUpdates
