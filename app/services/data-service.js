import Service from '@ember/service';
//import ENV from 'booksky/config/environment';

import { getOwner } from '@ember/application';

export default class DataServiceService extends Service {
    async readAuthors() {
        let url = getOwner(this).application;
        let response = await fetch(`${url.backEndURL}/authors`);
        return response.json();
        }
}
