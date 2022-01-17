import Link from 'next/link';
import { useState } from 'react';
import { Col, Container, Nav, Offcanvas, Row, Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose, GrFacebook, GrGithub, GrInstagram, GrYoutube } from 'react-icons/gr';
import NavLinks from './nav-links';

export default function AppLayout({ children }) {
  const [menu, setMenu] = useState(false);
  return (
    <>

      <Offcanvas show={menu} onHide={() => setMenu(false)} placement='bottom'>

        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <NavLinks cn='justify-content-center' setMenu={setMenu} />
        </Offcanvas.Body>
      </Offcanvas>

      {children}

      <footer className="bg-dark mt-5">
        <Container>
          <Row className="footer-row pt-5 pb-5 text-white text-center text-muted fw-light">
            <Col>
              <div className='fs-5 footer-social'>
                <Link href="https://github.com/spassberlin">
                  <a className="text-reset">
                    <GrGithub />
                  </a>
                </Link>

                <Link href="https://www.facebook.com/spassberlin">
                  <a className="text-reset">
                    <GrFacebook />
                  </a>
                </Link>

                <Link href="https://www.facebook.com/spassberlin">
                  <a className="text-reset">
                    <GrInstagram />
                  </a>
                </Link>

                <Link href="https://www.facebook.com/spassberlin">
                  <a className="text-reset">
                    <GrYoutube />
                  </a>
                </Link>

              </div>

              <br />
              Sanatani Puja and Sanskriti eV
              <br />
              Berlin
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Menu toggle button */}
      <div className='position-fixed' style={{ bottom: 10, right: 10 }}>
        <Button size="lg" variant="dark" onClick={() => setMenu(true)} className='pt-1'>
          {menu ? <GrClose /> : <GiHamburgerMenu />}
        </Button>
      </div>
    </>

  );
}
