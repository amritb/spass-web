import { Col, Row } from "react-bootstrap";
import PageContent from "../components/page-content";
import PageHero from "../components/page-hero";

export default function Inclusivity() {
  return (
    <>
      <PageHero
        title="Inclusivity"
        bgSrc="images/inclusivity.jpg"
      />

      <PageContent>
        <Row>
          <Col className=" mb-5">
            <p className="large-first">
              One remarkable thing about Hindu festivals is its inclusivity. Though many times, due to multiple language backgrounds in the Indian subcontinent, and across the world, there still remain some barriers when it comes to understanding each other and therefore intermingling with each other. Still, the language of art, music, dance, and food can cross all barriers and bring in inclusivity!
            </p>
            <p>
              For practical day-to-day operational purposes, 'Spaß Berlin' accepts the predominant use of native and international languages like Hindi, English, Bengali, and German. However, awareness is still maintained among the 'Spaß Berlin' community that there exists a variety of languages in the Indian subcontinent itself, and in the world as a whole. Cultural barriers formed by such language-hegemony are consciously removed in 'Spaß Berlin' through non- verbal cultural forms in their cultural programs - like the use of musical instruments, expressive dance-forms, and community food - that transcends all barriers.
            </p>
          </Col>
        </Row>
      </PageContent>
    </>
  );
}