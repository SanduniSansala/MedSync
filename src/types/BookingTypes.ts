export interface Booking {
    id?: string;
    paymentMethod: string;
    day: string;
    time: string;
    doctorID?: string;
    patientID?: string;   
}
