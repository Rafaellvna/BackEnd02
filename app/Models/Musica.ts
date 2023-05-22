import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Album from './Album'
import Genero from './Genero'
import Artista from './Artista'
import Playlist from './Playlist'

export default class Musica extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public duracao: number

  @column()
  public albumId: number

  @column()
  public generoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Artista, {pivotTable: 'musicas_artistas'})
  public artistas: ManyToMany<typeof Artista>

  @manyToMany(() => Playlist, {pivotTable: 'musicas_playlists'})
  public playlists: ManyToMany<typeof Playlist>

  @belongsTo(() => Album)
  public album: BelongsTo<typeof Album>
  
  @belongsTo(() => Genero)
  public genero: BelongsTo<typeof Genero>
}
