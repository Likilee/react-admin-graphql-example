import React, { useState, useEffect } from "react";
import buildGraphQLProvider from "ra-data-graphql";
import { DataProvider } from "ra-core";
import { Admin } from "react-admin";
import buildQuery from "./buildQuery";
export default function AdminPage(): JSX.Element {
  const [dataProvider, setDataProvider] = useState<null | DataProvider>(null);

  useEffect(() => {
    buildGraphQLProvider({
      buildQuery,
      clientOptions: {
        uri: "http://api.ts.io:30000/graphql",
      },
    }).then((dataProvider) => setDataProvider(dataProvider));
  }, []);

  return dataProvider ? (
    <Admin dataProvider={dataProvider}>
      <Resource name="User" list={UserList} edit={UserEdit} />
      <Resource name="Code" list={CodeList} />
      <Resource name="Message" list={MessageList} />
    </Admin>
  ) : (
    <div>Loading</div>
  );
}
