import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Artista from './Artista'
import Gravadora from './Gravadora'
import Musica from './Musica'

export default class Album extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public data_lancamento: Date

  @column()
  public artistaId: number

  @column()
  public gravadoraId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Musica)
  public musica: HasMany<typeof Musica>

  @belongsTo(() => Artista)
  public artista: BelongsTo<typeof Artista>
  
  @belongsTo(() => Gravadora)
  public gravadora: BelongsTo<typeof Gravadora>


}
