import React, { Component } from 'react'

class Dropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                        <span>Click me</span>
                        <span className="icon is-small">
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">
                        <a href="#" className="dropdown-item">Overview</a>
                        <a href="#" className="dropdown-item">Modifiers</a>
                        <a href="#" className="dropdown-item">Grid</a>
                        <a href="#" className="dropdown-item">Form</a>
                        <a href="#" className="dropdown-item">Elements</a>
                        <a href="#" className="dropdown-item">Components</a>
                        <a href="#" className="dropdown-item">Layout</a>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Dropdown;

