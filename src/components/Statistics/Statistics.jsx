import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.wrap}>
      <p className={s.text}>good : {good}</p>
      <p className={s.text}>neutral : {neutral}</p>
      <p className={s.text}>bad : {bad}</p>
      <p className={s.text}>Total : {total}</p>
      <p className={s.text}>
        Positive feedback : {positivePercentage ? positivePercentage : 0} %
      </p>
    </div>
  );
};

export default Statistics;
