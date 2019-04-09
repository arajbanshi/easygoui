export class EasyGoInput {
    constructor(
        public searchName: string,
        public cabType?: string,
        public fromBorough?: string,
        public toBorough?: string,
        public fromDate?:Date,
        public toDate?:Date 
    ){}
}
