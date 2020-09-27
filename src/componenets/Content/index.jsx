import React, { Component } from 'react'
import './index.scss'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

import My from "@/views/My/index"
import Friend from "@/views/Friend/index"
import Find from "@/views/Find/index"
import NotFound from "@/views/NotFound/index"

export default class Content extends Component {

    render() {
        return (
            <Router>
                <div className="main">
                    <div>
                        <Switch>
                            <Route path="/find" component={Find} />
                            <Route path="/my" component={My} />
                            <Route path="/friend" component={Friend} />
                            <Redirect exact from="/" to="/find" />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
