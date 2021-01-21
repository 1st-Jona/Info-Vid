import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewSintomaPage } from './new-sintoma.page';

describe('NewSintomaPage', () => {
  let component: NewSintomaPage;
  let fixture: ComponentFixture<NewSintomaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSintomaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewSintomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
