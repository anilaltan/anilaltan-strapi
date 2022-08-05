const { faker } = require("@faker-js/faker");

async function seedBlogs() {
  const numberOfSeed = 10;

  const count = await strapi.db.query("api::blog.blog").count();
  if (count < 10) {
    for (let i = 0; i < numberOfSeed; i++) {
      await strapi.api.blog.services.blog.create({
        data: {
          title: faker.lorem.sentence(),
          body: faker.lorem.paragraphs(Math.random()),
        },
      });
    }
  }
}

module.exports = { seedBlogs };
