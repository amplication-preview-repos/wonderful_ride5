import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SimulationList } from "./simulation/SimulationList";
import { SimulationCreate } from "./simulation/SimulationCreate";
import { SimulationEdit } from "./simulation/SimulationEdit";
import { SimulationShow } from "./simulation/SimulationShow";
import { FieldModelList } from "./fieldModel/FieldModelList";
import { FieldModelCreate } from "./fieldModel/FieldModelCreate";
import { FieldModelEdit } from "./fieldModel/FieldModelEdit";
import { FieldModelShow } from "./fieldModel/FieldModelShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FieldSimulator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Simulation"
          list={SimulationList}
          edit={SimulationEdit}
          create={SimulationCreate}
          show={SimulationShow}
        />
        <Resource
          name="FieldModel"
          list={FieldModelList}
          edit={FieldModelEdit}
          create={FieldModelCreate}
          show={FieldModelShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
