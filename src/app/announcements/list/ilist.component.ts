
interface IAnnouncementsList {
    id?:string;
    title?:string;
    summary?:string;
    isFeatured?: OnBeforeUnloadEventHandlerNonNull;
    publishedDate?:string;
    imageUrl?:string;
}

interface ITempAnnouncements {
    id?:string;
    title?:string;
    summary?:string;
    isFeatured?: OnBeforeUnloadEventHandlerNonNull;
    publishedDate?:string;
    imageUrl?:string;
}

interface IList {
    totalRecords?:number;
    first?:number;
    announceList?: IAnnouncementsList[];
    tempList?: ITempAnnouncements[];
}