import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  ediciones: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
        this.ediciones = firestore.collection('variablesGenerales').valueChanges();
  }

  ngOnInit(): void {
  }

}
