import Link from "next/link";
import { Row, Col, Card } from "react-bootstrap";
import GalleryCard from "../components/gallery-card";
import PageContent from "../components/page-content";
import PageHero from "../components/page-hero";
import PageSegment from "../components/page-segment";

export default function HomePage() {
  const subTitle = <><span className="gradient-text">BERLIN</span><br /><Link href="/join-us"><a className="btn btn-light btn-lg mt-5 rounded-pill px-5">Join Us</a></Link></>;
  return (
    <>
      <PageHero
        title={`${process.env.longName}`}
        subTitle={subTitle}
        bgSrc="images/eyes.jpg"
        bgPosition="bottom center"
        home={true}
      />

      <PageContent>
        <Row>
          <Col className="mb-4">

            <p className="lead text-center text-md-start large-first">
              The word Hindu is derived from one of the most ancient languages of the world - Sanskrit - a language of the ancestors from the Indian subcontinent. A bright amalgamation of people who call and identify themselves as Hindu hail from various cultural identities and languages of India, Bangladesh, Pakistan, Nepal, and Sri Lanka, and many live today in Berlin. The one thing that binds all the diaspora together is a common Hindu identity. With this in mind, Sanatani Puja and Sanskriti (Spaß Berlin) was formed in 2019 to represent this diasporic-cultural-identity, out of many, from the Indian subcontinent, through the celebration of Hindu festivals, ceremonies, pujas, and rituals in the multicultural city of Berlin!
            </p>

          </Col>
        </Row>

        <Row>
          <Col>

            <PageSegment title="Gallery">
              <Row>

                <Col className="col-12 col-md-6">
                  <GalleryCard text="Berlin Durga Puja 2021" href="/gallery/puja-2021" cover="/images/durga-puja-2021/cover.jpg" />
                </Col>

                <Col className="col-12 col-md-6">
                  <GalleryCard text="Berlin Saraswati Puja 2020" href="/gallery/saraswati-puja-2020" cover="/images/saraswati-puja-2020/2.jpg" />
                </Col>

              </Row>
            </PageSegment>

          </Col>
        </Row>

        <Row>
          <Col className="text-center mb-5 col-12 col-md-8 offset-md-2">
            {/* <Image src="images/colors.jpg" fluid rounded /> */}

            <PageSegment title="Our theme song">
              <div className="ratio ratio-16x9">
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FPoridorshokNews%2Fvideos%2F163755879208652%2F&show_text=false&width=560&t=0" width="560" height="314" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
              </div>
            </PageSegment>

          </Col>
        </Row>

      </PageContent>
    </>
  );
}
