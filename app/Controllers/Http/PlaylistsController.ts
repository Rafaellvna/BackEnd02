//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Playlist from 'App/Models/Playlist';
import PlaylistValidator from 'App/Validators/PlaylistValidator';

export default class PlaylistsController {

         index(){
            return Playlist.query().preload('musicas').paginate(1)
        }

   async store({request}){
            const dados = await request.validate(PlaylistValidator)
            return Playlist.create(dados)
        }

         show({request}){
            const id = request.param('id')
            return Playlist.findOrFail(id)
        }

   async update({request}){
            const id = request.param('id')
            const playlist = await Playlist.findOrFail(id)
            const dados = request.only(['nome'])
            return playlist.merge(dados).save()
        }

   async destroy({request}){
            const id = request.param('id')
            const playlist = await Playlist.findOrFail(id)
            return playlist.delete()
        }
}
