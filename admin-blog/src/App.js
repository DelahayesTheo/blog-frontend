import React from 'react';

import { Admin, Resource } from 'admin-on-rest';
import restClient from './restClient';

import { PostList, PostEdit, PostCreate } from './posts';
import {PortfolioList, PortfolioEdit, PortfolioCreate } from './portfolios';

const App = () => ( 
<Admin restClient={restClient}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
    <Resource name="portfolios" list={PortfolioList} edit={PortfolioEdit} create={PortfolioCreate}/>
</Admin>
);

export default App;
