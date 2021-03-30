import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import Header from './Components/Header';
import Content from './Components/Content';


function App() {
  return (
    <Wrapper>

      {/* Header */}
      <Header></Header>
      {/* Posts */}

      <Content></Content>
      {/* Posts */}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  background-color: rgb(250, 243, 243);    
  *{
    margin: 0;
  }
`