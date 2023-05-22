import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Artista from './Artista'
import Gravadora from './Gravadora'

export default class Contrato extends BaseModel {
  public static table = 'contratos'

  @column({ isPrimary: true })
  public id: number

  @column()
  public artistaId: number

  @column()
  public gravadoraId: number

  @column()
  public data_inicio: Date

  @column()
  public data_fim: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Artista)
  public artista: BelongsTo<typeof Artista>
  
  @belongsTo(() => Gravadora)
  public gravadora: BelongsTo<typeof Gravadora>
}
