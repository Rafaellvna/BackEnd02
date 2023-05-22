import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ArtistaValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    nome: schema.string([rules.maxLength(70), rules.alpha({allow: ['space']})]),
    nascimento: schema.date.optional(),
    genero: schema.string([rules.maxLength(20), rules.alpha({allow: ['space']})])
  })

 
  public messages: CustomMessages = {}
}
