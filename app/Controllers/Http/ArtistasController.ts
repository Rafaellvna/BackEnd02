//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Artista from 'App/Models/Artista';
import ArtistaValidator from 'App/Validators/ArtistaValidator';

export default class ArtistaController {

          index(){
            return Artista.query().preload('album').preload('contrato').preload('musicas').paginate(1)
        }

    async store({request}){
            const dados = await request.validate(ArtistaValidator)
            return Artista.create(dados)
        }

        show({request}){
            const id = request.param('id')
            return Artista.findOrFail(id)
        }

  async update({request}){
            const id = request.param('id')
            const artista = await Artista.findOrFail(id)
            const dados = request.only(['nome', 'nascimento', 'genero'])
            return artista.merge(dados).save()
        }

  async destroy({request}){
            const id = request.param('id')
            const artista = await Artista.findOrFail(id)
            return artista.delete()
        }
}
