import React from "react";
import Card from "../../../notFound/components/Card/Card";
import "./styles.css";

const ErrorCard = ({ cardTitle, mainText, helpText }) => {
  return (
    <Card title={cardTitle} className="error-card">
      <div className="error-card__content">
        <div className="error-card__error">
          <span className="error-card__error-title">{mainText}</span>
          <span className="error-card__error-subtitle">{helpText}</span>
        </div>
      </div>
    </Card>
  );
};

export default ErrorCard;
