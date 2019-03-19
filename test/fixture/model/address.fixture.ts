import { LocationInterface } from '../../../src/interface';
import { GoogleMapsProvider } from '../../../src/provider';

export const locationFixture: Readonly<LocationInterface> = Object.freeze({
    formattedAddress: '1158 E 89th St, Chicago, IL 60619, United States',
    latitude: 41.7332379,
    longitude: -87.5959685,
    country: 'United States',
    countryCode: 'US',
    state: 'Illinois',
    stateCode: 'IL',
    city: 'Chicago',
    streetName: 'E 89th St',
    houseNumber: '1158',
    postalCode: '60619',
    provider: GoogleMapsProvider.name,
    raw: {},
});
