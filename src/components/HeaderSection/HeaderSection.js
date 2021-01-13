import React, { Component } from 'react'
import './HeaderSection.css'

export default class HeaderSection extends Component {
    render() {
        return (
            <div>
                <section className="headerSection">
                    <div className="title">
                        <h1>Welcome To Movie Search!</h1>
                    </div>
                    <div className="navButtons">
                        <form>
                            <button>Login</button>
                            <button>Signup</button>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}
