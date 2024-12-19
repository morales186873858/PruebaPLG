import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TelefonoPipe } from './pipes/telefono.pipe';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule],
    declarations: [AppComponent, TelefonoPipe],

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mi-pryecto-PLG'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mi-pryecto-PLG');
  });

  it('should render telefono pipe', () => {
    const pipe = new TelefonoPipe();
    const numero = '+56976765789';
    const resultado = pipe.transform(numero);
    expect(resultado).toEqual('+569 7676 5789');
  });

  it('should not render telefono pipe', () => {
    const pipe = new TelefonoPipe();
    const numero = '+56989030982';
    const resultado = pipe.transform(numero);
    expect(resultado).not.toEqual('+56989030982');
    });
});
