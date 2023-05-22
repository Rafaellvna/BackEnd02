//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Musica from 'App/Models/Musica';
import MusicaValidator from 'App/Validators/MusicaValidator';

export default class MusicasController {

         index(){
            return Musica.query().preload('album').preload('artistas').preload('genero').preload('playlists').paginate(1)
        }

   async store({request}){
            const dados = await request.validate(MusicaValidator)
            return Musica.create(dados)
        }

         show({request}){
            const id = request.param('id')
            return Musica.findOrFail(id)
        }

   async update({request}){
            const id = request.param('id')
            const musica = await Musica.findOrFail(id)
            const dados = request.only(['titulo', 'duracao', 'albumId', 'generoId'])
            return musica.merge(dados).save()
        }

   async destroy({request}){
            const id = request.param('id')
            const musica = await Musica.findOrFail(id)
            return musica.delete()
        }
}
