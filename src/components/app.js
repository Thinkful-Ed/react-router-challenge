import React from 'react';
import {Route} from 'react-router-dom';
import AboutMenu from './about-menu';

export default function App(props) {
    return (
        <div className="app">
            {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
            <Route path="/about/:meta" component={AboutMenu} />
        </div>
    );
}
