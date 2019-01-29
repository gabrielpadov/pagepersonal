import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaEditorComponent } from './social-media-editor.component';

describe('SocialMediaEditorComponent', () => {
  let component: SocialMediaEditorComponent;
  let fixture: ComponentFixture<SocialMediaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
