import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Album from './Album'
import Contrato from './Contrato'

export default class Gravadora extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public endereco: string

  @column()
  public telefone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Album)
  public album: HasMany<typeof Album>
  
  @hasMany(() => Contrato)
  public contrato: HasMany<typeof Contrato>
}
