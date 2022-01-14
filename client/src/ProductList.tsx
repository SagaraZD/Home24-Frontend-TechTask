import React from "react";

import { Category, Article } from "./types";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import "./ProductList.css";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./Search";
import Loader from "./Loader";

var intlNumberFormatValues = ["de-DE", "currency", "EUR"];

export var formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
});

type State = {
  categories: Category[];
};
export var ArticleCard = ({ article }: { article: Article }) => {
  const Button = styled.button`
    border: none;
    background: #f45334;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    line-height: 23px;
    width: 100%;
    padding: 5px 0px;
    &:hover {
      color: white;
      background: #e72500;
      text-decoration: none;
    }
  `;

  const Main = styled.div`
    margin-bottom: 20px;
    position: relative;
    padding: 20px;
    background: #fff;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      box-shadow: 0 0 20px rgb(0 0 0 / 10%);
      z-index: 7;
    }
  `;
  return (
    <Main>
      <div className={"item"}>
        <img src={article.images[0].path} />
        <div className={"name"}>{article.name}</div>
        <div className={"price"}>
          {formatter.format(article.prices.regular.value / 100)}
        </div>
      </div>

      <Button>Add to cart</Button>
    </Main>
  );
};

class ArticleList extends React.Component {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(
      JSON.stringify({
        query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
      })
    );

    xhr.onload = () => {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response);

        this.setState({ categories: response.data.categories });
      }
    };
  }

  render() {
    var articles = this.state.categories.map((category) => {
      return category.categoryArticles.articles.map((article) => {
        return <ArticleCard article={article} />;
      });
    });

    return (
      <div className={"page"}>
        <div className={"header"}>
          <Container>
            <div
              className={css`
                position: relative;
              `}
            >
              <div
                className={css`
                  width: 155px;
                  float: left;
                `}
              >
                <a href="/">
                  <img src={"/home24_logo.svg"} alt="Logo" />
                </a>
              </div>
              <Search />
            </div>
          </Container>

          <div className={"clear"} />
        </div>

        <Container>
          {this.state.categories.length ? (
            <Row>
              <Col>
                <div className={"sidebar"}>
                  <h3>Kategorien</h3>
                  <ul>
                    {this.state.categories[0].childrenCategories.map(
                      ({ name, urlPath }) => {
                        return (
                          <li>
                            <a href={`/${urlPath}`}>{name}</a>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </Col>
              <Col xs={9}>
                <div className={"content"}>
                  <h1>
                    {this.state.categories[0].name}
                    <small> ({this.state.categories[0].articleCount})</small>
                  </h1>

                  <div className={"articles"}>{articles}</div>
                </div>
              </Col>
            </Row>
          ) : (
            <Loader/>
          )}
        </Container>

        <div className={"footer"}>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
          Versandkosten.
        </div>
      </div>
    );
  }
}

var PLP = () => {
  return <ArticleList />;
};

export default PLP;
