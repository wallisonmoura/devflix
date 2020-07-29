import React from "react";

import { ButtonLink } from "./styles";

function Button(props) {
  return (
    <ButtonLink to={props.to} className={props.className}>
      {props.children}
    </ButtonLink>
  );
}

export default Button;
