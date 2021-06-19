import React from "react";

const Avatar = ({ height, width, src, alt }) => {
  return (
    <div className="avatar">
      <picture>
        <source src={src} />
        <img height={height} width={width} src={src} alt={alt} />
      </picture>
    </div>
  );
};

Avatar.defaultProps = {};

export default Avatar;
