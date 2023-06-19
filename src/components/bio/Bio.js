import React from "react";

import Bg1 from "../../images/Hero-bg1.png";
import Vector2 from "../../images/favicon.png";

import "./Bio.css";

function Bio() {
    const parallex = {
        backgroundImage: `url(${Bg1})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <>
            <section className="py-5" id="bio" style={parallex}>
                <div className="container">
                    <h1
                        className="text-center"
                        style={{ color: "rgb(203, 178, 106)", fontWeight: "bolder" }}
                    >
                        My Bio
                    </h1>
                    <div className="row pt-5">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="text-center">
                                <img src={Vector2} style={{ height: "20rem" }} alt="" />
                            </div>
                            <a
                                href="https://www.geeksforgeeks.org/what-is-full-stack-development/"
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="text-center">
                                    <h2 className="field py-3"> Full Stack developer</h2>
                                </div>
                            </a>

                            <a
                                href="https://aws.amazon.com/devops/what-is-devops/"
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="mt-3 text-center">
                                    <h2 className="field py-3">
                                        DevOps Trainee
                                    </h2>
                                </div>
                            </a>

                            <a
                                href="https://www.redhat.com/en/topics/open-source/what-is-open-source"
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="mt-3 text-center">
                                    <h2 className="field py-3">Open Source Developer </h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 px-2">
                            <div className="container">
                                <ul>
                                    <li>
                                        Full Stack Developer based in Odisha, India.
                                    </li>
                                    <li>
                                        Specialize in both FrontEnd and BackEnd Development, allowing me to create comprehensive and cohesive software solutions.
                                    </li>
                                    <li>
                                        Proficient in a wide range of programming languages, including but not limited to MERN Stack, Next.js, JAVA, JavaScript, React.js, Python, MySql, and MongoDB.
                                    </li>
                                    <li>
                                        Well-versed in responsive frameworks, enabling the development of engaging and user-friendly interfaces across different devices and screen sizes.
                                    </li>
                                    <li>
                                        Well-versed in responsive frameworks, enabling the development of engaging and user-friendly interfaces across different devices and screen sizes.
                                    </li>
                                    <li>
                                        Experienced in managing and optimizing databases, ensuring efficient data storage and retrieval for enhanced system performance.
                                    </li>
                                    <li>
                                        Committed to utilizing my development and programming skills to improve corporate performance and drive success.
                                    </li>
                                    <li>
                                        Prioritize adhering to proper coding standards and best practices to ensure clean, maintainable, and scalable codebases.
                                    </li>
                                </ul>
                                <div>
                                    <a
                                        style={{ textDecoration: "none" }}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        href="https://www.linkedin.com/in/anurag-kumar-37aab221a/"
                                    >
                                        <h4 className="my-auto py-4 viewProfile text-center">
                                            View Linkedin Profile
                                        </h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Bio;
