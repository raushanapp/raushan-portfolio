import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import whakaariSm from "../../../Assets/img/Portfolio items/bigbasket.png";
import whakaariLg from "../../../Assets/img/Portfolio items/bigbasket.png";
import pounamunuiSm from "../../../Assets/img/Portfolio items/croma1.png";
import pounamunuiLg from "../../../Assets/img/Portfolio items/croma2.png";
import newsAggregator from "../../../Assets/img/Portfolio items/rentomojo.png";
import spacexSm from "../../../Assets/img/Portfolio items/rentomojo1.png";
import spacexLg from "../../../Assets/img/Portfolio items/LakmeIndia1.png";

import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";


import html from "../../../Assets/img/logos/html.svg";
import react from "../../../Assets/img/logos/react.svg";
import redux from "../../../Assets/img/logos/redux.svg";
import json from "../../../Assets/img/logos/json-5.svg";
// import chakra from "../../../Assets/img/logos/chakra.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
// import react from "../../../Assets/img/logos/react.svg";
import nodejs from "../../../Assets/img/logos/nodejs.svg";
import expressjs from "../../../Assets/img/logos/expressjs.svg";

const ProjectContainer = () => {
    const { isLight } = useContext(ThemeContext);
    const projects = [
        {
            image: [spacexSm, spacexLg],
            alt: "lakmeIndia.com_web_clone",
            heading: "lakmeindia.com_web_clone",
            p1: "This is a clone of lakme india.com, where we have used HTML, CSS, and Javascript to achieve this.",
            l1: "https://github.com/sauravsaran99/lakmeindia.git",
            a1: "Github page for a project.",
            l2: "https://lakmeclone.netlify.app/",
            a2: "lakme india.com_web_clone",
            tech:[html,css,js],
        },
        {
            image: [whakaariSm, whakaariLg],
            alt: "Bigbasket",
            heading: "Bigbasket web clone",
            p1: "Here we have tried to optimize the previous project cloning of Bigbasket by adding backend to it and some more functionality in the frontend.",
            l1: "https://github.com/darshan-shinde/BigBasket-U4-P.git",
            a1: "Github page for a Bigbasket project.",
            l2: "https://lively-croissant-f58334.netlify.app/",
            a2: "bigbasket live website.",
            tech:[html,css,js,expressjs,nodejs],
        },
        {
            image: [pounamunuiSm, pounamunuiLg],
            alt: "croma web clone",
            heading: "croma web clone",
            p1: "This is a clone of croma.com, where we have used HTML, CSS, and Javascript to achieve this.",
            l1: "https://github.com/lordstark-p/croma_clone.git",
            a1: "Github page for a project.",
            l2: "https://croma-clone-github-io.vercel.app/",
            a2: "croma.com_web_clone",
            tech:[html,css,js],
        },
        {
            image: [newsAggregator, newsAggregator],
            alt: "Rentomojo web clone",
            heading: "Rentomojo web clone",
            p1: "This is a clone of Rentomojo.com, where we have used HTML, Chakra-ui,React,Redux,React-Redux,Json-server and Javascript to achieve this.",
            l1: "https://github.com/psnarkhede/cruel-scale-8764.git",
            a1: "Github page for a project.",
            l2: "https://clone-rentomojo.netlify.app/",
            a2: "Rentomojo.com_web_clone",
            tech:[html,css,js,react,redux,json],
        },
    ];
    return (
        <div
            className={`${styles.projectContainer} ${!isLight && styles.dark}`}
        >
            {projects.map((data, index) => {
                return <ProjectItem data={data} index={index} key={index} />;
            })}
        </div>
    );
};

export default ProjectContainer;
