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
  *{
    margin: 0;
  }
`