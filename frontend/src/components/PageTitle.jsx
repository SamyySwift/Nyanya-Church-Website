import { Helmet } from "react-helmet-async";

import React from "react";

function PageTitle({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default PageTitle;
