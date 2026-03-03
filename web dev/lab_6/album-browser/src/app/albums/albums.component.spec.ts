import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsComponent } from './albums.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});