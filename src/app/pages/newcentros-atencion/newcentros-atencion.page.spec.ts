import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewcentrosAtencionPage } from './newcentros-atencion.page';

describe('NewcentrosAtencionPage', () => {
  let component: NewcentrosAtencionPage;
  let fixture: ComponentFixture<NewcentrosAtencionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcentrosAtencionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewcentrosAtencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
