import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GetRestaurantsService {

  API_KEY:string ="e06f5b3da2be4501af757078cf03a985";
  constructor(private httpClient: HttpClient) { }

  // public getPlaces(){
  //   return this.httpClient.get<Config>("http://localhost:3000/api/places");
  // }

  public getSearchPlaces(searchValue){
    console.log("SearchValue FROM my Service", searchValue)
    let params = new HttpParams();
    params = params.append('searchValue', searchValue );
    return this.httpClient.get<Config>("http://localhost:3000/api/search/places",{params: params});
  }

  public getPlacesId(id){
    console.log("id",id)
    let params = new HttpParams();
    params = params.append('id', id );
    return this.httpClient.get<Config>("http://localhost:3000/api/places/id",{params: params})  
  }
  
  // getPhotoURL(photoReference: string) {
  //   let params = new HttpParams();
  //   params = params.append('photoReference', photoReference );    
  //   return this.httpClient.get<Config>("http://localhost:3000/api/places/photo",{params: params})
  // }

  getPhotoURL(photoReference: string) {
    var googlePLacesQueryPhoto = "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBMh4S3Es4U2U7AAelpPXCyg0XyHCKc_7Y&maxwidth=400&photoreference="+photoReference;
    return googlePLacesQueryPhoto;
  }

}

export interface Config {
  heroesUrl: string;
  textfile: string;
}
