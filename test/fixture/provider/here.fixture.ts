import { LocationInterface } from '../../../src/interface';
import { HereProvider } from '../../../src/provider';

export const providerRawResponse: Readonly<any> = Object.freeze({
    Response: {
        MetaInfo: { Timestamp: '2019-02-19T23:39:16.057+0000' },
        View: [
            {
                _type: 'SearchResultsViewType',
                ViewId: 0,
                Result: [
                    {
                        Relevance: 0.89,
                        MatchLevel: 'houseNumber',
                        MatchQuality: { Country: 1, State: 1, City: 1, Street: [1], HouseNumber: 1, PostalCode: 1 },
                        MatchType: 'interpolated',
                        Location: {
                            LocationId: 'NT_.4F.1wbQ1kZP.RMjIh-x1A_xETN4A',
                            LocationType: 'point',
                            DisplayPosition: { Latitude: 41.7332379, Longitude: -87.5959685 },
                            NavigationPosition: [{ Latitude: 41.7331031, Longitude: -87.5959614 }],
                            MapView: {
                                TopLeft: { Latitude: 41.734362, Longitude: -87.5974749 },
                                BottomRight: { Latitude: 41.7321137, Longitude: -87.5944621 },
                            },
                            Address: {
                                Label: '1158 E 89th St, Chicago, IL 60619, United States',
                                Country: 'USA',
                                State: 'IL',
                                County: 'Cook',
                                City: 'Chicago',
                                District: 'Burnside',
                                Street: 'E 89th St',
                                HouseNumber: '1158',
                                PostalCode: '60619',
                                AdditionalData: [
                                    { value: 'US', key: 'Country2' },
                                    { value: 'United States', key: 'CountryName' },
                                    { value: 'Illinois', key: 'StateName' },
                                    { value: 'Cook', key: 'CountyName' },
                                    { value: 'N', key: 'PostalCodeType' },
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
});

export const providerParsedResponse: ReadonlyArray<LocationInterface> = Object.freeze([
    {
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
        provider: HereProvider.name,
        formattedAddress: '1158 E 89th St, Chicago, IL 60619, United States',
    },
]);
