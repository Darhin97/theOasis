import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis </H1>;<Button>Check in</Button>
        <Button>Check out</Button>
        <Input type="number" placeholder="number of guest" />
        <Input type="number" placeholder="number of guest" />
      </StyledApp>
    </>
  );
};

export default App;
