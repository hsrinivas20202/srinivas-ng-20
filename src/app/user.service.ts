import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
    id: number;
    name: string;
    email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
    private api = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.api);
    }
}
