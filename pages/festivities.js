import { Col, Row } from "react-bootstrap";
import PageContent from "../components/page-content";
import PageHero from "../components/page-hero";
import GalleryCard from "../components/gallery-card";

export default function Festivities() {
  return (
    <>
      <PageHero
        title="Festivities"
        bgSrc="images/festivities.jpg"
      />

      <PageContent>
        <Row>
          <Col className=" mb-5">
            <p className="large-first">
              People from various cultures across the world love to experience bright festivals and carnivals filled with colors and sounds, ethnic food, and community gatherings - through vibrant festivities, dance-forms, songs and music, art and culture, and food preparations and conversations.
            </p>
            <p>
              'Spaß Berlin' attempts to maintain such spirit of festivity through the celebration of various festivals like Durga Puja, Laxmi Puja, and Saraswati Puja; and memorialization days like Rabindra Jayanti, and Nazrul Jayanti. Following the cycles of nature, 'Spaß Berlin' also celebrates mother Earth's seasonal patterns through the New Year - 'Poyela Baisakh', heralding in a new summer-harvest season with joy!
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="col-12 col-md-6">
            <GalleryCard text="Berlin Durga Puja 2021" href="/gallery/puja-2021" cover="/images/durga-puja-2021/cover.jpg" />
          </Col>

          <Col className="col-12 col-md-6">
            <GalleryCard text="Berlin Saraswati Puja 2020" href="/gallery/saraswati-puja-2020" cover="/images/saraswati-puja-2020/2.jpg" />
          </Col>
        </Row>
      </PageContent>
    </>
  );
}