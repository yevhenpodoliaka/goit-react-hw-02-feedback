const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total > 0) {
    return (
      <div>
        <p className="">good : {good}</p>
        <p className="">neutral : {neutral}</p>
        <p className="">bad : {bad}</p>
        <p className="">Total : {total}</p>
        <p className="">
          Positive feedback : {positivePercentage ? positivePercentage : 0} %
        </p>
      </div>
    );
  }
};

export default Statistics;
