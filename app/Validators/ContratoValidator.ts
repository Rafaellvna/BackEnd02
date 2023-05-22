import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ContratoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    artistaId:  schema.number([rules.exists({table: 'artistas', column: 'id'})]),
    gravadoraId: schema.number([rules.exists({table: 'gravadoras', column: 'id'})]),
    data_inicio: schema.date.optional(),
    data_fim: schema.date.optional()
  })

  
  public messages: CustomMessages = {}
}
