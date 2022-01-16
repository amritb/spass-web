import Link from 'next/link';
import { useState } from 'react';
import { Col, Container, Nav, Offcanvas, Row, Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose, GrFacebook, GrGithub, GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';

export default function AppLayout({ children }) {
  const [menu, setMenu] = useState(false);
  return (
    <>

      <Offcanvas show={menu} onHide={() => setMenu(false)} placement='bottom'>

        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className='justify-content-center'>

            <Link href="/"><a className="nav-link" onClick={() => setMenu(false)}>Home</a></Link>

            <Link href="/festivities"><a className="nav-link" onClick={() => setMenu(false)}>Festivities</a></Link>

            <Link href="/connection"><a className="nav-link" onClick={() => setMenu(false)}>Connection</a></Link>

            <Link href="/inclusivity"><a className="nav-link" onClick={() => setMenu(false)}>Inclusivity</a></Link>

            <Link href="/next-generation"><a className="nav-link" onClick={() => setMenu(false)}>Next generation</a></Link>

            <Link href="/hindu"><a className="nav-link" onClick={() => setMenu(false)}>"Hindu"</a></Link>

            <Link href="/join-us"><a className="nav-link" onClick={() => setMenu(false)}>Join us</a></Link>
          </Nav>
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
