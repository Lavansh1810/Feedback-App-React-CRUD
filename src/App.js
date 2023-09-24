import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
// import FeedbackData from "./data/FeedbackData"
import { useState } from "react"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutPageLink from "./AboutPageLink";
import {FeedbackProvider} from "./context/FeedbackContext";

function App()
{

    // const [feedback,setFeedback] = useState(FeedbackData);

    // const addFeedback = (newFeedback) =>
    // {
    //     newFeedback.id = uuidv4();
    //     setFeedback([newFeedback,...feedback]);
    // }
    
    // const deleteFeedback = (id) =>
    // {
    //     if(window.confirm("Are you sure you want to delete this feedback?"))
    //     setFeedback(feedback.filter((item) => (item.id !== id)))
    // }

    return(
        <>
            <FeedbackProvider>
            <Router>
                <Header/>   
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <div className="container">
                                {/* <FeedbackForm handleAdd={addFeedback}/> */}
                                <FeedbackForm />
                                {/* This is without context
                                    <FeedbackStats list={feedback} /> 
                                */}
                                <FeedbackStats/>
                                {/* 
                                    This was without context.
                                    <FeedbackList 
                                    list={feedback} 
                                    handleDelete={deleteFeedback}
                                    /> 
                                */}
                                <FeedbackList />
                            </div>
                            <AboutPageLink />
                        </>
                    } />
                    
                    <Route exact path='about' element={
                        <AboutPage />
                    } />
                </Routes>
                
            </Router>
            </FeedbackProvider>
           
        </>
    ) 
    
}

export default App