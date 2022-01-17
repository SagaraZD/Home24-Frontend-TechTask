import React from "react";
import { Category, Article } from "./types";
import styled from "@emotion/styled";
import "./ProductList.css";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./Components/Search";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";
import { MenuDesktop } from "./Components/Menu";
import { SubHeader } from "./Components/SubHeader";
import { ArticleCard } from "./Components/ArticleCard";
import Logo from "./Components/Logo";

type State = {
  categories: Category[];
  cartList: Article[];
  cartTotal: number;
};

class ArticleList extends React.Component {
  state: State = {
    categories: [],
    cartList: [],
    cartTotal: 0,
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

  addToCart = (article: Article) => {
    this.setState({ cartList: this.state.cartList.concat(article) });
    this.setState({
      cartTotal: this.state.cartTotal + article.prices.regular.value,
    });
  };

  clearCart = () => {
    this.setState({ cartList: [] });
    this.setState({ cartTotal: 0 });
  };

  render() {
    var articles = this.state.categories.map((category) => {
      return category.categoryArticles.articles.map((article, index) => {
        return (
          <ArticleCard
            key={index}
            article={article}
            addToCart={this.addToCart}
          />
        );
      });
    });

    const HeaderContainer = styled.div`
      position: relative;
    `;

    return (
      <div className={"page"}>
        <div className={"header"}>
          <Container>
            <HeaderContainer>
              <Row>
                <Col md={3} sm={12}>
                  <Logo />
                </Col>

                <Col md={3} sm={12}>
                  <Search />
                </Col>
              </Row>
            </HeaderContainer>
          </Container>

          <div className={"clear"} />
        </div>

        <Container>
          {this.state.categories.length ? (
            <Row>
              <Col md={3} sm={12}>
                <MenuDesktop list={this.state.categories} />
              </Col>
              <Col md={9} sm={12}>
                <div className={"content"}>
                  <SubHeader
                    count={this.state.categories[0].articleCount}
                    name={this.state.categories[0].name}
                    total={this.state.cartList.length}
                    categories={this.state.categories}
                    cartList={this.state.cartList}
                    cartTotal={this.state.cartTotal}
                    clearCart={this.clearCart}
                  />
                  <div className={"articles"}>{articles}</div>
                </div>
              </Col>
            </Row>
          ) : (
            <Loader />
          )}
        </Container>

        <Footer />
      </div>
    );
  }
}

var PLP = () => {
  return <ArticleList />;
};

export default PLP;
