import React from "react";

const Avatar = ({ height, width, src, alt }) => {
  return (
    <div className="avatar">
      <img height={height} width={width} src={src} alt={alt} />
    </div>
  );
};

Avatar.defaultProps = {};

export default React.memo(Avatar);
