//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MusicasArtista from 'App/Models/MusicasArtista';
import MusicasAtistaValidator from 'App/Validators/MusicasAtistaValidator';

export default class MusicasArtistasController {

         index(){
            return MusicasArtista.query().preload('artista').preload('musica').paginate(1)
        }

   async store({request}){
            const dados = await request.validate(MusicasAtistaValidator)
            return MusicasArtista.create(dados)
        }

         show({request}){
            const id = request.param('id')
            return MusicasArtista.findOrFail(id)
        }

   async update({request}){
            const id = request.param('id')
            const musica = await MusicasArtista.findOrFail(id)
            const dados = request.only(['musicaId', 'artistaId'])
            return musica.merge(dados).save()
        }

   async destroy({request}){
            const id = request.param('id')
            const musica = await MusicasArtista.findOrFail(id)
            return musica.delete()
        }
}
