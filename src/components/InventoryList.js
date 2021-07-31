import React from 'react';
import InventoryPost from './InventoryPost';
import InventoryFetch from './InventoryFetch';


export default function ReminderList(){


    return(
        <div className="container pb-5">
            <InventoryPost  />
            <br />
            <br />
            <InventoryFetch  />
        </div>
    );
};