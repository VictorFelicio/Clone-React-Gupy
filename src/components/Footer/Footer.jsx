import React, { memo } from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      Gupy 2022. <span>Todos os direitos reservados.</span> v5.61.0-1fad7ec18
    </footer>
  );
}

export default memo(Footer);
