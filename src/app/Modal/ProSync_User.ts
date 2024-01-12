export class ProSync_User{
    constructor(private accNo:string,
        public fname:string,
        public lname:string,
        public mobileno:number,
        public email:string,
        public  dob:Date,
        public plan:string,
        public address:string,
        public city:string,
        public state:string,
        public zip:number,
        public service:string){

    }
}