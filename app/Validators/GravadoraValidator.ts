import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GravadoraValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nome: schema.string([rules.maxLength(45), rules.alpha({allow: ['space']})]),
    endereco: schema.string([rules.maxLength(60), rules.alphaNum({allow: ['space']})]),
    telefone: schema.string([rules.regex(/[0-9]{2}[/ ][0-9]{5}[/-][0-9]{4}/), rules.unique({table: 'gravadoras', column: 'telefone'})])
  })

  
  public messages: CustomMessages = {}
}
