import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MusicasAtistaValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    musicaId: schema.number([rules.exists({table: 'musicas_artistas', column: 'id'})]),
    artistaId: schema.number([rules.exists({table: 'musicas_artistas', column: 'id'})])
  })

  
  public messages: CustomMessages = {}
}
