import React, {useState, useEffect} from 'react';
import {
  Container,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardGroup,
} from 'reactstrap';
import ImagesPool from './Models/ImagesPool';
import './App.css';
import ContactModel from './Models/ContactModel';
import Modal from './Components/Modal';

export default function App() {
  const [users, setUsers] = useState<ContactModel[]>([]);
  const [display, setDisplay] = useState<number>(-1);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
          setUsers(json);
        });
  }, [setUsers]);

  const selectModal = (name: number) => {
    setDisplay(name);
  }

  const closeModal = (): void => {
    setDisplay(-1);
  };

  const mapUsers = () => {
    return users.map((u, index) => (
      <CardGroup key={index+u.id} className="cardGroup">
        <Card className="card">
          <CardImg top width="100%" src={ImagesPool[index]} alt="" />
          <CardBody>
            <CardTitle tag="h5">{u.name}</CardTitle>
            <CardSubtitle
              tag="h6"
              className="mb-2 text-muted">
                P: {u.phone}
            </CardSubtitle>
            <CardSubtitle
              tag="h6"
              className="mb-2 text-muted">
                E: {u.email}
            </CardSubtitle>
            <CardSubtitle
              tag="h6"
              className="mb-2 text-muted">
                A: {u.address.suite} {u.address.street} {u.address.city}
            </CardSubtitle>
            <Button
              size="sm"
              color="primary"
              onClick={() => {
                selectModal(index);
              }}
            >
              View
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    ));
  };

  return (
    <div className="App">
      <div className="box" id="bg">
        <div className="app-header">
          Contacts
        </div>
        <Container fluid="md">
          <Row xs="4">
            {mapUsers()}
          </Row>
        </Container>
      </div>
      <Modal
        display={display}
        close={closeModal}
        users={users}
      />
    </div>
  );
}
