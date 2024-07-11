import React from "react";

interface Props {
  name: string;
  contenu: string[];
}

const FooterInfo = ({ name, contenu }: Props) => {
  return (
    <div>
      <h4>
        Nos <b>{name}</b>
      </h4>
      <ul>
        {contenu.map((item, index) => (
          <li key={`list${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterInfo;
