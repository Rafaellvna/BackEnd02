import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlaylistValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nome: schema.string([rules.maxLength(50), rules.alphaNum({allow: ['space']}), rules.unique({table: 'playlists', column: 'nome'})])
  })

  
  public messages: CustomMessages = {}
}
