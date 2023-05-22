//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Album from 'App/Models/Album';
import AlbumValidator from 'App/Validators/AlbumValidator';

export default class AlbunsController {

        index(){
          return Album.query().preload('artista').preload('gravadora').preload('musica').paginate(1)
      }

      async store({request}){
          const dados = await request.validate(AlbumValidator)
          return Album.create(dados)
      }

      show({request}){
          const id = request.param('id')
          return Album.findOrFail(id)
      }

      async update({request}){
          const id = request.param('id')
          const album = await Album.findOrFail(id)
          const dados = request.only(['nome', 'data_lancamento', 'artistaId', 'gravadoraId'])
          return album.merge(dados).save()
      }

      async destroy({request}){
          const id = request.param('id')
          const album = await Album.findOrFail(id)
          return album.delete()
      }
}
