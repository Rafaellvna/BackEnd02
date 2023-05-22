// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contrato from 'App/Models/Contrato';
import ContratoValidator from 'App/Validators/ContratoValidator';

export default class ContratosController {

        index(){
            return Contrato.query().preload('artista').preload('gravadora').paginate(1)
        }

  async store({request}){
            const dados = await request.validate(ContratoValidator)
            return Contrato.create(dados)
        }

        show({request}){
            const id = request.param('id')
            return Contrato.findOrFail(id)
        }

  async update({request}){
            const id = request.param('id')
            const contrato = await Contrato.findOrFail(id)
            const dados = request.only(['artistaId', 'gravadoraId', 'data_inicio', 'data_fim'])
            return contrato.merge(dados).save()
        }

  async destroy({request}){
            const id = request.param('id')
            const contrato = await Contrato.findOrFail(id)
            return contrato.delete()
        }
}
