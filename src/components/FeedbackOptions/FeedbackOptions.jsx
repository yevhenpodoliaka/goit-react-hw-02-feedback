import s from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.wrap}>
      {' '}
      {options.map(key => (
        <button key={key} type="button" name={key} onClick={onLeaveFeedback}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
