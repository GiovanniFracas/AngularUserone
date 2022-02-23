import { User } from './models/user';


let utenti : User[] =[
  {
    Nome: 'Alice',
  mail: 'alice@alice.it',
  ruolo: 'admin'
  },
  {
    Nome: 'Dario',
  mail: 'Dario@alice.it',
  ruolo: 'admin'
  },
  {
    Nome: 'Anna',
  mail: 'anna@alice.it',
  ruolo: 'user'
  },
  {
  Nome: 'Giovanni',
  mail: 'Giovan@alice.it',
  ruolo: 'admin'
  },
  {
  Nome: 'Antonio',
  mail: 'antonio@alice.it',
  ruolo: 'visitor'
  },
  {
    Nome: 'Fabio',
    mail: 'fabio@alice.it',
    ruolo: 'admin'
    }
]


export function getUsers(){
  return utenti;
}


