import './style.css';

import {} from 'rxjs';

import {
  isGermanCity,
  httpRequest,
  shouldFilterGermanCities,
  userCityInput,
} from './server';

/**
 * --- INPUT ---
 * Paris
 * Venedig
 * Mailand
 * Muenchen
 * Kairo
 * Frankfurt
 * Sydney
 *
 * userCityInput() - returns Observable<String> with incoming cities from user
 * httpRequest(city: String) - returns Observable<String> with repsonse from server for city (takes up to 6 seconds)
 * shouldFilterGermanCities() - returns Observable<boolean> indicating, whether german cities should be filtered or not
 * isGermanCity() - returns true if city is in germany
 */
