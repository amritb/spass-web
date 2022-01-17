import { Col, Row } from "react-bootstrap";
import ImageGallery from "../../components/image-gallery";
import PageContent from "../../components/page-content";
import PageHero from "../../components/page-hero";

export default function Puja2021() {
  const images = [...Array(7).keys()].map(i => `/images/saraswati-puja-2020/${i}.jpg`);

  return (
    <>
      <PageHero
        title="Saraswati Puja 2020"
        bgSrc="/images/saraswati-puja-2020/2.jpg"
      />

      <PageContent>
        <Row>
          <Col className="">
            <ImageGallery imagesUrls={images} />
          </Col>
        </Row>
      </PageContent>
    </>
  );
}