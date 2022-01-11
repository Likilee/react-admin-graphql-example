// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField, DateField, Edit, SimpleForm, TextInput, NumberField, ReferenceField } from 'react-admin';

export const MessageList = props => (
    <List {...props} pagination={false}>
        <Datagrid rowClick="edit">
						<ReferenceField label="User" source="userId" reference="User">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="textMessage" />
						<NumberField source="chatChannelId" />
						<DateField source="created_at" />
            {/* <TextField source="id" /> */}
            {/* <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" /> */}
        </Datagrid>
    </List>
);