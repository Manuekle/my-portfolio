/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import i18next from 'i18next';
import emailjs from '@emailjs/browser';
import { eng } from '../Components/i18n/en';
import { esp } from '../Components/i18n/es';

import profile from '../assets/images/foto.jpeg';

import Locate from '../assets/icons/Locate';
import Linkedin from '../assets/icons/Linkedin';
import Twitter from '../assets/icons/Twitter';
import Idea from '../assets/Idea';
import Learn from '../assets/Learn';
import Team from '../assets/Team';
import Email from '../assets/Email';
import Close from '../assets/Close';
import Mail from '../assets/Mail';
import User from '../assets/User';
import Rocket from '../assets/Rocket';
import OpenNew from '../assets/OpenNew';
import Cv from '../assets/Cv';

import Loader from '../Components/Loader';
import Delete from '../Components/Delete';

import Fup from '../assets/images/Fup.jpg';
import RedColsi from '../assets/images/RedColsi.png';

// Docs
import DocSENA from '../assets/Docs/MANUEL_ESTEBAN_ERAZO_MEDINA.pdf';
import DocRED from '../assets/Docs/REDCOLSI.pdf';
import CV from '../assets/Docs/CV.pdf';

// Icons Like this
import Github from '../assets/icons/Github';
import Javascript from '../assets/icons/Javascript';
import ReactIcon from '../assets/icons/React';
import Tailwind from '../assets/icons/Tailwind';
import Astro from '../assets/icons/Astro';
import Eslint from '../assets/icons/Eslint';
import Git from '../assets/icons/Git';
import Python from '../assets/icons/Python';
import Django from '../assets/icons/Django';
import Redis from '../assets/icons/Redis';
import Vite from '../assets/icons/Vite';
import Deno from '../assets/icons/Deno';
import Bash from '../assets/icons/Bash';
import Markdown from '../assets/icons/Markdown';
import Linux from '../assets/icons/Linux';
import Postman from '../assets/icons/Postman';
import Docker from '../assets/icons/Docker';
import Postgresql from '../assets/icons/Postgresql';
import Nginx from '../assets/icons/Nginx';
import Nodejs from '../assets/icons/Node';
import Virtualbox from '../assets/icons/Virtualbox';
import Vscode from '../assets/icons/Vscode';
import Html from '../assets/icons/Html';
import Css from '../assets/icons/Css';

// Icons Like this not
import Vue from '../assets/icons/Vue';
import Angular from '../assets/icons/Angular';
import Typescript from '../assets/icons/Typescript';
import Sass from '../assets/icons/Sass';
import Postcss from '../assets/icons/Postcss';
import Bootstrap from '../assets/icons/Bootstrap';
import MySQL from '../assets/icons/Mysql';
import Wordpress from '../assets/icons/Wordpress';
import Php from '../assets/icons/Php';
import Laravel from '../assets/icons/Laravel';

// Learning
import Bun from '../assets/icons/Bun';
import Svelte from '../assets/icons/Svelte';
import Jest from '../assets/icons/Jest';
import Nextjs from '../assets/icons/Next';
import Dart from '../assets/icons/Dart';
import MongoDB from '../assets/icons/Mongodb';
import Redux from '../assets/icons/Redux';
import Router from '../assets/icons/Router';
import GraphQL from '../assets/icons/Graphql';
import Solid from '../assets/icons/Solid';
import Npm from '../assets/icons/Npm';
import Env from '../assets/icons/Env';
import StyleComponents from '../assets/icons/Style';
import Framer from '../assets/icons/Framer';
import Supabase from '../assets/icons/Supabase';
import Aws from '../assets/icons/Aws';
import Json from '../assets/icons/Json';
import Jwt from '../assets/icons/Jwt';
import Arduino from '../assets/icons/Arduino';
import Raspberry from '../assets/icons/Raspberry';
import Vercel from '../assets/icons/Vercel';
import Translate from '../assets/Translate';
// import Mysql from '../assets/icons/Mysql';

