import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BasketballPlayerData implements InMemoryDbService {
    createDb() {

        const players = [
            { firstName: 'Tom', lastName: 'Kerb', description: 'Best player' },
            { firstName: 'Peter', lastName: 'Joseph', description: 'Fastest player' },
            { firstName: 'Jacob', lastName: 'Yammen', description: 'Tallest player' }
        ];

        return { players };
    }
}
