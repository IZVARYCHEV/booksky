import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default class AuthorRoute extends Route {
  @service dataService;
  
    async model() {
        return this.dataService.readAuthors();
    }
}
  
    //@service dataService;
  //   async model() {
      //  return this.dataService.readAthors();
     //   let response = await fetch('http://localhost:3000/authors');
     //   return response.json();
 

