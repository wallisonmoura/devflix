import React from "react";

import { ButtonLink } from "./styles";

function Button(props) {
  return (
    <ButtonLink href={props.href} className={props.className}>
      {props.children}
    </ButtonLink>
  );
}

export default Button;
