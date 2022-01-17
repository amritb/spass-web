import Link from "next/link";
import { Card, Col } from "react-bootstrap";

export default function GalleryCard({ cover, href, text }) {
  return (
    <Col className="col-12 col-md-6 col-lg-4">
      <Card className="mb-4">
        <Card.Img variant="top" src={cover} />
        <Card.Body>
          <Card.Text className="text-center">
            <Link href={href}><a className="text-decoration-none stretched-link text-reset">{text}</a></Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}