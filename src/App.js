import {useState} from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import Card from './components/shared/Card';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuiv4} from 'uuid';

const App = () => {
   const [feedback, setFeedback] = useState(FeedbackData);

   const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delete?')) {
         setFeedback(feedback.filter((item) => item.id !== id));
      }
   };

   const addFeedback = (newFeedback) => {
      newFeedback.id = uuiv4(); //Using UUID to create ID to an Object
      setFeedback([newFeedback, ...feedback]);
   };

   return (
      <>
         <Header />
         <div className='container'>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
         </div>
      </>
   );
};

export default App;
