import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';


const UploadProduct = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleUpload = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        
        console.log(name , price);


        

        fetch('http://localhost:5000/uploadpd', {
  method: 'POST',
  body: JSON.stringify({
    name , price
  }),
  headers: {
    'authoraization':`${user.email} ${localStorage.getItem("accessToken")}`,
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
  event.target.reset();

    }
    return (
        <div>
            <h2 className='text-success'>UploadProduct</h2>

            <Form onSubmit={handleUpload} className='w-50 mx-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" name='name' placeholder="Product Name" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="text" name='price' placeholder="Price" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Upload
      </Button>
    </Form>

        </div>
    );
};

export default UploadProduct;