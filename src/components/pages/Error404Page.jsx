import React from "react";
import { Link } from "react-router-dom";


const Error404Page = () => {
  return(
    <div>
      <h1>Error 404 - Page Not Found</h1>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  )
};

export default Error404Page;