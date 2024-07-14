// MyContext.js
import React from 'react';

const Context = React.createContext();

const Provider = (props) => {
  return (
    <Context.Provider value={props.store}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };
