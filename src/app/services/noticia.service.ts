import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Noticia } from "src/app/models/noticia";

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private firestore:AngularFirestore) { }

  createNew(notice: Noticia){
    return this.firestore.collection('noticias').add(notice);
  }
  getNew(){
    return this.firestore.collection('noticias').snapshotChanges();
  }
}
