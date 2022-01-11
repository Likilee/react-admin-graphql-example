import * as React from 'react';
import { Component } from 'react';
import buildGraphQLProvider from 'ra-data-graphql';
import { Admin, ListGuesser, ReferenceField, Resource, TextField } from 'react-admin';
import buildQuery from './buildQuery'; // see Specify your queries and mutations section below
import { UserList, UserEdit } from './entity/users';
import { MessageList } from './entity/messages';
import { CodeList } from './entity/code';

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildGraphQLProvider({
            buildQuery,
            clientOptions: {
                uri: 'http://localhost:30000/graphql',
        }, })
            .then(dataProvider => this.setState({ dataProvider }));
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }
        // console.log(dataProvider)
        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="User" list={UserList} edit={UserEdit}/>
                <Resource name="Code" list={CodeList}/>
                <Resource name="Message" list={MessageList}/>
            </Admin>
        );
    }
}

export default App;