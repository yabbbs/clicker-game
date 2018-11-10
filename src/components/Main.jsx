import React, { Component, Fragment } from 'react'

import Clicker from './Clicker'
import LevelUp from './LevelUp'

import '../App.css'

class Main extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <Fragment>
                <Clicker/>
                <LevelUp/>
            </Fragment>
        )
    }
}

export default Main;