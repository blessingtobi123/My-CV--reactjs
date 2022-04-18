import {
    // Contact
    FaGlobe,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
  
    // Interests
    FaChessKnight,
    FaReact,
    FaRegCalendarCheck,
    FaBook,
    FaRunning,
  } from 'react-icons/fa';
  
  const data = {
    /**
     * Full name
     */
    fullName: 'OLORUNFEMI BLESSING',
  
    /**
     * Summary - short "about me" paragraph
     */
    summary: {
      title: 'Summary',
      text: `
        Front-end developer that has 3 year of experience developing web 
        applications and building websites(reactjs). Broadens his knowledge by actively 
        contributing to Open Source projects.`,
    },
  
    /**
     * Contact details
     */
    contact: {
      title: 'Contact',
      list: [
        {
          text: 'linkedin.com/in/blessing-olorunfemi-aa62a2171|',
          url: 'https://github.com/blessingtobi123/My-CV-Reactjs',
          icon: <FaGlobe />,
        },
        {
          text: 'https://github.com/blessingtobi123/My-CV-Reactjs',
          url: 'https://github.com/blessingtobi123/My-CV-Reactjs',
          icon: <FaGithub />,
        },
        {
          text: 'blessingtobi123@gmail.com',
          icon: <FaEnvelope />,
        },
        {
          text: '+2348141787339',
          icon: <FaPhoneAlt />,
        },
        {
          text: 'Osun State, Nigeria',
          icon: <FaMapMarkerAlt />,
        },
      ],
    },
  
    /**
     * Key skills
     */
    keySkills: {
      title: 'Key skills',
      list: [
        { text: 'React, Redux, JSX' },
        { text: 'JavaScript, D3.js' },
        { text: 'Responsive Web Design' },
        { text: 'Python, Djagon, ML CSS3' },
      ],
    },
  
    /**
     * Additional skills
     */
    additionalSkills: {
      title: 'Additional skills',
      list: [
        { text: 'Node.js, Webpack' },
        { text: 'OAuth, Firebase' },
        { text: 'GitHub, Git' },
        { text: 'REST, GraphQL' },
        { text: ' CSS-in-JS' },
      ],
    },
  
    /**
     * Languages I speak
     */
    languages: {
      title: 'Languages',
      list: [
        { text: 'Youruba - Native' },
        { text: 'English - Fluent' },
        { text: 'Hause - Communicative' },
      ],
    },
  
    /**
     * Hobbies and interests
     */
    interests: {
      title: 'Interests',
      list: [
        { text: 'Playing chess', icon: <FaChessKnight /> },
        { text: 'Learning new things', icon: <FaReact /> },
        { text: 'Building habits', icon: <FaRegCalendarCheck /> },
        { text: 'Reading', icon: <FaBook /> },
        { text: 'Being active', icon: <FaRunning /> },
      ],
    },
  
    projects: {
      title: 'Projects',
      list: [
        {
          name: 'Diabetes App',
          techList: [
            'React',
            'React Query',
            'React Router',
            'Python',
            'Material-UI',
          ],
          description: `
           Diabetes app is my final project for Redeemer University. It's 
            built as PSQI (minimal viable product) and its core functionality is to 
            track user's habits.`,
          url: 'DIA',
        },
        {
          name: 'Pocket Globe App',
          techList: ['React', 'D3.js', 'TopoJSON', 'Material-UI'],
          description: `
            The app uses D3.js and React to create a highly interactive and responsive 
            globe. It connects to various APIs to get data about selected country.`,
          url: 'blessingCv',
        },
      ],
    },
  
    /**
     * Work experience
     *
     * Acceptable date format: `YYYY-MM`
     */
    workExperience: {
      title: 'Work experience',
      list: [
        {
          company: 'REDEEMER UNIVERSITY, EDE OSUN STATE (CONTRACT STAFF)',
          location: '•	Machine learning (Python, R)',
          date: {
            start: '2021-05',
            end: '2022',
          },
          jobTitle: 'IPETU IJESA COLLEGE OF TECHNOLOGY, OSUN STATE.',
          description: `
          •	Lecturer (Computer Science (ND 2)) - Per time              
          •	Programming Language (Python, R) 
          •	Data science 
          .`,
        },
        {
          company: 'Clothes2Order',
          location: 'Manchester',
          date: {
            start: '2017-03',
            end: '2018-05',
          },
          jobTitle: 'Customer Service Assistant',
          description: `
            Being a part of Customer Service team and talking over the phone 
            with clients from all around the world helped me improve both my 
            communication and collaboration skills.`,
        },
        {
          company: 'Marks & Spencer',
          location: 'Castle Donington',
          date: {
            start: '2015-12',
            end: '2017-01',
          },
          jobTitle: 'Production Operative',
          description: `
            Working for the first time abroad and overcoming the challenges along 
            the road taught me how to quickly adapt to new environments.`,
        },
      ],
    },
  
    /**
     * Certificates and courses
     */
    certificates: {
      title: 'Certificates',
      list: [
        {
          name: 'CS50x: Introduction to Computer Science',
          provider: 'Redeemers University',
        },
        {
          name: 'Responsive Web Design Certification',
          provider: ' freeCodeCamp',
        },
        {
          name: 'Algorithms and Data Structures Certification',
          provider: ' freeCodeCamp',
        },
        {
          name: 'Data Visualization Certification',
          provider: ' freeCodeCamp',
        },
        {
          name: 'Front End Libraries Certification',
          provider: ' freeCodeCamp',
        },
      ],
    },
  
    /**
     * Education, school, etc
     */
    education: {
      title: 'Education',
      list: [
        {
          institution: 'Redemers University',
          description: 'Machine Learning',
          date: {
            start: '2019-09',
            end: '2022-03',
          },
        },
      ],
    },
  };
  
  export default data;
  