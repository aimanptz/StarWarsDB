export default class SwapiService {
    
    _apiBase = 'https://swapi.co/api';
    
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        
        if (!res.ok) {
            throw new Error(`Failed to fetch, ${res.status}`)
        }
        
        return await res.json();
    }
    
    async getAllPeople() {
        const peopleArr = await this.getResource(`/people/`);
        return peopleArr.results;
    }
    
    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }
    
    async getAllStarships() {
        const peopleArr = await this.getResource(`/starships/`);
        return peopleArr.results;
    }
    
    getStarship(id) {
        return this.getResource(`/starships/${id}/`)
    }
    
    async getAllPlanets() {
        const peopleArr = await this.getResource(`/planets/`);
        return peopleArr.results;
    }
    
    getPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    }
}