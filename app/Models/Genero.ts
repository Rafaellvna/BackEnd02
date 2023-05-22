import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Musica from './Musica'

export default class Genero extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string
  
  @column()
  public descricao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Musica)
  public musica: HasMany<typeof Musica>
}
