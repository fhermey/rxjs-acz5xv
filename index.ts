import './style.css';

import {
  concatMap,
  delay,
  from,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
} from 'rxjs';

let array = ['Paris', 'Venedig', 'Mailand', 'Muenchen', 'Kairo', 'Sydney'];

let obs = from(array).pipe(concatMap((val) => of(val).pipe(delay(1000))));

obs
  .pipe(
    mergeMap((val) =>
      of(val + '_emit').pipe(delay(Math.floor(Math.random() * 6000)))
    )
  )
  .subscribe(console.log);

// Open the console in the bottom right to see results.
