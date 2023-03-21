import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component"; //import component that consumes the data
import hello from "./reducers/hello";  //import reduce to generate the data
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import todos from "./reducers/todos-reducer";
import Todos from "./todos-component";

const store = configureStore(
    {
        reducer:{hello, todos}  //component in reducer
    }
);
const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;