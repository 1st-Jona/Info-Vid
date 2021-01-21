import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Sintoma } from '../models/sintoma';

@Injectable({
  providedIn: 'root'
})
export class SintomaService {

  constructor(private firestore:AngularFirestore) { }

  createSintoma(sintoma:Sintoma){
    return this.firestore.collection('sintoma');
  }
}
