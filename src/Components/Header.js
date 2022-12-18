import React, { Component } from "react";
import ReactDOM from "react-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Authors from "../Pages/Authors";
import Metliskij from "../Pages/Auth/Metliskij";
import Hilevich from "../Pages/Auth/Hilevich";
import Brovka from "../Pages/Auth/Brovka";
import Borodulin from "../Pages/Auth/Borodulin";
import Adam from "../Pages/Auth/Adam";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../hooks/use-localstorage";

import {
  Button,
  Container,
  Dropdown,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";

// import Dropdown from "./Dropdown";

import logo from "../assets/BookLogo.webp";

import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
const Header = () => {
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
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function filterFunction() {
    var input, filter, div, txt, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txt = a[i].text || a[i].innerText;
      if (txt.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  return (
    <>
    <Router>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/">
            <img
              src={logo}
              height="45"
              width="45"
              className="d-inline-block align-top"
              alt="logo"
            />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             <a> <Nav.Link><Link to="/"><span id = "ff"> {t("Home")}</span></Link> </Nav.Link></a>
             <a> <Nav.Link><Link to="/authors/"><span id = "ff" > {t("Authors")} </span></Link></Nav.Link></a>
             <a><Nav.Link><Link to="/#about-us"> <span id = "ff">{t("About us")} </span></Link></Nav.Link></a>
            </Nav>
            <div class="search">
              <Form inline>
                <FormControl
                  id="myInput"
                  class="dropbtn"
                  type="text"
                  placeholder={t("Search")}
                  className="me-sm-2"
                  onClick={myFunction}
                  onKeyUp={filterFunction}
                />

                <div id="myDropdown" class="dropdown-content">
                  <a> <Link to="/authors/hilevich/">Нил Гилевич</Link></a>
                  <a> <Link to="/authors/metliskij/">Николай Метлицкий</Link></a>
                  <a> <Link to="/authors/brovka/">Петр Бровка</Link></a>
                  <a> <Link to="/authors/borodulin/">Егор Бородулин</Link></a>
                  <a> <Link to="/authors/globus/">Адам Глобуч</Link></a>
                </div>
              </Form>
              <Button variant="outline-info">{t("Search")}</Button>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {language === "ru" ? "RU" : "EN"}
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" onClick={setEnglish} href="#">
                  EN
                </a>
                <a class="dropdown-item" onClick={setRussian} href="#">
                  RU
                </a>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/authors/" component={Authors} />
          <Route exact path="/#about-us/" component={About} />
          <Route exact path="/authors/hilevich/" component={Hilevich} />
          <Route exact path="/authors/metliskij/" component={Metliskij} />
          <Route exact path="/authors/brovka/" component={Brovka} />
          <Route exact path="/authors/borodulin/" component={Borodulin} />
          <Route exact path="/authors/globus/" component={Adam} />
        </Switch>
      </Router>
    </>
  );
};

export default Header;
