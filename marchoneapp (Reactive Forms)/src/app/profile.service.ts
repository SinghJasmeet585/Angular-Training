import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile : Profile
  constructor(private httpClient : HttpClient) { 
    this.profile=new Profile();
  }

getProfileDetails() : Observable<Array<Profile>>{
  return this.httpClient.get<Array<Profile>>('http://localhost:3000/profile');
}

saveProfileDetails(profile:Profile):Observable<Profile>{
  return this.httpClient.post<Profile>('http://localhost:3000/profile',profile);
}

}
