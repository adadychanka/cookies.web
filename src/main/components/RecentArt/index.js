import React from "react";

const RecentArt = () => {
  return (
    <div className="recent-art">
      <div className="recent-art__info">
        <div>
          <div className="recent-art__title">Title</div>
          <div className="recent-art__description">Description</div>
        </div>
        <div>
          <button>
            <a href="#toRarible">Buy on Rarible</a>
          </button>
        </div>
      </div>
      <div className="recent-art__card">
        <div>CARD</div>
      </div>
    </div>
  );
};

export default RecentArt;
