//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MusicasPlaylist from 'App/Models/MusicasPlaylist';
import MusicasPlaylistValidator from 'App/Validators/MusicasPlaylistValidator';

export default class MusicasPlaylistsController {

         index(){
            return MusicasPlaylist.query().preload('musica').preload('playlist').paginate(1)
        }

   async store({request}){
            const dados = await request.validate(MusicasPlaylistValidator)
            return MusicasPlaylist.create(dados)
        }

         show({request}){
            const id = request.param('id')
            return MusicasPlaylist.findOrFail(id)
        }

   async update({request}){
            const id = request.param('id')
            const musica = await MusicasPlaylist.findOrFail(id)
            const dados = request.only(['musicaId', 'playlistId'])
            return musica.merge(dados).save()
        }

   async destroy({request}){
            const id = request.param('id')
            const musica = await MusicasPlaylist.findOrFail(id)
            return musica.delete()
        }
}
