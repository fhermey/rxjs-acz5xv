import './style.css';

import { mergeMap } from 'rxjs';

import { httpRequest, userCityInput } from './server';

/**
 * --- INPUT ---
 * Paris
 * Venedig
 * Mailand
 * Muenchen
 * Kairo
 * Sydney
 *
 * userCityInput() - returns Observable(String) with incoming cities from user
 * httpRequest(city: String) - returns Observable(String) with repsonse from server for city (takes up to 6 seconds)
 */

userCityInput().pipe(mergeMap(httpRequest)).subscribe(console.log);
