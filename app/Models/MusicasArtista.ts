import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Musica from './Musica'
import Artista from './Artista'

export default class MusicasArtista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public musicaId: number

  @column()
  public artistaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Musica)
  public musica: BelongsTo<typeof Musica>

  @belongsTo(() => Artista)
  public artista: BelongsTo<typeof Artista>
}
