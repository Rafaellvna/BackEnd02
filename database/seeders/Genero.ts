import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Genero from 'App/Models/Genero'

export default class extends BaseSeeder {
  public async run () {
    await Genero.createMany([
      {nome: 'Rock', descricao: 'O Rock é um gênero musical que teve origem nos Estados Unidos (EUA) a partir dos anos 1950, popularizando-se por todo o mundo. Mais do que um estilo musical com ritmo contagiante, é conhecido por ter um apelo comportamental e visual cheio de irreverência e atitude.'},
      {nome: 'Rap', descricao: 'Rap é uma mistura de ritmos intensos, com rimas poéticas, integrando o contexto social, cultural e politico onde está inserido.'},
      {nome: 'R&B/Soul', descricao: 'R&B é um gênero musical que combina elementos do rhythm and blues, soul, funk, pop, hip hop e dance.'},
      {nome: 'Rock', descricao: 'O Rock é um gênero musical que teve origem nos Estados Unidos (EUA) a partir dos anos 1950, popularizando-se por todo o mundo. Mais do que um estilo musical com ritmo contagiante, é conhecido por ter um apelo comportamental e visual cheio de irreverência e atitude.'},
      {nome: 'Rock', descricao: 'O Rock é um gênero musical que teve origem nos Estados Unidos (EUA) a partir dos anos 1950, popularizando-se por todo o mundo. Mais do que um estilo musical com ritmo contagiante, é conhecido por ter um apelo comportamental e visual cheio de irreverência e atitude.'},
      {nome: 'Rock Alternativo', descricao: 'O Rock Alternativo é uma categoria de rock que emergiu do underground da música independente na década de 1970 e se tornou amplamente popular na década de 1990.'},
      {nome: 'R&B/Soul', descricao: 'R&B é um gênero musical que combina elementos do rhythm and blues, soul, funk, pop, hip hop e dance.'},
      {nome: 'Pop', descricao: 'A música Pop pode ser caracterizada comi um gênero voltado para a audiência juvenil, com a maior parte de suas canções com letras relativamente curtas e simples acompanhadas de um ritmo "acelerado" que atrai diversos tipos de apreciadores.'},
      {nome: 'Rock', descricao: 'O Rock é um gênero musical que teve origem nos Estados Unidos (EUA) a partir dos anos 1950, popularizando-se por todo o mundo. Mais do que um estilo musical com ritmo contagiante, é conhecido por ter um apelo comportamental e visual cheio de irreverência e atitude.'},
      {nome: 'Pop', descricao: 'A música Pop pode ser caracterizada comi um gênero voltado para a audiência juvenil, com a maior parte de suas canções com letras relativamente curtas e simples acompanhadas de um ritmo "acelerado" que atrai diversos tipos de apreciadores.'},
    ])
  }
}
