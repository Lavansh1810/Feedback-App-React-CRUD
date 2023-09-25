import { createContext,useState,useEffect } from "react";
// import {v4 as uuidv4} from 'uuid'
// import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>
{
    const [isLoading,setIsLoading] = useState(true)

    const [list,setList] = useState(
        []
    );

    const [editFeed,setEditFeed] = useState({
        item:{},
        edit:false
    }
    )

    const addFeedback = async(newFeedback) =>
    {
        // newFeedback.id = uuidv4();
        // setList([newFeedback,...list]);

        const response = await fetch(`/feedback`,
            {
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(newFeedback),
            }
        )
        
        const data = await response.json();
        // console.log(data);
        setList([data,...list]);     
    }
    
    const deleteFeedback = async(id) =>
    {
        // if(window.confirm("Are you sure you want to delete this feedback?"))
        // setList(list.filter((item) => (item.id !== id)))

        
        // const data = await response.json()
        
        // console.log(data);
        
        if(window.confirm("Are you sure you want to delete this feedback?"))
        {

            const response = await fetch(`/feedback/${id}`,
                {
                    method:'DELETE',
                }
            )
            setList(list.filter((item) => (item.id !== id)))
            // fetchList();
        }
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

    const updateFeedback = async(id,updItem) =>
    {
        // setList(list.map((item) => item.id===id ? {...item,...updItem} : item));

        const response = await fetch(`/feedback/${id}`,
            {
                method:'PUT',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(updItem),
            }
        )
        
        const data = await response.json();

        setList(list.map((item) => item.id===id ? {...item,...data} : item));
    }

    useEffect(()=>
    {
        fetchList();
    },[])

    const fetchList = async() =>
    {
        const response = await fetch(`/feedback?_sort=id&_order=desc`);

        const data = await response.json()

        setList(data);
        setIsLoading(false);
    }


    return <FeedbackContext.Provider 
        value={{list,editFeed,isLoading,addFeedback,deleteFeedback,editFeedback,updateFeedback}}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext