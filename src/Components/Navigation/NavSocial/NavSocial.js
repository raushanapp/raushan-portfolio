import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavSocial.module.css";

const NavSocial = ({ socialClass, socialIcons }) => {
    return (
        <>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://github.com/raushanapp"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Github Portfolio."
                >
                    <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className={`${styles[socialIcons]}`}
                    />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://www.linkedin.com/in/raushan-coder/"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin Profile."
                >
                    <FontAwesomeIcon
                        icon={["fab", "linkedin"]}
                       className={`${styles[socialIcons]}`}
                    />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="mailto:sraushan890@gmail.com"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin email."
                >
                    <FontAwesomeIcon icon="envelope"  className={`${styles[socialIcons]}`} />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="tel:+7362086027"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin contact"
                >
                    <FontAwesomeIcon icon="phone"  className={`${styles[socialIcons]}`} />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://drive.google.com/file/d/1Wb-cKwgCN-BjoX3rNvrP9HMwee5eyQmU/view?usp=sharing"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="My Linkedin resume"
                >
                    <FontAwesomeIcon icon="file"  className={`${styles[socialIcons]}`} />
                </a>
            </li>
        </>
    );
};

export default NavSocial;
