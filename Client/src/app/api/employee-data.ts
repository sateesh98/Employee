import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { IEmployee } from '../model/employee';

export class EmployeeData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let employees: IEmployee[] = [
            {
                'id': 1,
                'firstName': 'kumar',
                'lastName': 'raja',
                'email': 'abc.abc@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 2,
                'firstName': 'kumar2',
                'lastName': 'raja',
                'email': 'abc.abc2@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 3,
                'firstName': 'kumar3',
                'lastName': 'raja',
                'email': 'abc.ab3c@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 4,
                'firstName': 'kumar4',
                'lastName': 'raja',
                'email': 'abc.abc4@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 5,
                'firstName': 'kumar5',
                'lastName': 'raja',
                'email': 'abc.ab5c@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 6,
                'firstName': 'kumar6',
                'lastName': 'raja',
                'email': 'abc.abc6@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 7,
                'firstName': 'kumar7',
                'lastName': 'raja',
                'email': 'abc.abc7@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 8,
                'firstName': 'kumar8',
                'lastName': 'raja',
                'email': 'abc.abc8@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 9,
                'firstName': 'kumar9',
                'lastName': 'raja',
                'email': 'abc.abc9@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 10,
                'firstName': 'kumar10',
                'lastName': 'raja',
                'email': 'abc.abc10@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 11,
                'firstName': 'kumar11',
                'lastName': 'raja',
                'email': 'abc.abc11@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 12,
                'firstName': 'kumar12',
                'lastName': 'raja',
                'email': 'abc.abc12@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 13,
                'firstName': 'kumar13',
                'lastName': 'raja',
                'email': 'abc.abc13@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 14,
                'firstName': 'kumar14',
                'lastName': 'raja',
                'email': 'abc.abc14@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            },
            {
                'id': 15,
                'firstName': 'kumar15',
                'lastName': 'raja',
                'email': 'abc.abc15@gmail.com',
                'password': 'Password@321',
                'created': new Date('2018-12-06'),
                'updated': new Date('2018-12-06')
            }
        ];
        return { employees };
    }
}
