import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentrosAtencionPage } from './centros-atencion.page';

describe('CentrosAtencionPage', () => {
  let component: CentrosAtencionPage;
  let fixture: ComponentFixture<CentrosAtencionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrosAtencionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentrosAtencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
