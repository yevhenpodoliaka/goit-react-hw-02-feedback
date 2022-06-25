import React from "react";

const Statistics = ({good,neutral,bad,total,positivePercentage }) => {
    return (
        <div>
            <p className="">good : { good}</p>
            <p className="">neutral : { neutral}</p>
            <p className="">bad : { bad}</p>
            <p className="">Total : { total}</p>
            <p className="">Positive feedback : { positivePercentage} %</p>
    </div>
)
}

export default Statistics