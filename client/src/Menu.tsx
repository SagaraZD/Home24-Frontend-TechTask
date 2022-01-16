import React from "react";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";

import { Category } from "./types";

interface Props {
  list: Category[];
}

export const MenuDesktop: React.FC<Props> = ({ list }) => {
  return (
    <div>
      {/* Desktop */}
      <div className={"sidebar d-none d-md-block d-lg-block"}>
        <h3>Kategorien</h3>
        <ul>
          {list[0].childrenCategories.map(({ name, urlPath }, index) => {
            return (
              <li key={index}>
                <a href={`/${urlPath}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export const MenuMobile: React.FC<Props> = ({ list }) => {
  return (
    <div>
      {/* Mobile */}
      <Navbar
        expand={false}
        className="menu-mobile d-block d-md-none d-sm-block"
      >
        <Container className="container-fluid p-0">
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <h3>Kategorien </h3>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {list[0].childrenCategories.map(({ name, urlPath }, index) => {
                  return (
                    <ul key={index}>
                      <Nav.Link href={`/${urlPath}`}>{name}</Nav.Link>
                    </ul>
                  );
                })}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
