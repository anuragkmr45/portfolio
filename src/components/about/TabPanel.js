import React, { useState } from 'react'

import './TabPanel.css'

// FaHtml5, FaCss3Alt, FaReact, FaNpm, FaPython, FaJava, FaNodeJs, FaPhp,
import { FaSchool, FaUserGraduate } from "react-icons/fa";
// import { SiJavascript, SiMysql, SiTailwindcss, SiMongodb, SiCanva, SiMui } from "react-icons/si";
// import { DiGit, DiDjango } from "react-icons/di";

function TabPanel() {

    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }

    return (
        <>
            <>
                <section>
                    <div className="">
                        <div className="d-flex flex-wrap justify-content-between" style={{ backgroundColor: "#66727d94", borderRadius: '5rem', backdropFilter: 'blur(60%)' }}>
                            <h4 className={showtab === 1 ? "active navtabItem mx-auto" : "navtabItem mx-auto"} onClick={() => handletab(1)}>My Skills</h4>
                            <h4 className={showtab === 2 ? "active navtabItem mx-auto" : "navtabItem mx-auto"} onClick={() => handletab(2)}>Education</h4>
                            <h4 className={showtab === 3 ? "active navtabItem mx-auto" : "navtabItem mx-auto"} onClick={() => handletab(3)}>EXPERIENCE</h4>
                            <h4 className={showtab === 4 ? "active navtabItem mx-auto" : "navtabItem mx-auto"} onClick={() => handletab(4)}>ADDITIONAL SKILLS</h4>
                        </div>
                        <div className="tab-content my-3" id="pills-tabContent">

                            {/* start tab 1*/}
                            <div className={showtab === 1 ? "tab-pane fade show active p-lg-4" : "tab-pane fade show p-lg-4"} style={{ backgroundColor: 'rgba(102, 114, 125, 0.6)', borderRadius: '5rem' }} >



                            </div>
                            {/* close tab 1*/}


                            {/* start tab 2*/}
                            <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"} >
                                <div className="">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div style={{ backgroundColor: 'rgba(102, 114, 125, 0.6)', borderRadius: '5rem' }}>
                                                <div className="h-100 p-5 my-2 rounded">
                                                    <h3><FaUserGraduate fontSize='5rem' /> <br /><b>2021 - Pursuing</b></h3>
                                                    <h2><b style={{ color: 'rgb(203, 178, 106)' }}>UNDER-GRADUATION <br />(B.Tech)</b></h2>
                                                    {/* <h4>Percentage - 88%</h4> */}
                                                    <h3 style={{ color: 'rgb(203, 178, 106)' }}>Institute of Technical Education and Research, SOA</h3>
                                                    {/* <ul>
                                                        <li>Had exemplary academic track record with multiple academic excellence award</li>
                                                        <li>Represented school on multiple platforms including on national level.</li>
                                                    </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div style={{ backgroundColor: 'rgba(102, 114, 125, 0.6)', borderRadius: '5rem' }}>
                                                <div className="h-100 p-4 rounded">
                                                    <h3><FaSchool fontSize='5rem' /> <br /><b>2021</b></h3>
                                                    <h1><b style={{ color: 'rgb(203, 178, 106)' }}>Class - 12</b></h1>
                                                    <h4>Percentage - 88%</h4>
                                                    <h3 style={{ color: 'rgb(203, 178, 106)' }}>Kendriya Vidhalaya, Noida</h3>
                                                    <ul>
                                                        <li>Had exemplary academic track record with multiple academic excellence award</li>
                                                        <li>Represented school on multiple platforms including on national level.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* close tab 2*/}


                            {/* start tab 3*/}
                            <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} >

                                <div className="">
                                    <div className='p-4 pt-5 my-2' style={{ backgroundColor: 'rgba(102, 114, 125, 0.6)', borderRadius: '5rem' }}>
                                        <div className="text-center">
                                            <h4>January 2022 - Present </h4>
                                            <h2 style={{ color: 'rgb(203, 178, 106)' }}>Chief Technology Officer (CTO)</h2>
                                            <h5>at <b> uncovercampus.com</b></h5>
                                            <h5>FULL STACK DEVELOPMENT</h5>
                                        </div>
                                        <div className='container mt-4'>
                                            <ul className=''>
                                                <li>
                                                    Developed website from scratch with various algorithm to make business site effective.
                                                </li>
                                                <li>
                                                    Manage whole database for huge count of students.
                                                </li>
                                                <li>
                                                    Manage several teams like tech developer team and social media marketing team .
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='p-4 pt-5 my-2' style={{ backgroundColor: 'rgba(102, 114, 125, 0.6)', borderRadius: '5rem' }}>
                                        <div className="text-center">
                                            <h4>September 2022 - Present </h4>
                                            <h2 style={{ color: 'rgb(203, 178, 106)' }}>Full Stack Developer</h2>
                                            <h5>at <b> Apoorba Industries</b></h5>
                                            <h5>FULL STACK DEVELOPMENT</h5>
                                        </div>
                                        <div className='container mt-4'>
                                            <ul className=''>
                                                <li>
                                                    Developed website from scratch with various algorithm to make business site effective.
                                                </li>
                                                <li>
                                                    Develop site in two different tech stacks.
                                                </li>
                                                <li>
                                                    Manage whole database for huge count of products and customers.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='p-4 pt-5 my-2' style={{ backgroundColor: 'rgba(102, 114, 125, 0.6)', borderRadius: '5rem' }}>
                                        <div className="text-center">
                                            <h4> 1 October 2022 -  30 October 2022 </h4>
                                            <h2 style={{ color: 'rgb(203, 178, 106)' }}>Open Source Developer</h2>
                                            <a className='link' href="https://hacktoberfest.com/" target='_blank' rel="noreferrer"><h5>at <b> Hacktoberfest 2022</b></h5></a>
                                            {/* <h5>FULL STACK DEVELOPMENT</h5> */}
                                        </div>
                                        <div className='container mt-4'>
                                            <ul className=''>
                                                <li>
                                                    Resolve issues in many repos.
                                                </li>
                                                <li>
                                                    Manage documentations and readme files.
                                                </li>
                                                <li>
                                                    Proper use of git and github with good descriptions in PR
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* close tab 3*/}


                            {/* start tab 4*/}
                            <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"} >

                                <div className="">
                                    <div className='p-lg-5' style={{ backgroundColor: 'rgba(102, 114, 125, 0.6)', borderRadius: '5rem' }}>
                                        <div className="text-center pt-5">
                                            <h2 style={{ color: 'rgb(203, 178, 106)' }}>SOFT SKILLS</h2>
                                        </div>
                                        <div className='container mt-4 pb-4'>
                                            <div>
                                                <h3> - Communication & Interpersonal skills</h3>
                                                <p>Have the ability to successfully express the desired message while keeping the listener engaged.</p>
                                            </div>
                                            <div>
                                                <h3> - Public speaking skills</h3>
                                                <p>Have substantial public speaking experience in the form of event hosting and presenting presentations in front of big groups. Participated in several debate and MUN competitions, which aided in the development of these talents.</p>
                                            </div>
                                            <div>
                                                <h3> - Leadership & Management skills</h3>
                                                <p>Skilled in organising others to achieve a common objective and motivating the team to achieve the desired result. Can organise and communicate properly in order to help a team or project</p>
                                            </div>
                                            <div>
                                                <h3> - Quick & Visual Learner</h3>
                                                <p>I am a strong visual learner who is driven to tackle challenges and find an efficient solution rapidly</p>
                                            </div>
                                            <div>
                                                <h3> - Effective Problem Solver</h3>
                                                <p>I have the capability to solve problems and determining the cause of the problem. Identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* close tab 4*/}


                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default TabPanel
