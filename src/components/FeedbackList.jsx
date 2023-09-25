import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from "../context/FeedbackContext";
import Loading from "../shared/Loading";

function FeedbackList({}) {

    const {list,isLoading} = useContext(FeedbackContext)

    if(isLoading)
    return <Loading />

    if(!list || list.length===0)
    return "No Feedbacks Yet";

    return (

        <div className="feedback-list">
            <AnimatePresence>
            {
                list.map(
                    (item) =>
                    (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            layout
                        >

                            <FeedbackItem
                                key={item.id}
                                item={item} 
                            />

                        </motion.div>
                    )
                )
            }
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList
