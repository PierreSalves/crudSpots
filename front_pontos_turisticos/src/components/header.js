import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../logo.svg';

export const Header = () => {
  return (    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>        
        <Navbar.Brand href="#home">
            <Image src={logo} fluid height={50} width={50}/>
            &nbsp; Cadastro de Pontos Turísticos
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}