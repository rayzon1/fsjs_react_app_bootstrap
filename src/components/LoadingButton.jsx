import React, { useState } from "react";
import { Button } from "react-bootstrap";
import image from "./images/check-mark-png.png";

const LoadingButton = props => {
  const [isLoading, setLoading] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  
  const simulateNetworkRequest = () => {
    return new Promise(resolve => setTimeout(resolve, 2000));
  };

  const handleClick = () => {
    setLoading(true);
    simulateNetworkRequest()
      .then(() => setLoading(false))
      .then(() => {
        return (props.cardRef.current.style.boxShadow =
          "1px 1px 6px green inset");
      })
      .then(() => setHideButton(true));
  };

  return (
    <div>
        <img src={image} className={hideButton ? "check-mark" : "hidden"} alt="" />
        <Button
            variant="success"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
            className={props.isHidden ? "" : "hidden"}
            hidden={hideButton}
            block
        >
            {isLoading ? "Loading…" : "Complete"}
        </Button>
    </div>
  );
};

export default LoadingButton;
