import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App              from './components/App';
import HomePage         from './components/HomePage';
import AddCategoryPage  from './components/AddCategoryPage';
import ShowItemPage     from './components/ShowItemPage';
import AddItemPage      from './components/AddItemPage';

export default (
    <App>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/addCategory"            component={AddCategoryPage} />
            <Route exact path="/category/:id/showItem"  component={ShowItemPage} />
            <Route exact path="/category/:id/addItem"   component={AddItemPage} />
        </Switch>
    </App>
)