import { Card, SectionHeader } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <SectionHeader id="magic" text="Magic" />
      <p>
        <i>Last Updated:</i> 4.17.26
      </p>

      <SectionHeader id="rituals" level={3} text="Rituals" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
        mauris sit amet tortor efficitur hendrerit vitae in sapien.
      </p>

      <SectionHeader id="tarot" level={3} text="Tarot" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat
        finibus ante, in vehicula enim consequat sed.
      </p>

      <SectionHeader id="herbalism" level={3} text="Herbalism" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
        consectetur odio, at eleifend ex convallis at.
      </p>

      <SectionHeader id="moon-work" level={3} text="Moon Work" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis
        varius lectus, ac sollicitudin lacus placerat a.
      </p>

      <SectionHeader id="community-practice" level={3} text="Community Practice" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
        habitasse platea dictumst, vestibulum a eros id, imperdiet dictum
        mauris.
      </p>

    </Card>
  );
};
