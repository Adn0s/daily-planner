import LinkedinLogo from '../../assets/images/linkedin-logo.png';
import Adn0sDev from '../../assets/images/adn0sdev-logo.png';
import GithubLogo from '../../assets/images/github-logo.png';
import Me from '../../assets/images/me.png';
import MotionWrapper from '../../Animate/MotionWrapper';
import React from 'react';
import LayoutWrapper from '../../Layout/LayoutWrapper';
import Header from '../../components/UI/Header/Header';

const About = ({}) => {
  return (
    <MotionWrapper>
      <LayoutWrapper>
        <Header title="About" />
        <div className="container m-auto py-10">
          <div className="flex flex-col md:flex-row justify-between m-auto">
            <div className="flex-2 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 md:pr-10 mb-10">
              <h2 className="text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Description
              </h2>
              <div>
                <p className="text-left mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  <b>EN</b> The application is a daily planner that allows users
                  to add tasks for the current day in a structured format. Users
                  can organize their daily activities efficiently by adding
                  tasks with details such as name, description, start time, end
                  time, category, tags, color, priority, and connections with
                  other tasks. The user interface provides an intuitive and
                  user-friendly experience for creating, updating, and managing
                  tasks. Tasks can be visually represented in a structured
                  timeline, making it easy for users to track their daily
                  schedule and ensure optimal productivity.
                </p>
              </div>
            </div>
            <div className="border border-black-50 sm:w-full md:w-80 m-auto  rounded flex flex-col items-center justify-center p-10">
              <h2 className="text-2xl font-bold my-2"> Credentials</h2>
              <div className="h-20">
                <img
                  src={Me}
                  width={80}
                  className="mx-auto"
                  alt="Just me"
                  loading="lazy"
                />
              </div>
              <p className="mt-5">
                <b>Contact</b> adnanlabiadh@gmail.com
              </p>
              <div className="mt-5 w-60 m-auto">
                <a
                  href="https://www.linkedin.com/in/adnanlabiadh/"
                  target="_blank"
                  className="flex px-5 py-2"
                  rel="noreferrer"
                >
                  <img
                    src={LinkedinLogo}
                    loading="lazy"
                    width={20}
                    className="mr-auto"
                    alt="Linkedin logo"
                    rel="noreferrer"
                  />
                  <p>/adn0s</p>
                </a>
                <a
                  href="https://github.com/adn0s"
                  target="_blank"
                  className="flex px-5 py-2"
                  rel="noreferrer"
                >
                  <img
                    src={GithubLogo}
                    loading="lazy"
                    width={20}
                    className="mr-auto"
                    alt="Github logo"
                  />
                  /adn0s
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 w-full">
            <div className="mt-10">
              <h3 className="text-xl my-2">Powered by</h3>
              <a
                href="https://adn0s.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  loading="lazy"
                  src={Adn0sDev}
                  width={250}
                  className="mx-auto"
                  alt="Adn0sDev logo"
                />
              </a>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </MotionWrapper>
  );
};

export default About;
