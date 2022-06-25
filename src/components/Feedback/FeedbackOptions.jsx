const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(key => (
    <button key={key} type="button" onClick={() => onLeaveFeedback(key)}>
      {key}
    </button>
  ));
};

export default FeedbackOptions;
