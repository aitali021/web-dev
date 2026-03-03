import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumPhotosComponent } from './album-photos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('AlbumPhotosComponent', () => {
  let component: AlbumPhotosComponent;
  let fixture: ComponentFixture<AlbumPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPhotosComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});