import React, { useState } from 'react'

import './TabPanel.css'
import SkillCard from '../cards/SkillCard/Skillcard';

import { FaSchool, FaUserGraduate, FaReact, FaNodeJs, FaPhp, FaJava, FaPython, FaLinux } from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiMui, SiTailwindcss, SiExpress, SiDjango, SiMongodb, SiMysql, SiSqlite, SiFirebase, SiFlutter, SiAndroidstudio, SiJavascript, SiDart, SiTypescript, SiDocker, SiKubernetes, SiApachemaven, SiGit, SiPostman } from "react-icons/si";

function TabPanel() {

    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }

    return (
        <>
            <>
                <section>
                    <div className="d-flex flex-wrap justify-content-between" style={{ backgroundColor: "#66727d94", borderRadius: '5rem', backdropFilter: 'blur(60%)' }}>
                        <h4 className={showtab === 1 ? "active navtabItem mx-auto" : "navtabItem mx-auto"} onClick={() => handletab(1)}>My Skills</h4>
                        <h4 className={showtab === 2 ? "active navtabItem mx-auto" : "navtabItem mx-auto"} onClick={() => handletab(2)}>Education</h4>
                        <h4 className={showtab === 3 ? "active navtabItem mx-auto" : "navtabItem mx-auto"} onClick={() => handletab(3)}>EXPERIENCE</h4>
                        <h4 className={showtab === 4 ? "active navtabItem mx-auto" : "navtabItem mx-auto"} onClick={() => handletab(4)}>ADDITIONAL SKILLS</h4>
                    </div>
                    <div className="tab-content my-3" id="pills-tabContent">

                        {/* start tab 1*/}
                        <div className={showtab === 1 ? "tab-pane fade show active p-lg-3 p-2" : "tab-pane fade show p-lg-3 p-2"} style={{ backgroundColor: 'rgba(102, 114, 125, 0.6)', borderRadius: '5rem' }} >

                            <div>
                                <h4 className='text-center' >Client Side</h4>
                                <div className="d-flex flex-wrap justify-content-around">
                                    <SkillCard docLink='https://react.dev/' icons={<FaReact />} />
                                    <SkillCard docLink='https://redux.js.org/' icons={<SiRedux />} />
                                    <SkillCard docLink='https://nextjs.org/' icons={<SiNextdotjs />} />
                                    <SkillCard docLink='https://mui.com/' icons={<SiMui />} />
                                    <SkillCard docLink='https://tailwindcss.com/' icons={<SiTailwindcss />} />
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h4 className='text-center' >Server Side</h4>
                                <div className="d-flex flex-wrap justify-content-around">
                                    <SkillCard docLink='https://nodejs.org/en' icons={<FaNodeJs />} />
                                    <SkillCard docLink='https://expressjs.com/' icons={<SiExpress />} />
                                    <SkillCard docLink='https://www.djangoproject.com/' icons={<SiDjango />} />
                                    <SkillCard docLink='https://www.php.net/' icons={<FaPhp />} />
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h4 className='text-center' >Database</h4>
                                <div className="d-flex flex-wrap justify-content-around">
                                    <SkillCard docLink='https://www.mongodb.com/' icons={<SiMongodb />} />
                                    <SkillCard docLink='https://www.mysql.com/' icons={<SiMysql />} />
                                    <SkillCard docLink='https://www.sqlite.org/index.html' icons={<SiSqlite />} />
                                    <SkillCard docLink='https://firebase.google.com/' icons={<SiFirebase />} />
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h4 className='text-center' >Mobile Application</h4>
                                <div className="d-flex flex-wrap justify-content-around">
                                    <SkillCard docLink='https://flutter.dev/' icons={<SiFlutter />} />
                                    <SkillCard docLink='https://developer.android.com/' icons={<SiAndroidstudio />} />
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h4 className='text-center' >Languages</h4>
                                <div className="d-flex flex-wrap justify-content-around">
                                    <SkillCard docLink='https://www.java.com/en/' icons={<FaJava />} />
                                    <SkillCard docLink='https://developer.mozilla.org/en-US/' icons={<SiJavascript />} />
                                    <SkillCard docLink='https://www.typescriptlang.org/' icons={<SiTypescript />} />
                                    <SkillCard docLink='https://www.python.org/' icons={<FaPython />} />
                                    <SkillCard docLink='https://dart.dev/' icons={<SiDart />} />
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h4 className='text-center' >DevOps Tools</h4>
                                <div className="d-flex flex-wrap justify-content-around">
                                    <SkillCard docLink='https://www.docker.com/' icons={<SiDocker />} />
                                    <SkillCard docLink='https://kubernetes.io/' icons={<SiKubernetes />} />
                                    <SkillCard docLink='https://maven.apache.org/' icons={<SiApachemaven />} />
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h4 className='text-center' >Tools and CLIs</h4>
                                <div className="d-flex flex-wrap justify-content-around">
                                    <SkillCard docLink='https://www.linux.org/' icons={<FaLinux />} />
                                    <SkillCard docLink='https://git-scm.com/' icons={<SiGit />} />
                                    <SkillCard docLink='https://www.postman.com/' icons={<SiPostman />} />
                                </div>
                            </div>


                        </div>
                        {/* close tab 1*/}


                        {/* start tab 2*/}
                        <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"} >
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div style={{ backgroundColor: 'rgba(102, 114, 125, 0.6)', borderRadius: '5rem' }}>
                                        <div className="h-100 p-5 my-2 rounded">
                                            <h3><FaUserGraduate fontSize='5rem' /> <br /><b>2021 - Pursuing</b></h3>
                                            <h2><b style={{ color: 'rgb(203, 178, 106)' }}>UNDER-GRADUATION <br />(B.Tech)</b></h2>
                                            {/* <h4>Percentage - 88%</h4> */}
                                            <h3 style={{ color: 'rgb(203, 178, 106)' }}>Institute of Technical Education and Research, SOA</h3>
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
                        {/* close tab 2*/}


                        {/* start tab 3*/}
                        <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} >

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
                        {/* close tab 3*/}


                        {/* start tab 4*/}
                        <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"} >
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
                        {/* close tab 4*/}

                    </div>
                </section>
            </>
        </>
    )
}

export default TabPanel
