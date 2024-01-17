import { ReactElement } from "react";
import Image from "next/image";

import { ITeamMember } from "../../types";

import styles from "./FooterCard.module.scss";

interface FooterCardProps {
  teamMember: ITeamMember;
  key: string;
}

function FooterCard({ teamMember }: FooterCardProps): ReactElement {
  return (
    <li className={styles.footer__card} key={teamMember.name}>
      <Image
        src={teamMember.image}
        width={600}
        height={750}
        alt={`Photo of ${teamMember.name.split(" ")[0]}`}
        className={styles.footer__card_image}
      />
      <a
        href={teamMember.github}
        className={styles.footer__card_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {teamMember.name}
      </a>
    </li>
  );
}

export default FooterCard;
