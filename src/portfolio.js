const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/michaeljgrieshaber/cleanfolio',
  title: 'MG.',
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
      'The Docks is an open market place where users can search and shop for items to borrow. Users can also login and post their own items for rent.',
    stack: ['React', 'MongoDB'],
    sourceCode: 'https://github.com/MattMoyka/The-Dock',
    livePreview: 'https://thedocks.netlify.app/',
  },
  {
    name: 'Vote a Joke',
    description:
      "Vote a Joke is a site where anyone can post a joke. Then it's up to the other users of the site to vote if it's funny or not",
    stack: ['React', 'Airtable'],
    sourceCode: 'https://github.com/michaeljgrieshaber/voteAJoke',
    livePreview: 'https://vote-a-joke.netlify.app/',
  },
  {
    name: 'Conspiracy Peerist',
    description:
      'Conspiracy Peerist is a blog site that allows users to view and comment on others conspiracy theories. Users can also create their own posts.',
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
