import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`;

const SwitchTheme = styled.div`
  display: flex;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const App = () => {
  return (
    <React.Fragment>
      <SwitchTheme>
        <h1>Theme App</h1>
        <p>
          <input type="checkbox" /> 
        </p>
      </SwitchTheme>
      <Container>
        <h2>Welcome!</h2>
        <h3>Full Stack Web Development</h3>
      </Container>
    </React.Fragment>
  )
};

export default App;