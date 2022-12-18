import React, { Component } from "react";
import { Button, Card, Container, Figure } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";

import evgexaxzc from "../assets/evgexaxzc.jpg";
import MenterCOX from "../assets/MenterCOX.jpg";
import T4WERKA from "../assets/T4WERKA.jpg";
import Nikolai from "../assets/Nikolaj_Metlitskij.jpg";
import {Link } from "react-router-dom"
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../hooks/use-localstorage";

const Home = () => {
  const { t } = useTranslation();
  const [language, setLanguaege] = useLocalStorage("language", "ru");

  // const handleLanguageChange = () => {
  //   if (language === 'en') {
  //     i18n.changeLanguage('ru');
  //     setLanguaege('ru');
  //   } else if (language === 'ru') {
  //     i18n.changeLanguage('en');
  //     setLanguaege('en');
  //   }
  // }

  const setRussian = () => {
    i18n.changeLanguage("ru");
    setLanguaege("ru");
  };

  const setEnglish = () => {
    i18n.changeLanguage("en");
    setLanguaege("en");
  };

  return (
    <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Биография</h2>
        <div id="person">
            <div class="person_about">
              <p>
                Никола́й Миха́йлович Метли́цкий (белор. Мікала́й Міха́йлавіч (Міко́ла)
                Мятлі́цкі; 20 марта 1954, д. Бабчин, Хойнинский район, Гомельская
                область — 27 ноября 2021) — белорусский поэт, переводчик,
                публицист, журналист. Заслуженный деятель культуры Республики
                Беларусь (2019). Лауреат Государственной премии Республики
                Беларусь имени Янки Купалы (1998). Лауреат премии Ленинского
                комсомола Белорусской ССР (1986). Лауреат Специальной премии
                Президента Республики Беларусь деятелям культуры и искусства
                (2013). Член Союза писателей СССР (1981).
              </p>
          </div>
          <div class="person_card">
            <Figure align="center">
              <Figure.Image
                src={Nikolai}
                alt="Nikolai"
                height={100}
                weight={100}
              />
              <Figure.Caption>
                <h2>Николай Метлицкий</h2>
                <p>
                  <b>Дата рождения</b> 20 марта 1954
                </p>
                <p>
                  <b>Место рождения</b> д. Бабчин, Гомельская обл.
                </p>
                <p>
                  <b>Гражданство</b> Беларусь
                </p>
                <p>
                  <b>Дата смерти</b> 27 ноября 2021
                </p>
                <a ><Link to="/authors/metliskij">
                  <b>{t("Read about")}</b>
                  </Link>
                </a>
              </Figure.Caption>
            </Figure>
          </div>
        </div>
      </Container>

      <Container className="text-center">
        <h2 className="text-center m-4" id="about-us">
          {t("Our team")}
        </h2>
        <div id="authors_flex">
          <Card border="dark">
            <Card.Img variant="top" src={evgexaxzc} alt="evgexaxzc" />
            <Card.Body>
              <Card.Title>evgexaxzc</Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>Евгений Митюля</Card.Text>
              <Button
                href="https://github.com/evgexaxzc"
                variant="outline-dark"
              >
                {t("About the participant")}
              </Button>
            </Card.Body>
          </Card>

          <Card border="dark">
            <Card.Img variant="top" src={MenterCOX} alt="MenterCOX" />
            <Card.Body>
              <Card.Title>MenterCOX</Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>Даниил Ягниш</Card.Text>
              <Button
                href="https://github.com/MenterCOX"
                variant="outline-dark"
              >
                {t("About the participant")}
              </Button>
            </Card.Body>
          </Card>

          <Card border="dark">
            <Card.Img variant="top" alt="T4WERKA" src={T4WERKA} />
            <Card.Body>
              <Card.Title>T4RWERKA</Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Денис Шафаренко
              </Card.Text>
              <Button href="https://github.com/T4RWERKA" variant="outline-dark">
                {t("About the participant")}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Home;
