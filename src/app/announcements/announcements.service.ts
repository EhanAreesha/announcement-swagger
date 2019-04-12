import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable()
export class AnnouncementService {

    BASE_URL = "https://lmswebapp.azurewebsites.net/api";
    
    _url_details = "./../../assets/data/mock-announcement-details.json"
    _url_edit = "./../../assets/data/mock-announcements-edit.json"
    
    //_url_list = "./../../assets/data/mock-announcements-list.json"
    //_url_published = "./../../assets/data/mock-annoucements-list-admin-published.json"
    //_url_archived = "./../../assets/data/mock-annoucements-list-admin-archived.json"
    //_url_draft = "./../../assets/data/mock-annoucements-list-admin-draft.json"

    constructor(private http: HttpClient) {}

    post(annoucements: IAnnouncements): Observable<IAnnouncements>{  
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'true',
            })
          };
        return this.http.post(this.BASE_URL + "/announcements", JSON.stringify(annoucements), httpOptions)
    }
    
    put(annoucements: IAnnouncements): Observable<IAnnouncements>{  
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'true',
            })
          };
        return this.http.put(this.BASE_URL + "/announcements/" + annoucements.id, JSON.stringify(annoucements), httpOptions)
    }
    
    getAnnouncementListData(): Observable<IAnnouncementsList[]> {
        return this.http.get<IAnnouncementsList[]>(this.BASE_URL + "/announcements");
    }

    delete(id:string): Observable<IAnnouncements> {
        return this.http.delete<IAnnouncements>(this.BASE_URL + '/announcements/' + id);
    }

    getDataById(id:string): Observable<IAnnouncements> {
        return this.http.get<IAnnouncements>(this.BASE_URL + '/announcements/' + id);
    }

    getDraftData(): Observable<IDraftAnnouncements[]> {
        return this.http.get<IDraftAnnouncements[]>(this.BASE_URL + "/announcements?Status=draft");
    }
    
    getArchivedData(): Observable<IArchivedAnnouncements[]> {
        return this.http.get<IArchivedAnnouncements[]>(this.BASE_URL + "/announcements?Status=archived");
    }

    getPublishedData(): Observable<IPublishedAnnouncements[]> {
        return this.http.get<IPublishedAnnouncements[]>(this.BASE_URL + "/announcements?Status=published");
    }
}