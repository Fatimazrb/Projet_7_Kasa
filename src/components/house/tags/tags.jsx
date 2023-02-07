import React from'react';
import './tags.scss';

function Tags ({getTag}) {
    return (
        <div>
          <p className="tag">{getTag}</p>
        </div>
      );
}

export default Tags;