import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SobreCovid } from 'src/app/models/sobre-covid';
@Injectable({
  providedIn: 'root'
})
export class SobreCovidService {

  constructor(private firestore:AngularFirestore) { }

  createSobreCovid(sobreCovid:SobreCovid){
    return this.firestore.collection('sobreCovid').add(sobreCovid);
  
  } 

  getSobreCovid(){
    return this.firestore.collection('sobreCovid').snapshotChanges();
  }
  deleteSobreCovid(id:string){
    this.firestore.doc('sobreCovid/'+id).delete();
  }
  updateSobreCovid(sc: SobreCovid, id: string){
    this.firestore.doc('sobreCovid/'+id).update(sc);
  }


}
