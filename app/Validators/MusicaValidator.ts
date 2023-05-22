import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MusicaValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    titulo: schema.string([rules.maxLength(45), rules.alphaNum({allow: ['space']})]),
    duracao: schema.string([rules.regex(/[0-9]{1}[/.][0-60]{1}/)]),
    albumId: schema.number([rules.exists({table: 'albums', column: 'id'})]),
    generoId: schema.number([rules.exists({table: 'generos', column: 'id'})])
  })

  
  public messages: CustomMessages = {}
}
