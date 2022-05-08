import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product';

export default class ProductsController {

  public async index({ request }: HttpContextContract) {

    if (Object.keys(request.qs()).length === 0)
      return await Product.all()
    if (request.qs().type == 'popular')
      return await Product.all()
    else {
      return await Product.query().where('type', request.qs().type).select('*')
    }
  }


}
