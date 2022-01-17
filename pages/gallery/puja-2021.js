import { Col, Row } from "react-bootstrap";
import ImageGallery from "../../components/image-gallery";
import PageContent from "../../components/page-content";
import PageHero from "../../components/page-hero";

export default function Puja2021() {
  const images = [...Array(7).keys()].map(i => `/images/durga-puja-2021/${i}.jpg`);

  return (
    <>
      <PageHero
        title="Durga Puja 2021"
        bgSrc="/images/durga-puja-2021/cover.jpg"
      />

      <PageContent>
        <Row>
          <Col>

            <div className="ratio ratio-16x9 mb-3">
              <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fadrija.chaudhuri.77%2Fposts%2F4737928446251651&width=500&show_text=false&appId=610726570086965&height=282" width="500" height="282" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>

          </Col>
        </Row>


        <Row>
          <Col className="">
            <ImageGallery imagesUrls={images} />
          </Col>
        </Row>
      </PageContent>
    </>
  );
}