import React, { Component } from 'react'

export default class SearchArea extends Component {

   

    render() {
        return (
            <div>
                <section>
                    <form>
                        <input placeholder="Search Here..." onChange={this.props.setSearchedValue}></input>
                        <button>Search</button>
                    </form>
                </section>
            </div>
        )
    }
}
