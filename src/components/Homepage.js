import React from 'react';
import phoneNeon from '../img/phone-neon.png'
import ToDoNeon from '../img/to-do-neon.png'
import ProductionNeon from '../img/production-neon.png'
import InventoryNeon from '../img/inventory-neon.png'
import '../App.css'
import OrderList from './OrderList'
import ProductionSchedule from './ProductionSchedule'
import ReminderList from './ReminderList'
import { Nav, Card } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

export default function Cards() {

    return(
        <Router>
        <div className="top-padding">
            <div className="row background-content">

            {/* used Nav.Link in for the cards with href path styles to accurately lead to the right page*/}
            
            <Card className="card-styles right-padding card-yellow ">
                <Nav.Link href="/create-and-view-orders" exact style={{ textDecoration: 'none', color: 'white' }}>
                    <Card.Img variant="top pt-3" src={phoneNeon} />
                    <Card.Body>
                        <Card.Title>ORDERS</Card.Title>
                    </Card.Body>
                </Nav.Link>
            </Card>
            
            <Card className="card-styles left-padding card-orange">
                <Nav.Link href="/view-production-schedule" exact style={{ textDecoration: 'none', color: 'white' }}>
                    <Card.Img variant="top pt-3" src={ProductionNeon} />
                    <Card.Body>
                        <Card.Title>PRODUCTION SCHEDULE</Card.Title>
                    </Card.Body>
                </Nav.Link>
            </Card>
            <div className="row background-content">
            <Card className="card-styles  right-padding card-green">
                <Nav.Link href="/inventory" exact style={{ textDecoration: 'none', color: 'white' }}>
                    <Card.Img variant="top pt-3" src={InventoryNeon} />
                    <Card.Body>
                        <Card.Title>INVENTORY</Card.Title>
                    </Card.Body>
                </Nav.Link>
            </Card>
            <Card className="card-styles left-padding card-blue">
                <Nav.Link href="/view-and-set-reminders" exact style={{ textDecoration: 'none', color: 'white' }}>
                <Card.Img variant="top pt-3" src={ToDoNeon}/>
                <Card.Body>
                    <Card.Title>REMINDERS</Card.Title>
                </Card.Body>
                </Nav.Link>
            </Card>
            </div>
            </div>
        </div>
        <Switch>
                <Route path="/create-and-view-orders" exact>
                    <OrderList />
                </Route>
                <Route path="/view-production-schedule" exact>
                    <ProductionSchedule />
                </Route>
                <Route path="/inventory" exact>
                    <ProductionSchedule />
                </Route>
                <Route path="/view-and-set-reminders" exact>
                    <ReminderList />
                </Route>
            </Switch>
        </Router>
    );
};