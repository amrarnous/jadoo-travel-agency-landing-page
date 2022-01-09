import styled from "styled-components";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <AppContainer>
        <Navbar />
        <Home></Home>
      </AppContainer>
    </div>
  );
}
const AppContainer = styled.div``;
export default App;
