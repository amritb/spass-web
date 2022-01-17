import Link from "next/link";
import { Nav } from "react-bootstrap";

export default function NavLinks({cn, setMenu}) {
  return (
    <>
      <Nav className={cn}>

        <Link href="/"><a className="nav-link" onClick={() => setMenu(false)}>Home</a></Link>

        <Link href="/festivities"><a className="nav-link" onClick={() => setMenu(false)}>Festivities</a></Link>

        <Link href="/connection"><a className="nav-link" onClick={() => setMenu(false)}>Connection</a></Link>

        <Link href="/inclusivity"><a className="nav-link" onClick={() => setMenu(false)}>Inclusivity</a></Link>

        <Link href="/next-generation"><a className="nav-link" onClick={() => setMenu(false)}>Next generation</a></Link>

        <Link href="/hindu"><a className="nav-link" onClick={() => setMenu(false)}>"Hindu"</a></Link>

        <Link href="/join-us"><a className="nav-link" onClick={() => setMenu(false)}>Join us</a></Link>
      </Nav>

    </>
  );
}