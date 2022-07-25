// Endpoint => GET => https://api.foursquare.com/v2/venues/explore/
// Parameters:
// ===============================================================================================================================================================================================================================================================================================================================================================================
// | Name             | Type    | Description                                                                                                                                                                                                                                                                                                                                    |
// ===============================================================================================================================================================================================================================================================================================================================================================================
// | client_id        | string  | The unique ID associated with your developer project. Required if using "Userless" authentication.                                                                                                                                                                                                                                             |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_secret    | string  | The unique secret value associated with your developer project. Required if using "Userless" authentication.                                                                                                                                                                                                                                   |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | oauth_token      | string  | The access token generated via your web application as described here. Required if using "User" authentication.                                                                                                                                                                                                                                |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | query            | string  | A string to be searched against a venue's tips, category, etc.                                                                                                                                                                                                                                                                                 |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | section          | string  | One of food, drinks, coffee, shops, arts, outdoors, sights, trending, nextVenues (venues frequently visited after a given venue), or topPicks (a mix of recommendations generated without a query from the user). Choosing one of these limits results to venues with the specified category or property.                                      |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | ll               | string  | The latitude/longitude around which to retrieve place information. This must be specified as latitude,longitude (e.g., ll=41.8781,-87.6298). Required if near is not specified.                                                                                                                                                                |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | near             | string  | A string naming a place in the world. If the near string is not geocodable, returns a failed_geocode error. Otherwise, searches within the bounds of the geocode and adds a geocode object to the response. Required if ll is not specified.                                                                                                   |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | radius           | int32   | Limit results to venues within this many meters of the specified location. Defaults to a city-wide area. Only valid for requests that use categoryId or query. The maximum supported radius is currently 100,000 meters.                                                                                                                       |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | categoryId       | string  | A comma separated list of categories to limit results to. If you specify categoryId. Specifying a radius may improve results. If specifying a top-level category, all sub-categories will also match the query.                                                                                                                                |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | novelty          | string  | Pass new or old to limit results to places the acting user hasn't been or has been, respectively. Omitting this parameter returns a mixture of old and new venues.                                                                                                                                                                             |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | friendVisits     | string  | Pass visited or notvisited to limit results to places the acting user's friends have or haven't been, respectively. Omitting this parameter returns a mixture of venues to which the user's friends have or haven't been.                                                                                                                      |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | time             | string  | Pass any to retrieve results for any time of day. Omitting this parameter returns results targeted to the current time of day.                                                                                                                                                                                                                 |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | day              | string  | Pass any to retrieve results for any day of the week. Omitting this parameter returns results targeted to the current day of the week.                                                                                                                                                                                                         |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | lastVenue        | string  | A venue ID to use in combination with the intent=nextVenues parameter, which returns venues users often visit after a given venue. If intent=nextVenues is specified but lastVenue is not, the user's last check-in will be used if it is within 2 hours. If the user has not checked in within the last 2 hours, no results will be returned. |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | openNow          | boolean | Boolean flag to only include venues that are open now. This prefers official provider hours but falls back to popular check-in hours.                                                                                                                                                                                                          |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | price            | int32   | Comma separated list of price points. Currently the valid range of price points are [1,2,3,4], 1 being the least expensive, 4 being the most expensive. For food venues, in the United States, 1 is < $10 an entree, 2 is $10-$20 an entree, 3 is $20-$30 an entree, 4 is > $30 an entree.                                                     |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | saved            | boolean | Boolean flag to only include venues that the user has saved on their To-Do list or to another list.                                                                                                                                                                                                                                            |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | sortByDistance   | boolean | Boolean flag to sort the results by distance instead of relevance.                                                                                                                                                                                                                                                                             |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | sortByPopularity | boolean | Boolean flag to sort the results by popularity instead of relevance.                                                                                                                                                                                                                                                                           |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | limit            | int32   | Number of results to return; up to 50.                                                                                                                                                                                                                                                                                                         |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | offset           | int32   | Used to page through results, up to 50.                                                                                                                                                                                                                                                                                                        |
// ===============================================================================================================================================================================================================================================================================================================================================================================


export const venues_getRecommendations = {
  meta: {
    code: 200,
    requestId: "5ac51ef86a607143de8eg5cb"
  },
  response: {
    warning: {
      text: "There aren't a lot of results near you. Try something more general, reset your filters, or expand the search area."
    },
    suggestedRadius: 600,
    headerLocation: "Lower East Side",
    headerFullLocation: "Lower East Side, New York",
    headerLocationGranularity: "neighborhood",
    totalResults: 230,
    suggestedBounds: {
      ne: {
        lat: 40.724216906965616,
        lng: -73.9896507407283
      },
      sw: {
        lat: 40.72151724718017,
        lng: -73.98693222860872
      }
    },
    groups: [
      {
        type: "Recommended Places",
        name: "recommended",
        items: [
          {
            reasons: {
              count: 0,
              items: [
                {
                  summary: "This spot is popular",
                  type: "general",
                  reasonName: "globalInteractionReason"
                }
              ]
            },
            venue: {
              id: "49b6e8d2f964a52016531fe3",
              name: "Russ & Daughters",
              location: {
                address: "179 E Houston St",
                crossStreet: "btwn Allen & Orchard St",
                lat: 40.72286707707289,
                lng: -73.98829148466851,
                labeledLatLngs: [
                  {
                    label: "display",
                    lat: 40.72286707707289,
                    lng: -73.98829148466851
                  }
                ],
                distance: 130,
                postalCode: "10002",
                cc: "US",
                city: "New York",
                state: "NY",
                country: "United States",
                formattedAddress: [
                  "179 E Houston St (btwn Allen & Orchard St)",
                  "New York, NY 10002",
                  "United States"
                ]
              },
              categories: [
                {
                  id: "4bf58dd8d48988d1f5941735",
                  name: "Gourmet Shop",
                  pluralName: "Gourmet Shops",
                  shortName: "Gourmet",
                  icon: {
                    prefix: "https://ss3.4sqi.net/img/categories_v2/shops/food_gourmet_",
                    suffix: ".png"
                  },
                  primary: true
                }
              ],
              popularityByGeo: 0.9999983845502491,
              venuePage: {
                id: "77298563"
              }
            }
          }
        ]
      }
    ]
  }
};