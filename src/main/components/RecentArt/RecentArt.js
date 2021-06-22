import React, { useMemo } from "react";
import Chip from "../Chip";
import { LinkButton, ButtonVariants } from "../../../components/Button";
import ArtCard from "../ArtCard";
import { raribleIcon, dogecoinIcon } from "../../assets";
import "./styles.css";

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
      <div className="recent-art__art-info">
        <div className="recent-art__chips">{chips}</div>
        <div className="recent-art__info">
          <div className="recent-art__title">Dogecoin Prediction Ball</div>
          <div className="recent-art__description">
            Woof woof, traveler! The NFT token includes personal prediction that will at least bring a smile. No time to
            hesitate, to the moon!
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
        <div className="recent-art__team-text">
          We are glad to present you our first work in a series of utility NFT projects! The work is done in the style
          of a very promising currency of the future: Dogecoin. The number of copies is strictly limited. This
          guarantees the unique value of this piece art. Woof woof!
        </div>
      </div>
      <div className="recent-art__card">
        <ArtCard />
      </div>
    </div>
  );
};

export default RecentArt;
