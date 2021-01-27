import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { CentroAtencion } from '../models/centro-atencion';


@Injectable({
  providedIn: 'root'
})
export class CentroAtencionService {

  constructor(private firestore: AngularFirestore) { }

  getCentros(){
    return this.firestore.collection('centroatencion').snapshotChanges();
  }
  createCentro(center: CentroAtencion){
    return this.firestore.collection('centroatencion').add(center);
  }

  deleteCentro(id: string){
    this.firestore.doc('centroatencion/'+id).delete();
  }

  updateCentro(center: CentroAtencion, id:string){
    this.firestore.doc('centroatencion/'+id).update(center);
  }
}