import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>
{

    const [list,setList] = useState(
        FeedbackData
    );

    const [editFeed,setEditFeed] = useState({
        item:{},
        edit:false
    }
    )

    const addFeedback = (newFeedback) =>
    {
        newFeedback.id = uuidv4();
        setList([newFeedback,...list]);
    }
    
    const deleteFeedback = (id) =>
    {
        if(window.confirm("Are you sure you want to delete this feedback?"))
        setList(list.filter((item) => (item.id !== id)))
    }

    const editFeedback = (item) =>
    {
        setEditFeed(
            {
                item,
                edit:true
            }
        )
    }

    const updateFeedback = (id,updItem) =>
    {
        setList(list.map((item) => item.id===id ? {...item,...updItem} : item));
    }


    return <FeedbackContext.Provider 
        value={{list,editFeed,addFeedback,deleteFeedback,editFeedback,updateFeedback}}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext