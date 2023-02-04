import {Container} from './components/styled/Container.styled'
import {Button} from './components/styled/Button.styled'
import { SplitScreen } from './SplitScreen'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    // <>
    //  <Header />
    //   <Container> 
    //     <h1>Hello</h1>
    //     <Button>Welcome</Button>
    //   </Container>
    //   <Footer />
    //   </>    
    <SplitScreen
    left={Header}
    right={Footer}/>
  );
}

export default App;
