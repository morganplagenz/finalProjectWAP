import React from 'react';
import ReminderPost from './RemindersPost';
import RemindersFetch from './RemindersFetch';


export default function ReminderList(){


    return(
        <div className="container">
  
            <ReminderPost  />
            <br />
            <h4 className="m-3 pt-4">Upcoming Tasks</h4>
            <br />
            <RemindersFetch  />
        </div>
    );
};