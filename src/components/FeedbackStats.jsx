import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats({}) {

    const {list} = useContext(FeedbackContext);

    let average = list.reduce((acc,cur) =>

        {
            return acc + cur.rating
        }  
        ,0
    )

    average = average/list.length;

    average = average.toFixed(1)

    return (
        <div className="feedback-stats">
        <h4>{list.length} Review{list.length!==1 && 's'}</h4>
        <h4>Average : {isNaN(average) ? 0 : average} </h4>
        </div>
    )
}

export default FeedbackStats
