import React, { Component } from 'react'

export default class HeaderSection extends Component {
    render() {
        return (
            <div>
                <section id="header-section">
                    <div id="title">
                        <h1>Welcome To Movie Search!</h1>
                    </div>
                    <div id="nav-btns">
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
