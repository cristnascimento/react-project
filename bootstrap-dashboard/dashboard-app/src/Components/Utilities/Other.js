import React from 'react';
import Dropdown from './Dropdown';
import Overflow from './Overflow';
import Progress from './Progress';

const Other = (props) => {
    return (
      <div className="container-fluid">
      {/* Begin Page Content */}

        {/* Page Heading */}
        <h1 className="h3 mb-1 text-gray-800">Other Utilities</h1>
        <p className="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

        {/* Content Row */}
        <div className="row">

          <div className="col-lg-6">
            <Overflow/> 
            <Progress/>
            <Dropdown/>  
          </div>

          <div className="col-lg-6">

            {/* Roitation Utilities */}
            <div className="card">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Rotation Utilities</h6>
              </div>
              <div className="card-body text-center">
                <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">.rotate-15</div>
                <hr/>
                <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">.rotate-n-15</div>
              </div>
            </div>

          </div>

        </div>
      {/* /.container-fluid */}
      </div>
              
    );
}

export default Other;