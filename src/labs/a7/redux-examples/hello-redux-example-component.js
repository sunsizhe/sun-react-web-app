import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    //extract hello world from reducer
    const message = useSelector((state) => state.hello.message);
    return(
        <h3>{message}</h3>
    );
};

export default HelloReduxExampleComponent;