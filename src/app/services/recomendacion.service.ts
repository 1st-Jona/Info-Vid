import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Recomendacion } from 'src/app/models/recomendacion';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {

  constructor(private firestore:AngularFirestore) { }

  createRecomendacion(recomendacion: Recomendacion){
    return this.firestore.collection('recomendacion').add(recomendacion);
  }
  getRecomendacion(){
    return this.firestore.collection('recomendacion').snapshotChanges();
  }
}
