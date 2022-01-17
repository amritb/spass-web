import { Col, Row } from "react-bootstrap";
import PageContent from "../components/page-content";
import PageHero from "../components/page-hero";

export default function NextGeneration() {
  return (
    <>
      <PageHero
        title="Thoughts for the Next Generation"
        bgSrc="images/next-gen.jpg"
      />

      <PageContent>
        <Row>
          <Col className="">
            <p className="large-first">
              As a human residing on this blue planet, the main thought affecting all of us is - what have we inherited from our ancestors and what are we leaving behind for the next generations to come. The ancient way of holistic living, a life choice of wellbeing, and living in balance with nature and mother Earth - is a call of the hour in this difficult age of the Anthropocene. 'Spaß Berlin' recognizes this very urgent need and therefore revives ancient Hindu practices and symbolisms that support reverence to nature and the belief that life resides in every object.
              </p>
              <p>
              For example, the use of paddy grains, blades of grass, leaves from certain trees, and certain flowers and fruits in rituals and pujas serve as a symbolism of respect towards all objects of nature. Also, following planetary alignments while conducting or beginning the pujas ensures respect for the symbolisms of the sun, the moon, the winds, and other cyclical alignments in the Universe. Respect for the passed-on loved ones and the elderly, and the feelings of protection for the new-born and the young are portrayed through Hindu mythological symbols like the protective childhoods of Lord Ganesha or Lord Krishna and their immense respect for compassionate and loving Maa Parvati, or Pita Shiva, or Mata Yashoda. 'Spaß Berlin' celebrates these symbols in order to celebrate the continuity of life!
              </p>
              <p>By engaging with the 'Spaß Berlin' platform, the next generation can over the years, recreate bonds and healthy associations with nature, with family, and with the community as a whole, through such Hindu cultural practices and symbolisms, even while being away from their lands of ethnicity.
            </p>
          </Col>
        </Row>
      </PageContent>
    </>
  );
}