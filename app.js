const perfilData = {
  name: "Vanesa Marina Detto",
  about: "Fullstack Developer Junior",
};

const personalData = {
  titulo: "Personal Information",
  location: "Málaga, España",
  email: "vanesa.detto@hotmail.com",
  phone: "+34 631 835 856",
  linkedin: "www.linkedin.com/in/vanesa-marina-detto-0512b213",
};

const aboutData = {
  Text: "Profesional iniciando la carrera de Fullstack Developer, con intenciones de seguir desarrollando mis conocimientos en dicho sector. Soy una persona organizada, resolutiva, con capacidad de adaptacion y trabajo en equipo. ",
};
const langData = {
  Español: "Nativo",
  Ingles: "B1",
  Portugues: "A1",
};

const education = {
  Universidad1: {
    Titulo: "Full Stack Web Developer",
    School: "Neoland School-Bootcamp",
    Egreso: "Octubre 2022",
  },
  Universidad2: {
    Titulo:
      "Especialización en OSFL - Dirección y Gestión de Organizaciones Sociales",
    School: "UDESA Universidad de San Andrés",
    Egreso: "Junio 2019",
  },
  Universidad3: {
    Titulo: "Contador Publico Nacional",
    School: "U.B.A. Facultad de Ciencias Económicas",
    Egreso: "Diciembre 2015",
  },
};

const technologies = {
  html: {
    name: "HTML5",
  },
  css: {
    name: "CSS3",
  },
  js: {
    name: "Javascript",
  },
  node: {
    name: "NodeJS",
  },
  mongo: {
    name: "MongoDB",
  },
  react: {
    name: "ReactJS",
  },
};

const experienceData = {
  empresa1: {
    empresa:
      "Instituto de Investigación en Biomedicina de Buenos Aires - CONICET - Instituto Partner de la Sociedad Max Planck de Alemania - Buenos Aires, Argentina",
    cargo: "Responsable Administrativa Contable",
    fecha: "Enero 2014 - Julio 2022",
  },
  empresa2: {
    empresa: "Fundación LELOIR - Buenos Aires, Argentina",
    cargo: "Auxiliar Administrativa Contable",
    fecha: "Junio 2012 - Enero 2014",
  },
};

const galeriaData = {
  landing1: {
    name: "Proyecto web HTML & CSS",
    enlace: "xxx",
  },
  landing2: {
    name: "Proyecto web HTML, CSS & JS",
    enlace: "xxx",
  },
};

//----------------------------------------//
let perfilDataHtml = document.querySelector(`#perfil`);
let personalDataHtml = document.querySelector(`#personalData`);
let aboutDataHtml = document.querySelector(`#about`);
let langDataHtml = document.querySelector(`#languages`);
let educationHtml = document.querySelector(`#education`);
let technologiesHtml = document.querySelector(`#technologies`);
let experienceDataHtml = document.querySelector(`#experience`);
let galeriaDataHtml = document.querySelector(`#gallery`);

//---------------------------------------//
const perfilDataConversionHtml = (perfilData) => {
  return `
    <h1 class="nombre">${perfilData.name}</h1>
    <h2 class="nombre1">${perfilData.about}</h2>
    `;
};

const personalDataConversionHtml = (personalData) => {
  return `
  <div class="titulo-p">
    <h3 class="titulo-data">${personalData.titulo}</h2>
    <ul class="data">
      <li class="location">Location:  ${personalData.location}</li>
      <li class="email">Email:   ${personalData.email}</li>
      <li class="phone">Phone:    ${personalData.phone}</li>
      <li class="link">Linkedin:     ${personalData.linkedin}</li>
    </ul>
  </div>
    `;
};

const aboutDataConversionHtml = (aboutData) => {
  return `
  <h3 class= "titulo-about"> About me </h3>
  <p class="text-about">${aboutData.Text}</p>
  `;
};

const langDataConversionHtml = (langData) => {
  return `
  <h3 class="lang-titulo">Languages</h3>
  <ul class="lang">
    <li>Spanish: ${langData.Español}</li >
    <li>English: ${langData.Ingles}</li >
    <li>Portuguese: ${langData.Portugues}</li >
  </ul>
`;
};

