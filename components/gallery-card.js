import Link from "next/link";
import { Card } from "react-bootstrap";

export default function GalleryCard({ cover, href, text }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={cover} />
      <Card.Body>
        <Card.Text className="text-center">
          <Link href={href}><a className="text-decoration-none stretched-link text-reset">{text}</a></Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}