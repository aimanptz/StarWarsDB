import React, {Component} from 'react';
import './header.scss';

export default class Header extends Component {
    
    render() {
        return (
            <div className="header d-flex">
                <h1>Star DB</h1>
                <nav>
                    <ul className="nav d-flex">
                        <li className="nav__item">
                            <a href="#" className="nav__link">People</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Planets</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Starships</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}