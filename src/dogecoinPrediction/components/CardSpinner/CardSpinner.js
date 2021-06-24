import React from "react";
import Spinner from "../../../components/Spinner";
import "./styles.css";

const CardSpinner = ({ isLoading }) => {
  const loading = isLoading ? (
    <div className="card-spinner">
      <Spinner />
    </div>
  ) : null;

  return loading;
};

export default React.memo(CardSpinner);
