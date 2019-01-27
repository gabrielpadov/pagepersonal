import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeEditorComponent } from './about-me-editor.component';

describe('AboutMeEditorComponent', () => {
  let component: AboutMeEditorComponent;
  let fixture: ComponentFixture<AboutMeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
