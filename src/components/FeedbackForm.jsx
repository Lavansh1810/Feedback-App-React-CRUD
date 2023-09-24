import Button from "../shared/Button";
import Card from "../shared/Card"
import { useContext, useEffect, useState } from "react"
import RatingSelect from "./RatingSelect";
import { Context } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm({}) {

    const [text,setText] = useState('');
    const [rating,setRating] = useState(10);
    const [message,setMessage] = useState('');
    const [boolean,setBoolean] = useState(true);

    const {addFeedback,editFeed,updateFeedback} = useContext(FeedbackContext)

    useEffect(() =>
        {
            if(editFeed.edit === true)
            {
                setBoolean(false);
                setText(editFeed.item.text);
                setRating(editFeed.item.rating);
            }
        },[editFeed]
    )

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if(text.trim().length>10)
        {
            const newFeedback = {
                text : text,
                rating : rating
            }

            if(editFeed.edit === false)
            addFeedback(newFeedback);
            else
            {
                updateFeedback(editFeed.item.id,newFeedback);
            }

            setRating(10);
            setText('');
        }
    }

    const handleTextChange = (e) =>
    {
        
        const mess = document.getElementById('review').value;
        
        setText(mess);

        if(mess==='')
        {
            setBoolean(true);
            setMessage(null);
        }
        else if(mess!=='' && mess.trimEnd().length<=10)
        {
            setBoolean(true);
            setMessage('Text must be at least 10 characters.');
        }
        else
        {
            setBoolean(false);
            setMessage(null);
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select = {(rating) => {setRating(rating)}} selected={rating}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a review." onChange={handleTextChange} id="review" value={text}/>
                    <Button isDisabled={boolean}>Click</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
