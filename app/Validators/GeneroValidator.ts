import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GeneroValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nome: schema.string([rules.maxLength(20), rules.alpha({allow: ['space']})]),
    descricao: schema.string.optional([rules.maxLength(1000), rules.alpha({allow: ['space']})])
  })

 
  public messages: CustomMessages = {}
}
