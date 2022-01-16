import Head from "next/head";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";

export default function PageHero({ title, subTitle, bgSrc = "images/home-hero.jpg", bgPosition = "center center", home = false }) {

  const bgStyle = {
    backgroundImage: "url('" + bgSrc + "')",
    backgroundSize: 'cover',
    backgroundPosition: bgPosition,
  }

  return (
    <>
    <Head>
      <title>{title} - Spaß Berlin</title>
    </Head>
    <div style={bgStyle}>
      <div className="hero-mask">
        <Container className="mb-4">
          <Row className="align-items-end hero-row">

            {!home ?
              <Col className="col-12 mb-auto">
                <Row className="mt-4 d-flex align-items-center">
                  <Col className="col-6 font-logo text-white display-6">
                    <Link href="/"><a className="text-white text-decoration-none">{process.env.shortName}</a></Link>
                  </Col>
                  <Col className="col-6 text-end">
                    <Link href="/join-us"><a className="btn btn-warning text-white rounded-pill px-3">Join Us</a></Link>
                  </Col>
                </Row>

              </Col>
              : null}

            <Col className={`text-center text-white col-12 mb-5 py-4`}>
              <h1 className={`display-3 ${home ? 'font-logo' : 'gradient-text'}`}>{title}</h1>

              {subTitle ?
                <h2>{subTitle}</h2>
                : null}

            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </>
  );
}