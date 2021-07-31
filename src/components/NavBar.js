import React from 'react';
import { Container, Nav, Navbar, Badge } from 'react-bootstrap';
import sitelogo from '../img/sitelogo.png'
import '../App.css'
import OrderList from './OrderList'
import ReminderPost from './RemindersPost'
import RemindersFetch from './RemindersFetch'
import InventoryList from './InventoryList'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import ProductionSchedule from './ProductionSchedule';
import Cards from './Homepage';


export default function NavMenu(){

    return(
    <div>
        <Router>
        <Navbar  bg="dark" variant="dark">
            <Container className="container-fluid">
            <Navbar.Brand href="#home">
                <img src={sitelogo}
                />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/" exact className="tab-spacing card-home">Home</Nav.Link>
                <Nav.Link href="/create-and-view-orders" exact className="tab-spacing card-yellow">Orders</Nav.Link>
                <Nav.Link href="/view-production-schedule" exact className="tab-spacing card-orange">Production Schedule</Nav.Link>
                <Nav.Link href="/inventory" exact className="tab-spacing card-green">Inventory</Nav.Link>
                <Nav.Link href="/view-and-set-reminders" exact className="tab-spacing reminders card-blue">Reminders<Badge className="badge-button">!</Badge></Nav.Link>
            </Nav>
            </Container>
            </Navbar>
            <Switch>
                <Route path="/" exact>
                    <Cards />
                </Route>
                <Route path="/create-and-view-orders" exact>
                    <OrderList />
                </Route>
                <Route path="/view-production-schedule" exact>
                    <ProductionSchedule />
                </Route>
                <Route path="/inventory" exact>
                    <InventoryList />
                </Route>
                <Route path="/view-and-set-reminders" exact>
                    <ReminderPost />
                    <RemindersFetch />
                </Route>
            </Switch>
        <br />
        </Router>
  </div>
    );
}
