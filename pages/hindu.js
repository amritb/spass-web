import { Col, Row } from "react-bootstrap";
import PageContent from "../components/page-content";
import PageHero from "../components/page-hero";
import SegmentImage from "../components/segment-image";

export default function Festivities() {
  return (
    <>
      <PageHero
        title='What is special about being a "Hindu"?'
        bgSrc="images/murti.jpg"
      />

      <PageContent>
        <Row>
          <Col>
            <p className="large-first">
              Many people reflect on the vast and profound question - What does it mean to 'be' a 'Hindu'? From the past hundreds of centuries till today, being a Hindu has been a way of living, a lifestyle that one was either born into or a lifestyle that one could choose. This multiple pluralities of lifestyles among the Hindus often confuses many modernists. One quote from an unknown source explains this beautifully:
            </p>
            <p>
              What is special about being a 'Hindu'?
            </p>
            <ul>

              <li>
                Believe in God! - Aastik - Accepted
              </li>
              <li>
                Don't believe in God! - You're accepted as Nastik
              </li>
              <li>
                You want to worship idols - please go ahead. You are a murti pujak.
              </li>
              <SegmentImage src="images/colors.jpg" />
              <li>
                You don't want to worship idols - no problem. You can focus on Nirguna Brahman.
              </li>
              <li>
                You want to criticize something in our religion. Come forward. We are logical. Nyaya Tarka etc. are core
                Hindu schools
              </li>
              <li>
                You want to accept beliefs as it is. Most welcome. Please go ahead with it
              </li>
              <li>
                You want to start your journey by reading Bhagvad Gita - Sure!
              </li>
              <li>
                You want to start your journey by reading Upanishads - Go ahead
              </li>
              <li>
                You want to start your journey by reading Purana - Be my guest
              </li>
              <SegmentImage src="images/next-gen.jpg" />
              <li>
                You just don't like reading Puranas or other books. No problem my dear. Go by Bhakti tradition. (Bhakti -
                devotion)
              </li>
              <li>
                You don't like idea of Bhakti! No problem. Do your Karma. Be a karmayogi.
              </li>
              <li>
                You want to enjoy life. Very good. No problem at all. This is Charvaka Philosophy
              </li>
              <li>
                You want to abstain from all the enjoyment of life and find God - jai ho! Be a Sadhu, an ascetic!
              </li>
              <li>
                You don't like the concept of God. You believe in Nature only - Welcome. (Trees are our friends and Prakriti
                or nature is worthy of worship)
              </li>
              <li>
                You believe in one God or Supreme Energy. Superb! Follow Advaita philosophy
              </li>
              <li>
                You want a Guru. Go ahead. Receive gyaan
              </li>
              <li>
                You don't want a Guru. Help yourself! Meditate, Study!
              </li>
              <li>
                You believe in Female energy! Shakti is worshipped.
              </li>
              <li>
                You believe that every human being is equal. Yeah! You're awesome, come on let's celebrate [...]! "Vasudhaiva kutumbakam" (the world is a family) o You don't have time to celebrate the festival. Don't worry. One more festival is coming! There are multiple festivals every single day of the year. o You are a working person. Don't have time for religion. It's okay. You will still 'be' a Hindu.
              </li>
              <li>
                You like to go to temples. Devotion is loved.
              </li>
              <li>
                You don't like to go to temples - no problem. You are still a Hindu!
              </li>
              <li>
                You know that [this] is a way of life, with considerable freedom.
              </li>
              <li>
                You believe that everything has God in it. So you worship your mother, father, guru, tree, River, Prani-matra, Earth, and Universe!
              </li>
              <li>
                And if you don't believe that everything has God in it - No problems. Respect your viewpoint. o "Sarve jana sukhino bhavantu " (May you all live happily) You represent this! You're free to choose, my dear Hindu! This is the essence of being a Hindu - becoming all inclusive.
              </li>
            </ul>
            <p>SOURCE: (What is special about being a Hindu. Webdunia. Original source unknown.)</p>
          </Col>
        </Row>
      </PageContent>
    </>
  );
}