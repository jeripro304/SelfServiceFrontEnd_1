export class Message{
    constructor(public mid:number,
        public fromMobile:number,
        public toMobile:number,
        public msg:string,
        public msgTime:string,
        public msgCounter:number){

    }
}