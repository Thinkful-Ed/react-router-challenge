import React from 'react';
import AboutMenu from './about-menu';
import {hot} from "react-hot-loader";

class App extends React.Component {
    render () {
        return (
            <div className="app">
                {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
                <AboutMenu />
            </div>
        );
    }
}

export default hot(module)(App);