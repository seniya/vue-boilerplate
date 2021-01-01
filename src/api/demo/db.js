// import shortId from 'shortid'
// import faker from 'faker'

const shortId = require('shortid')
const faker = require('faker')

module.exports = () => {
  const data = {
    users: [],
    posts: [],
    articles: []
  }
  // Create 1000 users
  for (let i = 0; i < 5; i++) {
    data.users.push({ id: i, name: `user${i}` })
    data.posts.push(
      {
        id: shortId.generate(),
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        image: faker.image.image(),
        animals: faker.image.animals(),
        author: faker.name.findName(),
        createAt: faker.time.recent()
      }
    )
    data.articles.push(
      {
        id: shortId.generate(),
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        image: faker.image.image(),
        animals: faker.image.animals(),
        author: faker.name.findName(),
        createAt: faker.time.recent()
      }
    )
  }
  return data
}