function Base() {
  const [formData, setFormData] = useState(false);

  const [language, setLanguage] = useState('es');

  i18next.init({
    interpolation: { escapeValue: false },
    lng: language,
    resources: {
      en: {
        translation: eng
      },
      es: {
        translation: esp
      }
    }
  });

  const [open, setOpen] = useState(false);

  const toggleSwitch = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const downloadCv = () => {
    window.open(CV);
  };

  const [showPokedex, setShowPokedex] = useState(false);
  const [showSensor, setShowSensor] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showCiber, setShowCiber] = useState(false);
  const [showQattar, setShowQattar] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  // const handleFocus = () => {
  //   console.log('focus');
  // };

  const [showDoc1, setShowDoc1] = useCycle(false, true);
  const [showDoc2, setShowDoc2] = useCycle(false, true);
  const [showMail, setShowMail] = useCycle(false, true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  if (showDoc1) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  if (showDoc2) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i257wwu',
        'template_4tsk5fg',
        form.current,
        '2vfMExIGmsHOlcJxL'
      )
      .then(
        (result) => {
          setFormData(true);
          setTimeout(() => {
            setFormData(false);
            setShowMail(false);
            setOpen(true);
          }, 500);
          console.log(result.text);
          form.current.reset();
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const img =
    'https://scontent.fbog10-1.fna.fbcdn.net/v/t39.30808-6/323698977_5503630156415284_729846346412372805_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9Y2ynHRxVkMAX_VbXk3&_nc_ht=scontent.fbog10-1.fna&oh=00_AfC7ub4FUOiLBzXuHbspGnEeyzN-_P_A8VhOpuHJBkr95g&oe=63BB1EE3';
  // const img =
  //   'https://i.pinimg.com/736x/b5/49/41/b5494197b2d462c940f88988b203d290.jpg';

  const sensor =
    'https://github.com/project-iot-fup/Documents/raw/main/img/1paso.jfif';

  const pokemon =
    'https://i0.wp.com/tensei-shinai.com/wp-content/uploads/2022/05/pokeapi-1.png?fit=640%2C360&ssl=1';

  const country =
    'https://repository-images.githubusercontent.com/393506201/fb2ead61-3333-4b3d-9ff3-b2609cea784d';

  const pishing =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJFygUDODKtz6vnhIz3GgBiIts8_POlqBfw&usqp=CAU';

  const sena =
    'https://lostramites.com.co/wp-content/uploads/logo-sena-fondo-naranja-300x300.jpg';

  const qatar =
    'https://e.rpp-noticias.io/normal/2022/10/15/141514_1330437.jpg';

  const weather =
    'https://miro.medium.com/max/1400/1*zeNkd44fybuuMSbz52NJvQ.png';

  return (
    <section className="bg-[#242424] w-full h-full">
      <div className="grid justify-center px-8 lg:px-64 xl:px-80">
        {/* Navigation */}
        <div className="fixed z-20 top-0 left-0 justify-end items-end right-0 flex p-4 flex-col gap-2 backdrop-blur-sm xl:backdrop-blur-none bg-black/30 xl:bg-transparent">
          {/* <Lang /> */}

          <button
            type="button"
            onClick={toggleSwitch}
            className={
              language === 'es'
                ? 'border border-zinc-600 text-white text-sm rounded-md px-2 py-1 flex flex-row gap-2 items-center justify-center bg-zinc-900'
                : 'border border-zinc-600 text-white text-sm rounded-md px-2 py-1 flex flex-row gap-2 items-center justify-center bg-zinc-900'
            }
          >
            <span>
              <Translate className="w-4 h-4" />
            </span>
            <motion.div
              layout
              whileTap={{ scale: 1.1 }}
              animate={{ scale: 1.2 }}
            >
              {language === 'es' ? <h1>🇪🇸</h1> : <h1>🇺🇸</h1>}
            </motion.div>
          </button>
        </div>
        {/* Content */}
        <section className="grid py-24 xl:gap-44 gap-24">
          {/* Header */}
          <div className="flex xl:flex-row flex-col gap-6 items-start">
            <article className="flex relative">
              <div
                className="absolute bg-sky-500 p-10 top-0 left-0 rounded-full"
                style={{
                  filter: 'blur(100px)'
                }}
              />
              <div
                className="absolute bg-fuchsia-500 p-10 bottom-0 right-0 rounded-full"
                style={{
                  filter: 'blur(100px)'
                }}
              />
              <figure className="relative bg-[#242424] rounded-full overflow-hidden border border-zinc-600 w-56 h-56">
                <img src={profile} alt="profile" />
              </figure>
            </article>
            <article className="flex flex-col justify-between gap-6">
              <span className="flex flex-col gap-1">
                <h1 className="text-xl xl:text-2xl font-bold text-white tracking-wide type">
                  Manuel Esteban Erazo Medina
                </h1>
                <h1 className="text-md xl:text-lg font-normal text-white tracking-normal capitalize">
                  {i18next.t('subtitle')}
                </h1>
              </span>
              <span className="flex flex-row gap-2 items-center">
                <Locate className="w-5 h-5 fill-white" />
                <h1 className="text-white text-sm">Colombia, Popayán</h1>
              </span>
              <span className="flex flex-row gap-4">
                <a
                  href="https://github.com/Manuekle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/manuekle/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300" />
                </a>
                <a
                  href="https://twitter.com/manu_jsx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300" />
                </a>
                <button type="button" onClick={setShowMail}>
                  <Email className="fill-white transition duration-300 ease-in-out hover:fill-zinc-300" />
                </button>
              </span>
              <span className="flex flex-col">
                <button
                  type="button"
                  onClick={downloadCv}
                  className="flex flex-row gap-3 items-center justify-center xl:w-44 w-full text-zinc-300 font-bold tracking-wide text-sm border border-zinc-600 rounded-full p-2 bg-[#3A3A3A] hover:bg-[#484848] hover:text-white transition duration-300 ease-in-out"
                >
                  {/* <Cv className="w-4 h-4 fill-zinc-300" /> */}
                  {i18next.t('cv')}
                </button>
              </span>
            </article>
          </div>
          {/* Skills */}
          <div className="grid-cols-2 gap-6 xl:flex grid justify-between">
            <section className="col-span-2 xl:col-span-1">
              {/* Presentation */}
              <h1 className="capitalize text-white text-xl xl:text-3xl tracking-wide">
                {/* Presentación */}
                {i18next.t('presentation')}
              </h1>
              <p className="text-[#9B9B9B] text-sm mt-4 xl:w-96 w-full">
                {/* Soy una persona que disfruta trabajando en entornos dinámicos y
                en contacto con el público, capaz de trabajar en equipo y de
                forma independiente según las necesidades, con lo cual tengo la
                capacidad para aprender y aplicar mis conocimientos en el ámbito
                profesional. */}
                {i18next.t('text1')}
              </p>
              <p className="text-[#9B9B9B] text-sm mt-4 xl:w-96 w-full">
                {/* En busca de una oportunidad laboral en la que desarrollar mis
                habilidades y adquirir experiencia, además de ofrecer todo mi
                esfuerzo. */}
                {i18next.t('text2')}
              </p>
              <p className="text-[#9B9B9B] text-sm mt-4 xl:w-96 w-full">
                {/* Me especializo en diseñar sitio web con el fin de mejorar la
                experiencia de usuario, crear sitios dinámicos y responsivos,
                sin embargo me esfuerzo por garantizar la satisfacción del
                cliente en todo momento. */}
                {i18next.t('text3')}
              </p>
              {/* Lenguages */}
              <h1 className="capitalize text-white text-xl xl:text-3xl tracking-wide mt-12">
                {/* Idiomas */}
                {i18next.t('languages')}
              </h1>
              <div className="text-white text-sm py-2">
                <h1>
                  <black className="font-bold">{i18next.t('l1')}</black> /{' '}
                  <black className="font-bold">{i18next.t('l2')}</black>
                </h1>
              </div>
              {/* About me */}
              <h1 className="capitalize text-white text-xl xl:text-3xl tracking-wide mt-12">
                {/* Datos interesantes sobre mi */}
                {i18next.t('about')}
              </h1>
              <div className="flex flex-col gap-4 mt-4 xl:w-96 w-full ">
                <span className="flex flex-col gap-1">
                  <h1 className="text-white text-sm underline">
                    #{i18next.t('cybersecurity')}
                  </h1>
                  <p className="text-[#9B9B9B] text-sm">{i18next.t('tag1')}</p>
                </span>
                <span className="flex flex-col gap-1">
                  <h1 className="text-white text-sm underline">
                    #{i18next.t('instruments')}
                  </h1>
                  <p className="text-[#9B9B9B] text-sm">{i18next.t('tag2')}</p>
                </span>
                <span className="flex flex-col gap-1">
                  <h1 className="text-white text-sm underline">
                    #{i18next.t('cook')}
                  </h1>
                  <p className="text-[#9B9B9B] text-sm">{i18next.t('tag3')}</p>
                </span>
                <span className="flex flex-col gap-1">
                  <h1 className="text-white text-sm underline">
                    #{i18next.t('football')}
                  </h1>
                  <p className="text-[#9B9B9B] text-sm">{i18next.t('tag4')}</p>
                </span>
                <span className="flex flex-col gap-1">
                  <h1 className="text-white text-sm underline">
                    #{i18next.t('cars')}
                  </h1>
                  <p className="text-[#9B9B9B] text-sm">{i18next.t('tag5')}</p>
                </span>
              </div>
            </section>
            <section className="col-span-2 xl:col-span-1">
              <h1 className="capitalize text-white text-xl xl:text-3xl w-full tracking-wide">
                {/* Tecnologías y herramientas */}
                {i18next.t('technologies')}
              </h1>
              {/* Like */}
              <div className="text-white text-sm py-2">
                <h1>{i18next.t('t1')}</h1>
                <hr className="border border-zinc-600 w-12" />
              </div>
              <div className="grid xl:grid-cols-6 grid-cols-5 gap-6 mt-4 xl:w-96 w-full">
                <span className="flex flex-col gap-1 items-center">
                  <Html className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Html</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Css className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Css</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Javascript className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Javascript</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Python className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Python</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Django className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Django</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <ReactIcon className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">React</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Vite className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Vite</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Redux className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Redux</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Router className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs flex text-center">
                    React
                    <br />
                    Router
                  </h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <StyleComponents className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs flex text-center">
                    Styled
                    <br />
                    Components
                  </h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Framer className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs flex text-center">
                    Framer
                    <br />
                    Motion
                  </h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Tailwind className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Tailwind</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Supabase className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Supabase</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Astro className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Astro</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Npm className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Npm</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Eslint className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Eslint</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Docker className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Docker</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Aws className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Aws</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Json className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Json</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Jwt className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Jwt</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Env className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">.Env</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Postgresql className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Postgresql</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Markdown className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Markdown</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Github className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Github</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Git className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Git</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Bash className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Bash</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Linux className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Linux</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Postman className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Postman</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Vscode className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Vscode</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Virtualbox className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Virtualbox</h1>
                </span>
              </div>
              {/* Don't Like */}
              {/* <div className="text-white text-sm py-2 mt-4">
                <h1>
                  {i18next.t('t2')}{' '}
                  <block className="text-sm font-bold">
                    {i18next.t('t21')}
                  </block>{' '}
                  {i18next.t('t22')}
                </h1>
                <hr className="border border-zinc-600 w-12" />
              </div> */}
              {/* <div className="grid xl:grid-cols-6 grid-cols-5 gap-6 mt-4 xl:w-96 w-full">
                <span className="flex flex-col gap-1 items-center">
                  <Vue className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Vue</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Angular className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Angular</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Sass className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Sass</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Postcss className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">PostCSS</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Typescript className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Typescript</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Bootstrap className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Bootstrap</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Php className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Php</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Laravel className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Laravel</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <MySQL className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">MySQL</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Wordpress className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Wordpress</h1>
                </span>
              </div> */}
              {/* Learning */}
              <div className="text-white text-sm py-2 mt-4">
                <h1>{i18next.t('t3')}</h1>
                <hr className="border border-zinc-600 w-12" />
              </div>
              <div className="grid xl:grid-cols-6 grid-cols-5 gap-6 mt-4 xl:w-96 w-full">
                <span className="flex flex-col gap-1 items-center">
                  <Bun className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Bun</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Svelte className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Svelte</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Jest className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Jest</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Nextjs className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Nextjs</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Dart className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Dart</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <MongoDB className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">MongoDB</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Deno className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Deno</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Nodejs className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Nodejs</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Redis className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Redis</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <GraphQL className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">GraphQL</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Solid className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Solid</h1>
                </span>
                <span className="flex flex-col gap-1 items-center">
                  <Nginx className="w-5 h-5 fill-white" />
                  <h1 className="text-white text-xs">Nginx</h1>
                </span>
              </div>
              {/* Habilities */}
              <h1 className="capitalize text-white text-xl xl:text-3xl tracking-wide mt-12 mb-4">
                {/* Mis Habilidades */}
                {i18next.t('habilities')}
              </h1>
              <div className="flex flex-col gap-4">
                <span className="flex flex-row gap-2 items-center">
                  <Learn className="w-10 h-10 fill-white" />
                  <h1 className="text-white text-sm font-bold">
                    {i18next.t('h1')}
                  </h1>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <Team className="w-10 h-10 fill-white" />
                  <h1 className="text-white text-sm font-bold">
                    {i18next.t('h2')}
                  </h1>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <Idea className="w-10 h-10 fill-white" />
                  <h1 className="text-white text-sm font-bold">
                    {i18next.t('h3')}
                  </h1>
                </span>
              </div>
            </section>
          </div>
          {/* Work Experience */}
          <div className="grid-cols-2 flex flex-col gap-4">
            <h1 className="capitalize text-white text-xl xl:text-3xl tracking-wide">
              {i18next.t('experience')}
            </h1>
            <section className="border border-zinc-600 flex xl:flex-row flex-col gap-4 rounded-md overflow-hidden p-8 w-full">
              <figure className="flex justify-center items-start xl:w-44 w-full">
                <img src={sena} alt="SENA" className="w-40 h-40 object-cover" />
              </figure>
              <div className="border-none xl:border border-t-0 border-b-0 border-r-0 border-zinc-600 xl:pl-4 pl-0 flex flex-col gap-3">
                <span className="text-white tracking-normal">
                  <h1 className="text-lg xl:text-xl font-normal">
                    {i18next.t('e1')}
                  </h1>
                  <h1 className="text-xs xl:text-sm font-normal">
                    {i18next.t('es1')}{' '}
                    <strong className="text-[#9B9B9B]">
                      {i18next.t('es2')}
                    </strong>
                  </h1>
                </span>
                <p className="text-zinc-300 text-sm xl:w-[60em] w-full text-justify">
                  {i18next.t('te')}
                </p>
                <li className="text-zinc-300 text-sm capitalize text-justify">
                  {i18next.t('dte1')}
                </li>
                <li className="text-zinc-300 text-sm capitalize text-justify">
                  {i18next.t('dte2')}
                </li>
                <li className="text-zinc-300 text-sm capitalize text-justify">
                  {i18next.t('dte3')}
                </li>
                <li className="text-zinc-300 text-sm capitalize text-justify">
                  {i18next.t('dte4')}
                </li>
                <li className="text-zinc-300 text-sm capitalize text-justify">
                  {i18next.t('dte5')}
                </li>
                <h1 className="text-sm xl:text-md font-normal text-white">
                  {i18next.t('tu')}
                </h1>
                <span className="grid xl:grid-cols-12 grid-cols-4 xl:gap-1 gap-3 mt-2 xl:w-96">
                  <Html className="w-5 h-5 fill-zinc-300" />
                  <Css className="w-5 h-5 fill-zinc-300" />
                  <Javascript className="w-5 h-5 fill-zinc-300" />
                  <Typescript className="w-5 h-5 fill-zinc-300" />
                  <Php className="w-5 h-5 fill-zinc-300" />
                  <Laravel className="w-5 h-5 fill-zinc-300" />
                  <Vue className="w-5 h-5 fill-zinc-300" />
                  <Bootstrap className="w-5 h-5 fill-zinc-300" />
                  <Postgresql className="w-5 h-5 fill-zinc-300" />
                  <Postman className="w-5 h-5 fill-zinc-300" />
                  <Vscode className="w-5 h-5 fill-zinc-300" />
                  <Git className="w-5 h-5 fill-zinc-300" />
                </span>
              </div>
            </section>
          </div>
          {/* Education */}
          <div className="grid-cols-2 flex flex-col gap-4">
            <h1 className="capitalize text-white text-xl xl:text-3xl tracking-wide">
              {i18next.t('education')}
            </h1>
            <section className="border border-zinc-600 flex xl:flex-row flex-col gap-4 rounded-md overflow-hidden p-8 w-full">
              <figure className="flex justify-center items-start xl:w-40 w-full">
                <img src={sena} alt="SENA" className="w-40 h-40 object-cover" />
              </figure>
              <div className="xl:border border-none border-t-0 border-b-0 border-r-0 border-zinc-600 xl:pl-4 pl-0 flex flex-col gap-3">
                <span className="text-white tracking-normal">
                  <h1 className="text-lg xl:text-xl font-normal">
                    {i18next.t('ed1')}
                  </h1>
                  <h1 className="text-xs xl:text-sm font-normal">
                    {i18next.t('ed2')}{' '}
                    <strong className="text-[#9B9B9B]">
                      {i18next.t('ed3')}
                    </strong>
                  </h1>
                </span>
                <p className="text-zinc-300 text-sm xl:w-[60em] w-full text-justify">
                  {i18next.t('edt1')}
                </p>
                <h1 className="text-sm xl:text-md font-normal text-white">
                  {i18next.t('edt2')}
                </h1>
                <span className="grid xl:grid-cols-12 grid-cols-4 xl:gap-1 gap-3 mt-2 xl:w-96">
                  <Python className="w-5 h-5 fill-zinc-300" />
                  <Django className="w-5 h-5 fill-zinc-300" />
                  <Html className="w-5 h-5 fill-zinc-300" />
                  <Css className="w-5 h-5 fill-zinc-300" />
                  <Javascript className="w-5 h-5 fill-zinc-300" />
                  <Git className="w-5 h-5 fill-zinc-300" />
                  <MySQL className="w-5 h-5 fill-zinc-300" />
                </span>
              </div>
            </section>
            <section className="border border-zinc-600 flex xl:flex-row flex-col gap-4 rounded-md overflow-hidden p-8 w-full">
              <figure className="flex justify-center items-start xl:w-40 w-full">
                <img src={Fup} alt="FUP" className="w-40 h-40 object-cover" />
              </figure>
              <div className="xl:border border-none border-t-0 border-b-0 border-r-0 border-zinc-600 xl:pl-4 pl-0 flex flex-col gap-3">
                <span className="text-white tracking-normal">
                  <h1 className="text-lg xl:text-xl font-normal">
                    {i18next.t('ed4')}
                  </h1>
                  <h1 className="text-xs xl:text-sm font-normal">
                    {i18next.t('ed5')}{' '}
                    <strong className="text-[#9B9B9B]">
                      {i18next.t('ed6')}
                    </strong>
                  </h1>
                </span>
                <p className="text-zinc-300 text-sm xl:w-[60em] w-full text-justify">
                  {i18next.t('edt3')}
                  <br />
                  {i18next.t('edt4')}
                </p>
              </div>
            </section>
          </div>
          {/* Certificados */}
          <div className="grid-cols-2 flex flex-col gap-4">
            <h1 className="capitalize text-white text-xl xl:text-3xl tracking-wide">
              {i18next.t('certificates')}
            </h1>
            <section className="border border-zinc-600 flex xl:flex-row flex-col gap-4 rounded-md overflow-hidden p-8 w-full">
              <figure className="flex justify-center items-start xl:w-40 w-full">
                <img
                  src={RedColsi}
                  alt="RED COLSI"
                  className="w-40 h-40 object-cover"
                />
              </figure>
              <div className="xl:border border-none border-t-0 border-b-0 border-r-0 border-zinc-600 xl:pl-4 pl-0 flex flex-col gap-3">
                <span className="text-white tracking-normal">
                  <h1 className="text-lg xl:text-xl font-normal">
                    {i18next.t('c1')}
                  </h1>
                  <h1 className="text-xs xl:text-sm font-normal">
                    {i18next.t('c2')}{' '}
                    <strong className="text-[#9B9B9B]">
                      {i18next.t('c3')}
                    </strong>
                  </h1>
                </span>
                <h1 className="text-zinc-300 font-bold text-sm xl:w-[60em] w-full text-justify">
                  {i18next.t('ct1')}
                </h1>
                <p className="text-zinc-300 text-sm xl:w-[60em] w-full text-justify">
                  {i18next.t('ct2')}
                </p>
                <span className="flex flex-col justify-center xl:px-0 px-12">
                  <button
                    type="button"
                    onClick={setShowDoc1}
                    className="xl:w-44 w-full text-zinc-300 font-bold tracking-wide text-sm border border-zinc-600 rounded-full p-2 bg-[#3A3A3A] hover:bg-[#484848] hover:text-white transition duration-300 ease-in-out"
                  >
                    {i18next.t('cb1')}
                  </button>
                </span>
              </div>
            </section>
            <section className="border border-zinc-600 flex xl:flex-row flex-col gap-4 rounded-md overflow-hidden p-8 w-full">
              <figure className="flex justify-center items-start xl:w-40 w-full">
                <img
                  src={sena}
                  alt="SENASOFT"
                  className="w-40 h-40 object-cover"
                />
              </figure>
              <div className="xl:border border-none border-t-0 border-b-0 border-r-0 border-zinc-600 xl:pl-4 pl-0 flex flex-col gap-3">
                <span className="text-white tracking-normal">
                  <h1 className="text-lg xl:text-xl font-normal">
                    {i18next.t('c4')}
                  </h1>
                  <h1 className="text-xs xl:text-sm font-normal">
                    {i18next.t('c5')}{' '}
                    <strong className="text-[#9B9B9B]">
                      {i18next.t('c6')}
                    </strong>
                  </h1>
                </span>
                <p className="text-zinc-300 text-sm xl:w-[60em] w-full text-justify">
                  {i18next.t('ct3')}
                </p>
                <p className="text-zinc-300 text-sm xl:w-[60em] w-full text-justify">
                  {i18next.t('ct4')}
                </p>
                <h1 className="text-sm xl:text-md font-normal text-white">
                  {i18next.t('cb2')}:{' '}
                </h1>
                <span className="grid xl:grid-cols-12 grid-cols-4 xl:gap-1 gap-3 mt-2 xl:w-96">
                  <Python className="w-5 h-5 fill-zinc-300" />
                  <Django className="w-5 h-5 fill-zinc-300" />
                  <Html className="w-5 h-5 fill-zinc-300" />
                  <Css className="w-5 h-5 fill-zinc-300" />
                  <Javascript className="w-5 h-5 fill-zinc-300" />
                  <Git className="w-5 h-5 fill-zinc-300" />
                  <MySQL className="w-5 h-5 fill-zinc-300" />
                </span>
                <span className="flex flex-col justify-center xl:px-0 px-12">
                  <button
                    type="button"
                    onClick={setShowDoc2}
                    className="xl:w-44 w-full text-zinc-300 font-bold tracking-wide text-sm border border-zinc-600 rounded-full p-2 bg-[#3A3A3A] hover:bg-[#484848] hover:text-white transition duration-300 ease-in-out"
                  >
                    {i18next.t('cb1')}
                  </button>
                </span>
              </div>
            </section>
          </div>
          {/* Proyectos */}
          <div className="grid-cols-2 flex flex-col gap-4">
            <h1 className="capitalize text-white text-xl xl:text-3xl tracking-wide">
              {i18next.t('projects')}
            </h1>
            <section className="grid grid-cols-3 gap-4 w-full">
              <div className="col-span-3 xl:col-span-1 flex flex-col gap-3 border border-zinc-600 rounded-lg p-4">
                <figure className="relative bg-[#242424] rounded-md overflow-hidden border border-zinc-600 h-44">
                  <img
                    src={sensor}
                    alt="sensor"
                    className="object-cover w-full h-full"
                  />
                  <motion.div
                    className="absolute w-full h-full hover:bg-gradient-to-t from-black/90 via-black/70 to-black/60 top-0 left-0 transition-opacity duration-1000 ease-out bg-opacity-50 hover:bg-opacity-100"
                    onMouseEnter={() => setShowSensor(true)}
                    onMouseLeave={() => setShowSensor(false)}
                    animate={{ opacity: showSensor ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="absolute w-full h-full top-0 right-0 flex flex-row gap-2 justify-center items-center">
                      <a
                        href="https://github.com/orgs/project-iot-fup/repositories"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="w-4 h-4 fill-white hover:fill-zinc-300" />
                      </a>
                    </span>
                  </motion.div>
                </figure>
                <h1 className="text-sm xl:text-md font-bold text-white">
                  <a
                    href="https://github.com/orgs/project-iot-fup/repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="transition duration-300 ease-in-out hover:underline hover:text-zinc-300"
                  >
                    {i18next.t('p1')}
                  </a>
                </h1>
                <p className="text-sm text-zinc-300">{i18next.t('p2')}</p>
                <div>
                  <h1 className="text-sm text-white">{i18next.t('pt')}</h1>
                  <span className="flex flex-row gap-4 mt-2">
                    <Aws className="w-5 h-5 fill-zinc-300" />
                    <Postgresql className="w-5 h-5 fill-zinc-300" />
                    <Python className="w-5 h-5 fill-zinc-300" />
                    <Django className="w-5 h-5 fill-zinc-300" />
                    <ReactIcon className="w-5 h-5 fill-zinc-300" />
                    <Tailwind className="w-5 h-5 fill-zinc-300" />
                    <Arduino className="w-5 h-5 fill-zinc-300" />
                    <Raspberry className="w-5 h-5 fill-zinc-300" />
                  </span>
                </div>
              </div>
              <div className="col-span-3 xl:col-span-1 flex flex-col gap-3 border border-zinc-600 rounded-lg p-4">
                <figure className="relative bg-[#242424] rounded-md overflow-hidden border border-zinc-600 h-44">
                  <img
                    src={pokemon}
                    alt="pokemon"
                    className="object-cover w-full h-full"
                  />
                  <motion.div
                    className="absolute w-full h-full hover:bg-gradient-to-t from-black/90 via-black/70 to-black/60 top-0 left-0 transition-opacity duration-1000 ease-out bg-opacity-50 hover:bg-opacity-100"
                    onMouseEnter={() => setShowPokedex(true)}
                    onMouseLeave={() => setShowPokedex(false)}
                    animate={{ opacity: showPokedex ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="absolute w-full h-full top-0 right-0 flex flex-row gap-2 justify-center items-center">
                      <a
                        href="https://github.com/Manuekle/pokedex"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="w-4 h-4 fill-white hover:fill-zinc-300" />
                      </a>
                      <a
                        href="https://pokedex-apiv2.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <OpenNew className="fill-white hover:fill-zinc-300" />
                      </a>
                    </span>
                  </motion.div>
                </figure>
                <h1 className="text-sm xl:text-md font-bold text-white">
                  <a
                    href="https://pokedex-apiv2.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition duration-300 ease-in-out hover:underline hover:text-zinc-300"
                  >
                    {i18next.t('p3')}
                  </a>
                </h1>
                <p className="text-sm text-zinc-300">{i18next.t('p4')}</p>
                <div>
                  <h1 className="text-sm text-white">{i18next.t('pt')}</h1>
                  <span className="flex flex-row gap-4 mt-2">
                    <Javascript className="w-5 h-5 fill-zinc-300" />
                    <ReactIcon className="w-5 h-5 fill-zinc-300" />
                    <Tailwind className="w-5 h-5 fill-zinc-300" />
                    <Vercel className="w-5 h-5 fill-zinc-300" />
                  </span>
                </div>
              </div>
              <div className="col-span-3 xl:col-span-1 flex flex-col gap-3 border border-zinc-600 rounded-lg p-4">
                <figure className="relative bg-[#242424] rounded-md overflow-hidden border border-zinc-600 h-44">
                  <img
                    src={country}
                    alt="country"
                    className="object-cover w-full h-full"
                  />
                  <motion.div
                    className="absolute w-full h-full hover:bg-gradient-to-t from-black/90 via-black/70 to-black/60 top-0 left-0 transition-opacity duration-1000 ease-out bg-opacity-50 hover:bg-opacity-100"
                    onMouseEnter={() => setShowCountry(true)}
                    onMouseLeave={() => setShowCountry(false)}
                    animate={{ opacity: showCountry ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="absolute w-full h-full top-0 right-0 flex flex-row gap-2 justify-center items-center">
                      <a
                        href="https://github.com/Manuekle/countryAngular"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="w-4 h-4 fill-white hover:fill-zinc-300" />
                      </a>
                      <a
                        href="https://country-angular.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <OpenNew className="fill-white hover:fill-zinc-300" />
                      </a>
                    </span>
                  </motion.div>
                </figure>
                <h1 className="text-sm xl:text-md font-bold text-white">
                  <a
                    href="https://country-angular.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition duration-300 ease-in-out hover:underline hover:text-zinc-300"
                  >
                    {i18next.t('p5')}
                  </a>
                </h1>
                <p className="text-sm text-zinc-300">{i18next.t('p6')}</p>
                <div>
                  <h1 className="text-sm text-white">{i18next.t('pt')}</h1>
                  <span className="flex flex-row gap-4 mt-2">
                    <Angular className="w-5 h-5 fill-zinc-300" />
                    <Bootstrap className="w-5 h-5 fill-zinc-300" />
                    <Typescript className="w-5 h-5 fill-zinc-300" />
                    <Vercel className="w-5 h-5 fill-zinc-300" />
                  </span>
                </div>
              </div>
              <div className="col-span-3 xl:col-span-1 flex flex-col gap-3 border border-zinc-600 rounded-lg p-4">
                <figure className="relative bg-[#242424] rounded-md overflow-hidden border border-zinc-600 h-44">
                  <img
                    src={pishing}
                    alt="pishing"
                    className="object-cover w-full h-full"
                  />
                  <motion.div
                    className="absolute w-full h-full hover:bg-gradient-to-t from-black/90 via-black/70 to-black/60 top-0 left-0 transition-opacity duration-1000 ease-out bg-opacity-50 hover:bg-opacity-100"
                    onMouseEnter={() => setShowCiber(true)}
                    onMouseLeave={() => setShowCiber(false)}
                    animate={{ opacity: showCiber ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="absolute w-full h-full top-0 right-0 flex flex-row gap-2 justify-center items-center">
                      <a
                        href="https://github.com/Manuekle/phishing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="w-4 h-4 fill-white hover:fill-zinc-300" />
                      </a>
                      <a
                        href="https://phishing-fup.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <OpenNew className="fill-white hover:fill-zinc-300" />
                      </a>
                    </span>
                  </motion.div>
                </figure>
                <h1 className="text-sm xl:text-md font-bold text-white">
                  <a
                    href="https://phishing-fup.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition duration-300 ease-in-out hover:underline hover:text-zinc-300"
                  >
                    {i18next.t('p7')}
                  </a>
                </h1>
                <p className="text-sm text-zinc-300">{i18next.t('p8')}</p>
                <div>
                  <h1 className="text-sm text-white">{i18next.t('pt')}</h1>
                  <span className="flex flex-row gap-4 mt-2">
                    <ReactIcon className="w-5 h-5 fill-zinc-300" />
                    <Tailwind className="w-5 h-5 fill-zinc-300" />
                    <Supabase className="w-5 h-5 fill-zinc-300" />
                    <Vercel className="w-5 h-5 fill-zinc-300" />
                  </span>
                </div>
              </div>
              <div className="col-span-3 xl:col-span-1 flex flex-col gap-3 border border-zinc-600 rounded-lg p-4">
                <figure className="relative bg-[#242424] rounded-md overflow-hidden border border-zinc-600 h-44">
                  <img
                    src={qatar}
                    alt="qatar"
                    className="object-cover w-full h-full"
                  />
                  <motion.div
                    className="absolute w-full h-full hover:bg-gradient-to-t from-black/90 via-black/70 to-black/60 top-0 left-0 transition-opacity duration-1000 ease-out bg-opacity-50 hover:bg-opacity-100"
                    onMouseEnter={() => setShowQattar(true)}
                    onMouseLeave={() => setShowQattar(false)}
                    animate={{ opacity: showQattar ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="absolute w-full h-full top-0 right-0 flex flex-row gap-2 justify-center items-center">
                      {/* <a
                        href="https://github.com/Manuekle/phishing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="w-4 h-4 fill-white hover:fill-zinc-300" />
                      </a>
                      <a
                        href="https://phishing-fup.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <OpenNew className="fill-white hover:fill-zinc-300" />
                      </a> */}
                      <h1 className="text-white text-sm">
                        {i18next.t('soon')}
                      </h1>
                    </span>
                  </motion.div>
                </figure>
                <h1 className="text-sm xl:text-md font-bold text-white">
                  <a
                    href=""
                    // target="_blank"
                    rel="noreferrer"
                    className="transition duration-300 ease-in-out hover:underline hover:text-zinc-300"
                  >
                    {i18next.t('p9')}
                  </a>
                </h1>
                <p className="text-sm text-zinc-300">{i18next.t('p10')}</p>
                <div>
                  <h1 className="text-sm text-white">{i18next.t('pt')}</h1>
                  <span className="flex flex-row gap-4 mt-2">
                    <Javascript className="w-5 h-5 fill-zinc-300" />
                    <ReactIcon className="w-5 h-5 fill-zinc-300" />
                    <Tailwind className="w-5 h-5 fill-zinc-300" />
                    <Vercel className="w-5 h-5 fill-zinc-300" />
                  </span>
                </div>
              </div>
              <div className="col-span-3 xl:col-span-1 flex flex-col gap-3 border border-zinc-600 rounded-lg p-4">
                <figure className="relative bg-[#242424] rounded-md overflow-hidden border border-zinc-600 h-44">
                  <img
                    src={weather}
                    alt="weather"
                    className="object-cover w-full h-full"
                  />
                  <motion.div
                    className="absolute w-full h-full hover:bg-gradient-to-t from-black/90 via-black/70 to-black/60 top-0 left-0 transition-opacity duration-1000 ease-out bg-opacity-50 hover:bg-opacity-100"
                    onMouseEnter={() => setShowWeather(true)}
                    onMouseLeave={() => setShowWeather(false)}
                    animate={{ opacity: showWeather ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="absolute w-full h-full top-0 right-0 flex flex-row gap-2 justify-center items-center">
                      <a
                        href="https://github.com/Manuekle/GeoWeather"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="w-4 h-4 fill-white hover:fill-zinc-300" />
                      </a>
                      <a
                        href="https://geoweather.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <OpenNew className="fill-white hover:fill-zinc-300" />
                      </a>
                      {/* <h1 className="text-white text-sm">
                        {i18next.t('soon')}
                      </h1> */}
                    </span>
                  </motion.div>
                </figure>
                <h1 className="text-sm xl:text-md font-bold text-white">
                  <a
                    href="https://geoweather.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition duration-300 ease-in-out hover:underline hover:text-zinc-300"
                  >
                    {i18next.t('p11')}
                  </a>
                </h1>
                <p className="text-sm text-zinc-300">{i18next.t('p12')}</p>
                <div>
                  <h1 className="text-sm text-white">{i18next.t('pt')}</h1>
                  <span className="flex flex-row gap-4 mt-2">
                    <Javascript className="w-5 h-5 fill-zinc-300" />
                    <ReactIcon className="w-5 h-5 fill-zinc-300" />
                    <Tailwind className="w-5 h-5 fill-zinc-300" />
                    <Vercel className="w-5 h-5 fill-zinc-300" />
                  </span>
                </div>
              </div>
            </section>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/Manuekle?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="text-white text-sm border px-4 py-2 rounded-md border-zinc-600 hover:bg-black/30 transition duration-300 ease-in-out"
              >
                {i18next.t('show')}
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-black/30 py-8 flex justify-center">
        <span className="flex flex-col gap-2 items-center text-sm">
          <h1 className="text-white">© {i18next.t('f1')}</h1>
          <h1 className="text-white">
            {i18next.t('f2')} <span className="text-red-500">❤</span>{' '}
            {i18next.t('f3')}
          </h1>
        </span>
      </footer>
      <AnimatePresence exitBeforeEnter>
        <>
          {showDoc1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50"
              style={{
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full rounded-md xl:p-8 p-0 xl:w-auto xl:px-0 px-6 flex flex-col gap-2">
                <span className="flex flex-row gap-4 justify-between items-center w-full">
                  <h1 className="text-white/80 w-full xl:text-sm text-xs">
                    {i18next.t('md')}
                  </h1>
                  <button
                    type="button"
                    onClick={setShowDoc1}
                    className="flex justify-end w-full"
                  >
                    <Close className="fill-white/50 hover:fill-white" />
                  </button>
                </span>
                <span className="relative rounded-md object-cover w-[60em] h-[40em]">
                  <object
                    data={DocSENA}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                  >
                    <embed src={DocSENA} type="application/pdf" />
                  </object>
                </span>
              </div>
            </motion.div>
          )}
          {showDoc2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50"
              style={{
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full rounded-md xl:p-8 p-0 xl:w-auto xl:px-0 px-6 flex flex-col gap-2">
                <span className="flex flex-row gap-4 justify-between items-center w-full">
                  <h1 className="text-white/80 w-full xl:text-sm text-xs">
                    {i18next.t('md')}
                  </h1>
                  <button
                    type="button"
                    onClick={setShowDoc2}
                    className="flex justify-end w-full"
                  >
                    <Close className="fill-white/50 hover:fill-white" />
                  </button>
                </span>
                <span className="relative rounded-md object-cover w-[60em] h-[40em]">
                  <object
                    data={DocRED}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                  >
                    <embed src={DocRED} type="application/pdf" />
                  </object>
                </span>
              </div>
            </motion.div>
          )}
          {showMail && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50"
              style={{
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full rounded-md xl:p-8 p-0 xl:w-auto xl:px-0 px-6 flex flex-col gap-2">
                <span className="flex flex-row gap-4 justify-between items-center w-full">
                  <h1 className="text-white/80 w-full xl:text-sm text-xs">
                    {i18next.t('m1')} {i18next.t('m2')}
                  </h1>
                  <button
                    type="button"
                    onClick={setShowMail}
                    className="flex justify-end"
                  >
                    <Close className="fill-white/50 hover:fill-white" />
                  </button>
                </span>
                <span className="relative rounded-md object-cover w-full xl:w-[40em] h-auto bg-[#242424] p-4">
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="col-span-3 xl:col-span-1 flex flex-row gap-2 relative">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={i18next.t('name')}
                          className="relative pl-11 w-full bg-[#3A3A3A] placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                        />
                        <User className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="col-span-3 xl:col-span-1 flex flex-row gap-2 relative">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={i18next.t('email')}
                          className="relative pl-11 w-full bg-[#3A3A3A] placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                        />
                        <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="col-span-3 xl:col-span-1 flex flex-row gap-2 relative">
                        <input
                          type="text"
                          name="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder={i18next.t('subject')}
                          className="relative pl-11 w-full bg-[#3A3A3A] placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                        />
                        <Rocket className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="col-span-3 xl:col-span-1 flex flex-row gap-2 relative">
                        <textarea
                          style={{
                            resize: 'none'
                          }}
                          className="relative w-full bg-[#3A3A3A] placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={i18next.t('message')}
                          cols="30"
                          rows="6"
                        />
                      </span>
                    </div>
                    <span className="w-full flex justify-center">
                      {!formData && (
                        <>
                          {!name || !email || !subject || !message ? (
                            <input
                              type="submit"
                              disabled
                              value={i18next.t('send')}
                              className="cursor-no-drop xl:w-44 w-full text-zinc-300 font-bold tracking-wide text-sm border border-zinc-600 rounded-full p-2 bg-[#3A3A3A]"
                            />
                          ) : (
                            <input
                              type="submit"
                              value={i18next.t('send')}
                              className="cursor-pointer xl:w-44 w-full text-zinc-300 font-bold tracking-wide text-sm border border-zinc-600 rounded-full p-2 bg-[#3A3A3A] hover:bg-[#484848] hover:text-white transition duration-300 ease-in-out"
                            />
                          )}
                        </>
                      )}
                      {formData && (
                        <div className="flex justify-center">
                          <span className="flex justify-center cursor-pointer xl:w-44 w-full text-zinc-300 font-bold tracking-wide text-sm border border-zinc-600 rounded-full p-2 bg-[#3A3A3A] hover:bg-[#484848] hover:text-white transition duration-300 ease-in-out">
                            <Loader color="#eee" size={20} />
                          </span>
                        </div>
                      )}
                    </span>
                  </form>
                </span>
              </div>
            </motion.div>
          )}
          {open && <Delete open={open} setOpen={setOpen} />}
        </>
      </AnimatePresence>
    </section>
  );
}

export default Base;
