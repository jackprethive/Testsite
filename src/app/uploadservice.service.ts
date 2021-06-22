import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadserviceService {
  
  apiUrl = 'https://11c4eb39e4c2.ngrok.io/api/uploadFile';
  retriveurl= 'https://11c4eb39e4c2.ngrok.io/api/getImages';
  constructor(private http: HttpClient) { }

  upload(formData: any){
    return this.http.post(this.apiUrl,formData,{
      reportProgress:true,
      observe:'events'
    }).pipe(
      map(event => this.getEventMessage(event, formData)),
      catchError(this.handleError)
    );
  }
  retrive(){
    return this.http.get(this.retriveurl);
  }
  private getEventMessage(event: HttpEvent<any>, formData:any) {

    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
		break;
      case HttpEventType.Response:
        return this.apiResponse(event);

		break;
      default:
        return `File "${formData.get('file').name}" surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event:any) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone,  };
  }

  private apiResponse(event:any) {
    return event.body;

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
