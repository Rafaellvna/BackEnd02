import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Album from './Album'
import Contrato from './Contrato'
import Musica from './Musica'

export default class Artista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public nascimento: Date

  @column()
  public genero: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Album)
  public album: HasMany<typeof Album>
  
  @hasMany(() => Contrato)
  public contrato: HasMany<typeof Contrato>
  
  @manyToMany(() => Musica, {pivotTable: 'musicas_artistas'})
  public musicas: ManyToMany<typeof Musica>
}
