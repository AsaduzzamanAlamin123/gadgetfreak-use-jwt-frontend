import Container from 'react-bootstrap/Container';
import {  signOut } from 'firebase/auth';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

function ColorSchemesExample() {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Gadget Freak</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='text-decoration-none ms-3 text-danger' to='/'>Home</Link>
            <Link className='text-decoration-none ms-3 text-danger' to='/product'>Product</Link>
            <Link className='text-decoration-none ms-3 text-danger' to='/upproduct'>Upload Product</Link>
            <Link className='text-decoration-none ms-3 text-danger' to='/orderlist'>Order List</Link>
            {/* {
              user ? <button className='btn btn-outline-danger mb-3 ms-2' onClick={logout}>{user.displayName} Logout</button>
              :
              <Link className='text-decoration-none ms-3 text-danger' to='/login'>Log in</Link>
            } */}
             
           
          </Nav>
          <Nav className="ms-auto">
             {
              user ? <button className='btn btn-outline-danger mb-3 ms-2' onClick={logout}>{user.displayName} Logout</button>
              :
              <Link className='text-decoration-none ms-3 text-danger' to='/login'>Log in</Link>
            }

             </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default ColorSchemesExample;