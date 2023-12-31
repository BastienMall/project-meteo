import React from 'react';
import mapContent  from './MapComponent.html';


const MapComponent = () => {
  return <div dangerouslySetInnerHTML={{ __html: mapContent  }} />;
};

export default MapComponent;
