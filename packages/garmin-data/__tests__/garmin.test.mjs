import MOCK from "@dynamic-data/garmin-data";

import { DailiesData } from "@dynamic-data/garmin-data/mockups";

describe("garmin", () => {
  //test.todo("needs tests");
  it("DailiesData mockup datamodel from default", () => {
    const data = MOCK.DailiesData;
    //console.log("MOCK ", MOCK);
    console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });

  it("DailiesData mockup datamodel only", () => {
    const data = DailiesData;

    expect(typeof data).toBe("object");
  });
});
