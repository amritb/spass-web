import Link from "next/link";
import { Container } from "react-bootstrap";

export default function PageContent({ children }) {
  return (
    <Container className="px-4">

          {children}

    </Container>
  );
}