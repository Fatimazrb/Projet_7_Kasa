import './host.scss';

import React from "react";

function Host ({host}) {
    const HostSplited = host.name.split(' ');
    const [name, lastname] = HostSplited;

    return (
        <div className="host">
          <div className="host__name">
            <p className="host__firstname">{name.trim()}</p>
            <p>{lastname.trim()}</p>
          </div>
    
          <img src={host.picture} alt="" className="host__picture" />
        </div>
      );

}

export default Host;