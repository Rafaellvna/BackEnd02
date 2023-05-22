//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Gravadora from 'App/Models/Gravadora';
import GravadoraValidator from 'App/Validators/GravadoraValidator';

export default class GravadorasController {

         index(){
            return Gravadora.query().preload('album').preload('contrato').paginate(1)
        }

   async store({request}){
            const dados = await request.validate(GravadoraValidator)
            return Gravadora.create(dados)
        }

         show({request}){
            const id = request.param('id')
            return Gravadora.findOrFail(id)
        }

   async update({request}){
            const id = request.param('id')
            const gravadora = await Gravadora.findOrFail(id)
            const dados = request.only(['nome', 'endereco', 'telefone'])
            return gravadora.merge(dados).save()
        }

   async destroy({request}){
            const id = request.param('id')
            const gravadora = await Gravadora.findOrFail(id)
            return gravadora.delete()
        }
}
