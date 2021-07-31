import React from 'react';
import OrderTwo from './OrderFetch';
import OrderPost from './OrderPost';

// the parent to the order 'create' form, and the order 'get' list
export default function OrderList(){

    return(
        <div className="container">
  
            <OrderPost />
            <br />
            <h4 className="m-3 pt-4">Approved Orders</h4>
            <br />
            <OrderTwo  />
        </div>
    );
};