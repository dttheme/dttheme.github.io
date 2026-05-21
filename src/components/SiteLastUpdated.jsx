import React from "react";
import { WEBSITE_LAST_UPDATED } from "../constants";

const SiteLastUpdated = ({ label = "Last Updated:" }) => {
  return (
    <p>
      <i>{label}</i> {WEBSITE_LAST_UPDATED}
    </p>
  );
};

export default SiteLastUpdated;
