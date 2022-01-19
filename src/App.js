import React from 'react'
import {Link , Route} from 'react-router-dom'
import Home from './Home'
import ApplicationForm from './ApplicationForm'
import AdminDashboard from './AdminDashBoard'

export default function App(props){

    return(<div>
        <h1>User Job Application </h1>
        <Link to='/'>Home</Link> |
        <Link to = '/form'>Application_Form</Link> |
        <Link to ='/dashboard'>Admin Dashboard</Link>

        <Route path = '/form' component={ApplicationForm}/>
        <Route path = '/dashboard' component ={AdminDashboard}/>
        <Route path = '/' component ={Home} exact ={true}/>
    </div>)
}