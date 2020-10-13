import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment.model';

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {


    constructor(private http: HttpClient) {

    }

    list():Promise<Appointment[]> {
        return new Promise( async (resolve, reject) => {
            try {
                const response:any = this.http.get(environment.api + '/appointments').toPromise();
                resolve(response);
            } catch(e) {
                reject(e);
            }
        });
    }

    add(appointment) {
        return new Promise( async(resolve, reject) => {
            try {
                const response:any = this.http.post(environment.api + '/appointments', appointment).toPromise();
                resolve(response);
            } catch(e) {
                reject(e);
            }
        });
    }

    getById(id) {
        return new Promise( async(resolve, reject) => {
            try {
                const response:any = this.http.get(environment.api + '/appointments/' + id).toPromise();
                resolve(response);
            } catch(e) {
                reject(e);
            }
        });
    }

    update(appointment) {
        return new Promise( async(resolve, reject) => {
            try {
                const response:any = this.http.put(environment.api + '/appointments/' + appointment._id, appointment).toPromise();
                resolve(response);
            } catch(e) {
                reject(e);
            }
        });
    }

    delete(appointment) {
        return new Promise( async(resolve, reject) => {
            try {
                const response:any = this.http.delete(environment.api + '/appointments/' + appointment._id, appointment).toPromise();
                resolve(response);
            } catch(e) {
                reject(e);
            }
        });
    }
}