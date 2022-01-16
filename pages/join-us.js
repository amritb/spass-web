import { Col, Row } from "react-bootstrap";
import PageContent from "../components/page-content";
import PageHero from "../components/page-hero";

export default function Festivities() {
  return (
    <>
      <PageHero
        title="The more the merrier!"
        bgSrc="images/join.jpg"
      />

      <PageContent>
        <Row>
          <Col>
            <p className="large-first">
              In the end, it is important to realize that such an effort is not possible alone or with just a small group of people within 'Spaß Berlin'. In the pressing times of rushing to just manage a good livelihood, it is of prime importance that we keep the heart and mind balanced and peaceful. Revisiting the rituals that give us a sense of connection to our past, and at the same time prepares us for the future, is a wonderful way of maintaining this balance. Rituals remind us of our families, our community, our homeland, our ancestors, our mythology, our culture, our ethnicity, and also our responsibilities towards nature and the next generation; and thus take us to a mind-space of protection and nurturing.
            </p>
            <p>
              Anyone reading this, who miss this feeling of 'belonging' and 'home' - this is a welcome message for you from the 'Spaß Berlin' community - to come and join in. Involve yourself in the 'Spaß Berlin' efforts, festivities, and fun, irrespective of your nationality or language. Participate in your own unique way with 'Spaß Berlin' and grow together reaching many more people from various communities and spreading joy and happiness over the years!
            </p>
          </Col>
        </Row>
      </PageContent>
    </>
  );
}