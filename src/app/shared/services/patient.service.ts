import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient.model';

@Injectable({
    providedIn: 'root'
})
export class PatientService {


    constructor(private http: HttpClient) {

    }

    list(): Promise<Patient[]> {
        return new Promise( async (resolve, reject) => {
            try {
                const response:any = this.http.get(environment.api + '/patients').toPromise();
                resolve(response);
            } catch(e) {
                reject(e);
            }
        });
    }

    add(patient) {
        return new Promise( async(resolve, reject) => {
            try {
                console.log('patient', patient);
                console.log('teste', environment.api + '/patients');
                const response:any = this.http.post(environment.api + '/patients', patient).toPromise();
                resolve(response);
            } catch(e) {
                reject(e);
            }
        });
    }

    getById(id) {
        return new Promise( async(resolve, reject) => {
            try {
                const response:any = this.http.get(environment.api + '/patients/' + id).toPromise();
                resolve(response);
            } catch(e) {
                reject(e);
            }
        });
    }

    update(patient) {
        return new Promise( async(resolve, reject) => {
            try {
                const response:any = this.http.put(environment.api + '/patients/' + patient._id, patient).toPromise();
                resolve(response);
            } catch(e) {
                reject(e);
            }
        });
    }

    delete(patient) {
        return new Promise( async(resolve, reject) => {
            try {
                const response:any = this.http.delete(environment.api + '/patients/' + patient._id, patient).toPromise();
                resolve(response);
            } catch(e) {
                reject(e);
            }
        });
    }
}