const educationConversionHtml = (education) => {
  return `
  <h2 class="titulo-education">Education</h2>
  <div class="universidades">
    <ul class="uni-info1">
      <li>${education.Universidad1.Titulo}</li>
      <li>${education.Universidad1.School}</li>
      <li>Egreso: ${education.Universidad1.Egreso}</li>
    </ul>
    <ul class="uni-info2">
      <li>${education.Universidad2.Titulo}</li>
      <li>${education.Universidad2.School}</li>
      <li>Egreso: ${education.Universidad2.Egreso}</li>
    </ul>
    <ul class="uni-info3">
      <li>${education.Universidad3.Titulo}</li>
      <li>${education.Universidad3.School}</li>
      <li>Egreso: ${education.Universidad3.Egreso}</li>
    </ul> 
  </div>
`;
};

const technologiesConversionHtml = (technologies) => {
  return ` 
  <div class="technologies-title">
    <h2>Development Skills</h2>
  </div>
    
  <div class="box-data">
    <div class="tecnologie-data">
        <h4>${technologies.html.name}</h4>
        <div class="progress-bar">
          <progress value="10" max="50">
        </div>
    </div>
    <div class="tecnologie-data">
      <h4>${technologies.css.name}</h4>
      <div class="progress-bar">
        <progress value="10" max="50">
      </div>
    </div>
    <div class="tecnologie-data">
      <h4>${technologies.js.name}</h4>
      <div class="progress-bar">
        <progress value="10" max="50">
      </div>
    </div>
    <div class="tecnologie-data">
      <h4>${technologies.node.name}</h4>
      <div class="progress-bar">
        <progress value="10" max="50">
      </div>
    </div>
    <div class="tecnologie-data">
      <h4>${technologies.mongo.name}</h4>
      <div class="progress-bar blue stripes">
        <progress value="10" max="50">
      </div>
    </div>
    <div class="tecnologie-data">
      <h4>${technologies.react.name}</h4>
      <div class="progress-bar">
        <progress value="10" max="50">
      </div>
    </div>
  </div>
  
`;
};

const experienceDataConversionHtml = (experienceData) => {
  return `
  <h2 class="experience-titulo">Experience</h2>
  <div class="exp-list">
    <ul class="empresas-list">
      <li>Empresa: ${experienceData.empresa1.empresa}</li>
      <li>Cargo: ${experienceData.empresa1.cargo}</li>
      <li>Fecha: ${experienceData.empresa1.fecha}</li>
    </ul >
    <ul class="empresas-list">
      <li>Empresa: ${experienceData.empresa2.empresa}</li>
      <li>Cargo: ${experienceData.empresa2.cargo}</li>
      <li>Fecha: ${experienceData.empresa2.fecha}</li>
    </ul >
  </div>  
  `;
};

const galeriaDataConersionHtml = (galeriaData) => {
  return `
  <h2 class= "gallery-titulo"> Gallery </h2>
  <div class="gallery-list">
    <ul class="gallery-list1">
      <li> Project: ${galeriaData.landing1.name}</li>
      <li> Link: ${galeriaData.landing1.enlace}</li>
    </ul>
    <ul class="gallery-list2">
      <li> Project: ${galeriaData.landing2.name}</li>
      <li> Link: ${galeriaData.landing2.enlace}</li>
    </ul>
  </div>
  `;
};
//------------------------------------------//
const passToDocumentHtml = (container, functionCreateHTML, element) => {
  container.innerHTML += functionCreateHTML(element);
};

passToDocumentHtml(perfilDataHtml, perfilDataConversionHtml, perfilData);
passToDocumentHtml(personalDataHtml, personalDataConversionHtml, personalData);
passToDocumentHtml(aboutDataHtml, aboutDataConversionHtml, aboutData);
passToDocumentHtml(langDataHtml, langDataConversionHtml, langData);
passToDocumentHtml(educationHtml, educationConversionHtml, education);
passToDocumentHtml(technologiesHtml, technologiesConversionHtml, technologies);
passToDocumentHtml(
  experienceDataHtml,
  experienceDataConversionHtml,
  experienceData
);

passToDocumentHtml(galeriaDataHtml, galeriaDataConersionHtml, galeriaData);
