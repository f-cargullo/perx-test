import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from "rxjs/internal/Observable";

@Injectable({providedIn: 'root'})
export class MiscService {
    private goLah: boolean = false;
    constructor(private http: HttpClient) {}

    set canProceed(val: boolean){
        this.goLah = val;
    }
    get canProceed(): boolean{
        return this.goLah;
    }

    public getList(): Observable<any>{
        return this.http.get(environment.listUrl);
    }
}