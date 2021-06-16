import React, { useMemo } from "react";
import Chip from "../Chip";
import raribleIcon from "../../assets/rarible-icon.png";
import dogecoinIcon from "../../assets/dogecoin-icon.png";
import "./styles.css";
import { LinkButton, ButtonVariants } from "../../../components/Button";

const TAGS = [
  { value: "HOT DROP", img: "🔥" },
  { value: "Art", img: "🌈" },
  { value: "Dogecoin", img: dogecoinIcon },
  { value: "Rarible", img: raribleIcon },
];

const RecentArt = () => {
  const chips = useMemo(() => {
    return TAGS.map((tag, index) => {
      return <Chip key={index} img={tag.img} text={tag.value} />;
    });
  }, []);

  return (
    <div className="recent-art">
      <div>
        <div className="recent-art__chips">{chips}</div>
        <div className="recent-art__info">
          <div className="recent-art__title">Dogecoin Prediction Ball</div>
          <div className="recent-art__description">
            The NFT token includes personal prediction that will at least bring a smile. No time to hesitate, to the
            moon!
          </div>
        </div>
        <div className="recent-art__actions">
          <div className="recent-art__actions-item">
            <LinkButton href="#toRaribleBuy" value="Buy for 0.6 ETH" />
          </div>
          <div className="recent-art__actions-item">
            <LinkButton
              className="recent-art__actions-item"
              href="#toRaribleBid"
              value="Place a bid"
              variant={ButtonVariants.secondary}
            />
          </div>
        </div>
      </div>
      <div className="recent-art__card">
        <div>CARD</div>
      </div>
    </div>
  );
};

export default RecentArt;
