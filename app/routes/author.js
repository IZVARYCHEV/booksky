import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorRoute extends Route {
    @service dataService;
    
    async model() {
   //    let response = await fetch('http://localhost:3000/authors');
     //  return response.json();
     return this.dataService.readAuthors();
      
    }
}
