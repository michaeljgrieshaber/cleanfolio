const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Michael Grieshaber',
  role: 'Software Engineer',
  description:
    'I am a software engineer with years of experience working on cross-disciplinary teams. I have found my success comes from an ability to follow-through, working until the problem is solved, and a charismatic approach to teamwork. I strive  to help others solve their problems by getting to the root of the issue and finding a solution that is both agreeable and efficient.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/michael-grieshaber-23907867/',
    github: 'https://github.com/michaeljgrieshaber',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'The Docks',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'MongoDB'],
    sourceCode: 'https://github.com/MattMoyka/The-Dock',
    livePreview: 'https://thedocks.netlify.app/',
  },
  {
    name: 'Vote a Joke',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'Airtable'],
    sourceCode: 'https://github.com/michaeljgrieshaber/voteAJoke',
    livePreview: 'https://vote-a-joke.netlify.app/',
  },
  {
    name: 'Conspiract Peerist',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'Ruby on Rails'],
    sourceCode: 'https://github.com/michaeljgrieshaber/conspiracyTheories',
    livePreview: 'https://goofy-hermann-f165e8.netlify.app/',
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

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'MichaelJGrieshaber',
}

export { header, about, projects, skills, contact }
