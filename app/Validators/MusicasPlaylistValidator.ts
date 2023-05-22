import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MusicasPlaylistValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    musicaId: schema.number([rules.exists({table: 'musicas', column: 'id'})]),
    playlistId: schema.number([rules.exists({table: 'playlists', column: 'id'})])
  })

  
  public messages: CustomMessages = {}
}
