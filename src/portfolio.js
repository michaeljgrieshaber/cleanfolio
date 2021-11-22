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
    'I am a software engineer with years of experience working on cross-disciplinary teams. I have found my success comes from an ability to follow-through, working until the problem is solved, and a charismatic approach to teamwork. I strive  to help others solve their problems by getting to the root of the issue and finding a solution that is both agreeable and efficient.',
  resume: 'https://drive.google.com/file/d/1UVBnqQbiJmgh1dZgZrf4dlmyz4NLSJav/view?usp=sharing',
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
  email: 'MichaelJGrieshaber@gmail.com',
}

export { header, about, projects, skills, contact }
