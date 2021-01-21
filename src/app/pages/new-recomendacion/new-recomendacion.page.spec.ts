import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewRecomendacionPage } from './new-recomendacion.page';

describe('NewRecomendacionPage', () => {
  let component: NewRecomendacionPage;
  let fixture: ComponentFixture<NewRecomendacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecomendacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewRecomendacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
