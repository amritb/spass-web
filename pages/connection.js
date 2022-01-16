import { Col, Row } from "react-bootstrap";
import PageContent from "../components/page-content";
import PageHero from "../components/page-hero";

export default function Connection() {
  return (
    <>
      <PageHero
        title="Connection to Earth, Nature, and the Universe"
        bgSrc="images/connection.jpg"
      />

      <PageContent>
        <Row>
          <Col className=" mb-5">
            <p className="large-first">
              One beautiful and important aspect of being a Hindu is receiving a life choice of looking at everything through the lens of anthropomorphism; everything has a life form and is, therefore, a living being - the Earth, the soil, the plants, the trees, the rivers, the lakes, the vast mountains, and the deep oceans. The five elements of Earth, water, fire, air, and Akash has each been given anthropomorphic symbolism in the Hindu culture. Many animals and plants and herbs have also been given these living-symbolisms. This was a way of the Hindu ancestors to maintain a relationship of mutual love and respect between the energies of nature and the humans, for peaceful coexistence.
            </p>
            <p>
              Today this concept is in vast contrast to the modernized version of production-culture, where humans look upon themselves positioned as the center of things, and every other element around them available to be harnessed and torn-up to the advantage and profit-motives of the post-industrial world. Ancestors following the Hindu lifestyle had already foreseen this human-centric problem of positionality. Presently, “living in the future dystopia of our ancestors”, a return to the anthropomorphic ancestral values is what 'Spaß Berlin' attempts through the revival of pujas, cultural traditions, and meaningful rituals going back to its roots of origin. SOURCE: (Our Ancestors' Dystopia Now. Whyte, Kyle Powys. Page 206).
            </p>
          </Col>
        </Row>
      </PageContent>
    </>
  );
}