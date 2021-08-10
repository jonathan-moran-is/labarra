import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  ediciones: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.ediciones = firestore.collection('variablesGenerales').valueChanges();
   }

  ngOnInit(): void {
  }

}
