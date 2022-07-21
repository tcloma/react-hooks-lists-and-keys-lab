import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    links.map((element) => {
      return(
        <a href={'#'+element} key={element}>{element}</a>
      )
    })
    }</nav>;
}

export default NavBar;
