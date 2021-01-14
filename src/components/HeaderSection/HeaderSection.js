import React, { Component } from 'react'
import './HeaderSection.css'

export default class HeaderSection extends Component {
    render() {
        return (
            <div className="headerSection">
                
                    <div className="title">
                        <h1>The Shoppies</h1>
                        <p>Like the Dundees, but for movies.</p>
                    </div>
                    <div className="navButtons">
                        <form>
                            <button>Login</button>
                            <button>Signup</button>
                        </form>
                    </div>
                
            </div>
        )
    }
}
