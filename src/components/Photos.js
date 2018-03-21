import React from "react";
import PropTypes from "prop-types";

const Photos = ({ photos }) => (
  <ul>
    {/* map through photos fetched and render images */}
    {photos.map(({ id, farm, server, secret }) => (
      <li key={id}>
        <img
          src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
          alt=""
        />
      </li>
    ))}
  </ul>
);

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
