// Endpoint => GET => /v1.2/history
// Parameters:
// ======================================================================================================
// | Name              | Type    | Description                                                          |
// ======================================================================================================
// | offset (optional) | integer | Offset the list of returned results by this amount. Default is zero. |
// ------------------------------------------------------------------------------------------------------
// | limit (optional)  | integer | Number of items to retrieve. Default is 5, maximum is 50.            |
// ======================================================================================================
// Status of the activity will only return completed for now.

export const userHistory = {
  count: 15,
  history: [
    {
      status: "completed",
      distance: 1.4780860317,
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      start_time: 1475545183,
      start_city: {
        latitude: 37.7749,
        display_name: "San Francisco",
        longitude: -122.4194
      },
      end_time: 1475545808,
      request_id: "fb0a7c1f-2cf7-4310-bd27-8ba7737362fe",
      request_time: 1475545095
    },
    {
      status: "completed",
      distance: 1.2792152568,
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      start_time: 1475513472,
      start_city: {
        latitude: 37.7749,
        display_name: "San Francisco",
        longitude: -122.4194
      },
      end_time: 1475513898,
      request_id: "d72338b0-394d-4f0e-a73c-78d469fa0c6d",
      request_time: 1475513393
    },
    {
      status: "completed",
      distance: 1.5084526246,
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      start_time: 1475170251,
      start_city: {
        latitude: 37.7749,
        display_name: "San Francisco",
        longitude: -122.4194
      },
      end_time: 1475171154,
      request_id: "2b61e340-27bd-4937-8304-122009e4a393",
      request_time: 1475170088
    },
    {
      status: "completed",
      distance: 1.4705337758,
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      start_time: 1475027766,
      start_city: {
        latitude: 37.7749,
        display_name: "San Francisco",
        longitude: -122.4194
      },
      end_time: 1475028387,
      request_id: "58cb7b3c-fe22-47b4-94c0-2cf08b34f4be",
      request_time: 1475027705
    },
    {
      status: "completed",
      distance: 0.6489455763,
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      start_time: 1475002745,
      start_city: {
        latitude: 37.7749,
        display_name: "San Francisco",
        longitude: -122.4194
      },
      end_time: 1475003150,
      request_id: "57be6f97-e10f-411e-a87e-670011c46b55",
      request_time: 1475002656
    },
    {
      status: "completed",
      distance: 0.6632030652,
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      start_time: 1475001862,
      start_city: {
        latitude: 37.7749,
        display_name: "San Francisco",
        longitude: -122.4194
      },
      end_time: 1475002218,
      request_id: "0ca65d53-3351-4f3b-b07f-55e4fe4c1ad9",
      request_time: 1475001534
    },
    {
      status: "completed",
      distance: 1.3935675129,
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      start_time: 1474995527,
      start_city: {
        latitude: 37.7749,
        display_name: "San Francisco",
        longitude: -122.4194
      },
      end_time: 1474995943,
      request_id: "c0453d97-4330-4ec2-88ab-38678101cc0b",
      request_time: 1474995056
    },
    {
      status: "completed",
      distance: 1.5046201975,
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      start_time: 1474909791,
      start_city: {
        latitude: 37.7749,
        display_name: "San Francisco",
        longitude: -122.4194
      },
      end_time: 1474910341,
      request_id: "35822455-e4f5-4339-b763-6fc3ea16dc61",
      request_time: 1474909743
    },
    {
      status: "completed",
      distance: 2.4445998557,
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      start_time: 1474685017,
      start_city: {
        latitude: 37.7749,
        display_name: "San Francisco",
        longitude: -122.4194
      },
      end_time: 1474685568,
      request_id: "81a0ffda-a879-4443-beb8-e253f4d19ecc",
      request_time: 1474684872
    },
    {
      status: "completed",
      distance: 1.3603866105,
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
      start_time: 1474651767,
      start_city: {
        latitude: 37.7749,
        display_name: "San Francisco",
        longitude: -122.4194
      },
      end_time: 1474652253,
      request_id: "97736867-41ca-432a-b7e9-909e66d833ba",
      request_time: 1474651636
    }
  ],
  limit: 10,
  offset: 0
};