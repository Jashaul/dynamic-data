// Endpoint => GET => /v1.2/estimates/price
// Parameters:
// =============================================================================================================
// | Name                 | Type  | Description                                                                |
// =============================================================================================================
// | start_latitude       | float | Latitude component of start location.                                      |
// -------------------------------------------------------------------------------------------------------------
// | start_longitude      | float | Longitude component of start location.                                     |
// -------------------------------------------------------------------------------------------------------------
// | end_latitude         | float | Latitude component of end location.                                        |
// -------------------------------------------------------------------------------------------------------------
// | end_longitude        | float | Longitude component of end location.                                       |
// -------------------------------------------------------------------------------------------------------------
// | seat_count(optional) | int   | The number of seats required for uberPOOL. Default and maximum value is 2. |
// =============================================================================================================
// The Price Estimates endpoint returns an estimated price range for each product offered at a given location. The price estimate is provided as a formatted string with the full price range and the localized currency symbol.

export const priceEstimates = {
  prices: [
    {
      localized_display_name: "POOL",
      distance: 6.17,
      display_name: "POOL",
      product_id: "26546650-e557-4a7b-86e7-6a3942445247",
      high_estimate: 15,
      low_estimate: 13,
      duration: 1080,
      estimate: "$13-14",
      currency_code: "USD"
    },
    {
      localized_display_name: "uberX",
      distance: 6.17,
      display_name: "uberX",
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      high_estimate: 17,
      low_estimate: 13,
      duration: 1080,
      estimate: "$13-17",
      currency_code: "USD"
    },
    {
      localized_display_name: "uberXL",
      distance: 6.17,
      display_name: "uberXL",
      product_id: "821415d8-3bd5-4e27-9604-194e4359a449",
      high_estimate: 26,
      low_estimate: 20,
      duration: 1080,
      estimate: "$20-26",
      currency_code: "USD"
    },
    {
      localized_display_name: "SELECT",
      distance: 6.17,
      display_name: "SELECT",
      product_id: "57c0ff4e-1493-4ef9-a4df-6b961525cf92",
      high_estimate: 38,
      low_estimate: 30,
      duration: 1080,
      estimate: "$30-38",
      currency_code: "USD"
    },
    {
      localized_display_name: "BLACK",
      distance: 6.17,
      display_name: "BLACK",
      product_id: "d4abaae7-f4d6-4152-91cc-77523e8165a4",
      high_estimate: 43,
      low_estimate: 43,
      duration: 1080,
      estimate: "$43.10",
      currency_code: "USD"
    },
    {
      localized_display_name: "SUV",
      distance: 6.17,
      display_name: "SUV",
      product_id: "8920cb5e-51a4-4fa4-acdf-dd86c5e18ae0",
      high_estimate: 63,
      low_estimate: 50,
      duration: 1080,
      estimate: "$50-63",
      currency_code: "USD"
    },
    {
      localized_display_name: "ASSIST",
      distance: 6.17,
      display_name: "ASSIST",
      product_id: "ff5ed8fe-6585-4803-be13-3ca541235de3",
      high_estimate: 17,
      low_estimate: 13,
      duration: 1080,
      estimate: "$13-17",
      currency_code: "USD"
    },
    {
      localized_display_name: "WAV",
      distance: 6.17,
      display_name: "WAV",
      product_id: "2832a1f5-cfc0-48bb-ab76-7ea7a62060e7",
      high_estimate: 33,
      low_estimate: 25,
      duration: 1080,
      estimate: "$25-33",
      currency_code: "USD"
    },
    {
      localized_display_name: "TAXI",
      distance: 6.17,
      display_name: "TAXI",
      product_id: "3ab64887-4842-4c8e-9780-ccecd3a0391d",
      high_estimate: null,
      low_estimate: null,
      duration: 1080,
      estimate: "Metered",
      currency_code: null
    }
  ]
};