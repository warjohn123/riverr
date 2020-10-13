import { Patient } from './patient.model';

export interface Appointment {
    start_time: string,
    end_time: string,
    description: string,
    feeStatus: FeeStatus,
    fee: number,
    patient?: Patient,
    _id?: string
}

export enum FeeStatus {
    PAID = 'Paid',
    UNPAID = 'Unpaid'

}