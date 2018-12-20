import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor() { }

  getPet () {
    return ['1','2'];
  }
}
