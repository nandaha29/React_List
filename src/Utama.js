import React from 'react';
import {Route, Switch} from "react-router-dom";

//call pages
import Hari from './pages/Hari';
import Belanja from './pages/Belanja';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Hari} />
        <Route path="/Hari" component={Hari} />
        <Route path="/Belanja" component={Belanja} />
    </Switch>
)
export default Utama;