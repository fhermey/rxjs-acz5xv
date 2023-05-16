import { concatMap, delay, from, Observable, of } from 'rxjs';

export function userCityInput(): Observable<String> {
  return from([
    'Paris',
    'Venedig',
    'Mailand',
    'Muenchen',
    'Kairo',
    'Frankfurt',
    'Sydney',
  ]).pipe(concatMap((val) => of(val).pipe(delay(1000))));
}

export function httpRequest(city: String) {
  return of('Response for ' + city).pipe(
    delay(Math.floor(Math.random() * 6000))
  );
}

export function shouldFilterGermanCities() {
  return of(true);
}

export function isGermanCity(city: String) {
  return city === 'Muenchen' || city === 'Frankfurt';
}
