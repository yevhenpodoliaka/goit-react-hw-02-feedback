import React from "react";

const FeedbackOptions = ({options,onLeaveFeedback}) => {
  return options.map(name => (
      <button key={name} type="button"  onClick={onLeaveFeedback}>
        {name}
      </button>))
}

export default FeedbackOptions