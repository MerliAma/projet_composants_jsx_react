import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Figure from 'react-bootstrap/Figure';

let NomUser=prompt("Votre nom SVP:") || "ici"


function App() {
  
  const [show, setShow] = useState(true);

  return (
    <div className="App bg-success-subtle p-3 h-100">

      <Card style={{ width: '20rem' }} className="mx-auto">
        <Image/>
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text className='d-flex flex-column'>
            <Description />
            <Price />
          </Card.Text>
          <Button variant="primary">Voir Plus</Button>
        </Card.Body>
      </Card>

      {/* Affiche le nom de l'utilisateur et une image */}
      <Alert show={show} variant="success" style={{ width: '30rem' }} className='mx-auto mt-3' > 
        <div className='d-flex align-content-center justify-content-between py-3 align-items-center'>
          <Alert.Heading className='mb-1 fs-2'>Bonjour, {NomUser} !</Alert.Heading>
          {
            (NomUser!=="ici") &&
            <Figure>
              <Figure.Image
                width={171}
                height={150}
                alt="Bienvenue"
                src="ImgBienvenue.jpg"
              />
          </Figure>
          }
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Fermer
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </div>
    
  );
}

export default App;
