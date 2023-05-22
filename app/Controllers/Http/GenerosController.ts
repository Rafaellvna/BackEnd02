//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Genero from 'App/Models/Genero';
import GeneroValidator from 'App/Validators/GeneroValidator';

export default class GenerosController {

         index(){
            return Genero.query().preload('musica').paginate(1)
        }

   async store({request}){
            const dados = await request.validate(GeneroValidator)
            return Genero.create(dados)
        }

         show({request}){
            const id = request.param('id')
            return Genero.findOrFail(id)
        }

   async update({request}){
            const id = request.param('id')
            const genero = await Genero.findOrFail(id)
            const dados = request.only(['nome', 'descricao'])
            return genero.merge(dados).save()
        }

   async destroy({request}){
            const id = request.param('id')
            const genero = await Genero.findOrFail(id)
            return genero.delete()
        }
}
