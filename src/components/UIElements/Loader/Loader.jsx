import "./Loader.css";
import "ldrs/react/Trefoil.css";

import { Trefoil } from "ldrs/react";

function Loader() {
  return (
    <Trefoil
      size="40"
      stroke="4"
      strokeLength="0.15"
      bgOpacity="0.2"
      speed="1.4"
      color="#e63946"
    />
  );
}

export default Loader;
