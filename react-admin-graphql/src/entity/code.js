import * as React from "react";
import { List, Datagrid, TextField, ChipField } from 'react-admin';

export const CodeList = props => (
    <List {...props} pagination={false}>
        <Datagrid rowClick="edit">
						<ChipField source="group" />
						<TextField source="id" />
						<TextField source="label_korean" />
						<TextField source="label_english" />
            {/* <TextField source="id" /> */}
            {/* <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" /> */}
        </Datagrid>
    </List>
);