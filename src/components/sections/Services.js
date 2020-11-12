import React, { Component } from "react";
import { Title } from "../layout/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { Col, Row, Container } from "react-bootstrap";
import "../../stylesheets/Services.css";
export class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free Cocktail",
          info:
            "Free CocktailFree CocktailFree CocktailFree CocktailFree CocktailFree CocktailFree Cocktail"
        },
        {
          icon: <FaHiking />,
          title: "Free Hiking",
          info:
            "Free CocktailFree CocktailFree CocktailFree CocktailFree CocktailFree CocktailFree Cocktail"
        },
        {
          icon: <FaShuttleVan />,
          title: "Free ShuttleVan",
          info:
            "Free CocktailFree CocktailFree CocktailFree CocktailFree CocktailFree CocktailFree Cocktail"
        },
        {
          icon: <FaBeer />,
          title: "Free Beer",
          info:
            "Free CocktailFree CocktailFree CocktailFree CocktailFree CocktailFree CocktailFree Cocktail"
        }
      ]
    };
  }
  render() {
    return (
      <section className="services">
        <Container>
          <Title title="Services" />
          <Row>
            {this.state.services.map((service, index) => {
              return (
                <Col md={6} lg={3} sm={12}>
                  <article className="service" key={index}>
                    <span>{service.icon}</span>
                    <h6>{service.title}</h6>
                    <p>{service.info}</p>
                  </article>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}
