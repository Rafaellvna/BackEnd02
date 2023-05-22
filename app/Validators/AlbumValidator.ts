import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlbumValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    nome: schema.string([rules.maxLength(60), rules.alphaNum({allow: ['space']})]),
    data_lancamento: schema.date(),
    artistaId: schema.number([rules.exists({table: 'artistas', column: 'id'})]),
    gravadoraId: schema.number([rules.exists({table: 'gravadoras', column: 'id'})])
  })

  public messages: CustomMessages = {}
}
