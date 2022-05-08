import Factory from '@ioc:Adonis/Lucid/Factory'
import Product from 'App/Models/Product'

export const ProductFactory = Factory
  .define(Product, ({ faker }) => {
    return {
      name: faker.name.findName(),
      image: faker.image.food(),
      description: faker.lorem.paragraph(),
      price: faker.random.number(150000),
      type: faker.random.arrayElement(['coffee', 'merchandise', 'bean', 'packet'])
    }
  })
  .build()
