import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Play2Page } from './play2.page';

describe('Play2Page', () => {
  let component: Play2Page;
  let fixture: ComponentFixture<Play2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Play2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Play2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
