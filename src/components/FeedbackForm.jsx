import React, {useState} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {
   const [text, setText] = useState('');
   const [rating, setRating] = useState(10);

   const handleTextChange = (e) => {
      setText(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (text.trim().length > 10) {
         const newFeedback = {
            text: text,
            rating: rating,
         };
         handleAdd(newFeedback);
         setText('');
      }
   };

   return (
      <Card>
         <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className='input-group'>
               <input
                  onChange={handleTextChange}
                  type='text'
                  placeholder='Write a review'
                  value={text}
               />
               <Button type='submit' isDisabled={text.trim().length < 10}>
                  Send
               </Button>
            </div>

            {text && text.trim().length < 10 && (
               <div className='message'>
                  Text must be at least 10 characters
               </div>
            )}
         </form>
      </Card>
   );
}

export default FeedbackForm;
