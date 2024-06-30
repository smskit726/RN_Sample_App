import React from "react";
import {DataProvider} from "./contexts/context";
import {AppNavigator} from "./navigation/AppNavigator.tsx";

const App = () => {
    return (
        <DataProvider>
            <AppNavigator />
        </DataProvider>
    );
}

export default App;