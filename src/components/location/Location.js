import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.767529971712!2d-0.13273482546897478!3d51.49948775509331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c693fca1a1%3A0xd697942be6dd609e!2sWestminster+Bridge!5e0!3m2!1sid!2sid!4v1551770126801"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
