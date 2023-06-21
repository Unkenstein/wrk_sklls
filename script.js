const resume = {
  firstName: 'Vera',
  lastName: 'Reimers',
  jobTitle: 'Web Developer',
  city: 'Düsseldorf',
  postalCode: '',
  country: '',
  phone: '0176 21646852',
  email: 'verareimers1987@gmail.com',
  education: [
    {
      school: 'Digital Career Institute Düsseldorf'
    ,
      degree: 'Full Stack Developer',
      description: 'Weiterbildung (1 Jahr)'
    },
    {
      school: 'HHU Düsseldorf',
      degree: 'Bacehelor of Arts',
      description: 'Germanistik / Geschichte'
    }
  ],
  links: [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/verareimers'
    },
    {
      label: 'Github',
      link: 'https://github.com/unkenstein'
    }
  ],
  skills: [
    
    'JavaScript',
    'Node.js',
    'Python',
    'TypeScript',
    'Mongo DB',
    'PHP',
    'React',
    'Angular',
    'CSS',
    'SCSS',
    'HTML',
    'Ionic',
    'Linux',
    'Bootstrap',
    'PostgreSQL',
    'Serverless Framework',
    'Firebase',
    'Wordpress'
  ],
  languages: ['Deutsch (Muttersprache)', 'Englisch (verhandlungssicher))'],
professionalSummary: `Web Developer with over 2 years of experience, specializing in creating custom responsive websites & solutions to meet diverse client needs. With a  foundation in technologies like Angular, React, TypeScript, Serverless framework, Wordpress, Python.... I try to find an individual solution to customers needs. Deeply interested in webdesign and user experience. I worked 4 years in Online Marketing / SEO agencys. I'm always seeking new projects and challenges.`,
  employmentHistory: [
    {
      jobTitle: 'Web Developer / Web Designer',
      startDate: 'Jan 2023',
      endDate: 'Present',
      employer: 'kplus konzept GmbH',
      city: 'Düsseldorf, Germany',
      achievements: [
        'Contributed to a wide variety of projects, developing solutions for construction and architecture companys with a focus on real estate',
        'Enhanced the company’s service delivery through the development of efficient, scalable, and maintainable system for real estate marketing to keep sales organisation clear and structured',
        'Gained proficiency in Wordpress, PHP, Divi, and Adobe Photoshop, Illustrator and XD',
      ]
    },
    {
      jobTitle: 'Junior Web Developer',
      startDate: 'Nov 2021',
      endDate: 'Apr 2022',
      employer: 'Noweda Apothekergenossenschaft',
      city: 'Essen, Germany',
      achievements: [
        'Actively participated in all stages of the web app development lifecycle for an intranet rerelease, leading to a better understanding of the entire product development process.',
        'Improved the code quality through active participation in code reviews and incorporation of feedback.',
        'Managed tasks and time effectively, ensuring timely delivery of features and bug resolution.',
        'Tech Stack: Angular (Typescript), Ionic, PostgresSQL, Docker'
      ]
    },
    {
      jobTitle: 'Full Stack Developer',
      startDate: 'Apr 2018',
      endDate: 'Apr 2019',
      employer: 'Digital Career Institute',
      city: 'Düsseldorf, Germany',
      achievements: [
        'Worked on a variety of mobile app and PWA projects, utilizing Angular/Ionic, TypeScript, NativeScript, and Apollo-GraphQL.',
        'Contributed to the Veur app project, an app designed to help vehicle owners manage maintenance alerts and document expiration reminders.',
        'Enhanced multiple web applications using Ruby on Rails as a part of our technology stack.',
      ]
    },
  ],
  photo: '/dist/unkenstein.webp',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()