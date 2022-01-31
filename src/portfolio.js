const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.michaelgrieshaber.com/',
  title: 'MG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Michael Grieshaber.',
  role: 'A Software Engineer.',
  description:
    'Software Engineer delivering solutions utilizing a variety of coding languages across web and mobile applications. Experience working on cross-functional teams. Problem solving, collaboration, and executing on projects and initiatives, while leveraging root cause analysis to inform direction. Lead discovery meetings to identify requirements and prioritize project scope of work. Excellent follow-through, critical thinking, and analytical skills, while bringing a charismatic and empathetic approach to teamwork and project collaboration.',
  resume:
    'https://drive.google.com/file/d/16mIBovRqQiQMW0B7HU_YI6dge0CSsvzS/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/michael-grieshaber/',
    github: 'https://github.com/michaeljgrieshaber',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'The Docks',
    description:
      'The Docks is a site 3 other developers and I built. It allows users to login and post items they want to offer them for rent. The site has user authenticaion and full CRUD.',
    stack: ['React', 'MongoDB'],
    sourceCode: 'https://github.com/MattMoyka/The-Dock',
    livePreview: 'https://thedocks.netlify.app/',
  },
  {
    name: 'Vote a Joke',
    description:
      "Vote a Joke is a site that used a 'no code' back end called Airtable. Users can up/down vote other users jokes and even post their own jokes.",
    stack: ['React', 'Airtable'],
    sourceCode: 'https://github.com/michaeljgrieshaber/voteAJoke',
    livePreview: 'https://vote-a-joke.netlify.app/',
  },
  {
    name: 'Conspiracy Peerist',
    description:
      'Conspiracy Peerist is a blog site. Any user can view posts and comments. Once a user logs in, they can create/edit/delete their own comments.',
    stack: ['React', 'Ruby on Rails'],
    sourceCode: 'https://github.com/michaeljgrieshaber/conspiracyTheories',
    livePreview: 'https://conspiracy-peerist.netlify.app/',
  },
  {
    name: 'Five Somewhere',
    description:
      'Five Somewhere shows visitors their current time/timezone and it shows them every timezone in the world where it is 5PM',
    stack: ['React'],
    sourceCode: 'https://github.com/michaeljgrieshaber/fiveSomewhere',
    livePreview: 'https://fivesomewhere.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Ruby',
  'Rails',
  'Postgresql',
  'MongoDB',
  'Visual Basic Application',
  'Express',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'MichaelJGrieshaber@gmail.com',
}

export { header, about, projects, skills, contact }
