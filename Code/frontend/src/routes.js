import React from 'react'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

import Home from '../src/pages/home'

export default props => {

    return(
        <BrowserRouter>
            <Route to="/" exact component={Home}/>
            <Redirect from="*" to="/"/>
        </BrowserRouter>

    )
}



