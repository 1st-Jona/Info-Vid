import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Sintoma } from '../models/sintoma';

@Injectable({
  providedIn: 'root'
})
export class SintomaService {

  constructor(private firestore:AngularFirestore) { }

  createSintoma(sintoma:Sintoma){
    return this.firestore.collection('sintomas');
  }
  deleteSintoma(id:string){
    this.firestore.doc('sintomas/'+id).delete();
  }
  getSintoma(){
    return this.firestore.collection('sintomas').snapshotChanges();
  }
}
