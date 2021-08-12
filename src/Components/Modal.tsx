import ContactModel from '../Models/ContactModel';
import Styles from './modal.module.css';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import ImagesPool from '../Models/ImagesPool';

interface Props {
  display: number;
  close: () => void;
  users: ContactModel[];
}

const Modal = (props: Props) => {
  const closeWindow = (e: any) => {
    e.stopPropagation();
    props.close();
  }

  if (props.display === -1) {
    return null;
  }

  console.log(props.display);
  return (
    <div className="modal-view">

      <div className={Styles.modalContent}>
        <Container>
          <Row>
            <Col xs="5">
              <img src={ImagesPool[props.display]} className={Styles.image} alt="" />
            </Col>
            <Col className={Styles.text}>
              <Row>
                <div className={Styles.modalHeader}>
                  <div>{props.users[props.display].name}</div>
                </div>
              </Row>
              <Row>
                <Col>User name:</Col>
                <Col>
                  <Row>{props.users[props.display].username}</Row>
                </Col>
              </Row>
              <Row>
                <Col>Phone:</Col>
                <Col>
                  <Row>{props.users[props.display].phone}</Row>
                </Col>
              </Row>
              <Row>
                <Col>Email:</Col>
                <Col>
                  <Row>{props.users[props.display].email}</Row>
                </Col>
              </Row>
              <Row>
                <Col>Website:</Col>
                <Col>
                  <Row>{props.users[props.display].website}</Row>
                </Col>
              </Row>
              <Row>
                <Col>Address:</Col>
                <Col>
                  <Row>{props.users[props.display].address.suite}</Row>
                  <Row>{props.users[props.display].address.street}</Row>
                  <Row>{props.users[props.display].address.city}</Row>
                  <Row>{props.users[props.display].address.zipcode}</Row>
                </Col>
              </Row>
              <Row>
                <Col>Company:</Col>
                <Col>
                  <Row>{props.users[props.display].company.name}</Row>
                  <Row>{props.users[props.display].company.bs}</Row>
                  <Row>{props.users[props.display].company.catchPhrase}</Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Button
          size="lg"
          className={Styles.closeBtn}
          onClick={(e) => {closeWindow(e)}}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
