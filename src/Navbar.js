import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./image.png";
import "./Navbar.scss";

export default class Navbar extends Component {
  /** @param {{links: {to: string, text: string, isRoute: boolean, html: JSX.Element}[]}} props */
  constructor(props) {
    super(props);

    this.state = {
      links: props.links,
    };
  }

  /** @param {React.MouseEvent<HTMLDivElement>} e */
  slideNav = (e) => {
    const burger = document.querySelector("#burger");
    const links = document.querySelector("#links");
    const allLinks = document.querySelectorAll("#links li");

    links.classList.toggle("show-links");
    burger.classList.toggle("show-links");

    allLinks.forEach((link) => {
      link.classList.toggle("scale-fade-animation");
    });
  };

  render() {
    const { links } = this.state;
    return (
      <div id="navbar">
        <h1>
          <a href="/">
            <img
              src={logo}
              style={{ width: "130px", objectFit: "cover", height: "70px" }}
              alt="open"
            />
          </a>
        </h1>
        <ul id="links">
          {links.map((link) => {
            if (link.html) return link.html;

            if (link.isRoute)
              return (
                <li>
                  <Link to={link.to}>{link.text} </Link>{" "}
                </li>
              );

            return (
              <li>
                <a href={link.to}>{link.text}</a>
              </li>
            );
          })}
        </ul>

        <div id="burger" onClick={this.slideNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    );
  }
}
