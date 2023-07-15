import { API_KEY, API_URL } from "@/utils/config";
import { buildApiUrl } from "@/utils/service";

describe("buildApiUrl", () => {

  test("should build the API URL with parameters and API key", () => {

    const parameters = {
      param1: "value1",
      param2: "value2",
    };

    const expectedUrl = `${API_URL}?apikey=${API_KEY}&param1=value1&param2=value2`;

    const result = buildApiUrl(parameters, API_URL);

    expect(result).toEqual(expectedUrl);
  
  });

  test("should handle empty parameters object", () => {

    const parameters = {};

    const expectedUrl = `${API_URL}?apikey=${API_KEY}`;

    const result = buildApiUrl(parameters, API_URL);

    expect(result).toEqual(expectedUrl);
  
  });

  test("should handle special characters in parameter values", () => {

    const parameters = {
      param1: "value 1",
      param2: "value#2",
    };

    const expectedUrl = `${API_URL}?apikey=${API_KEY}&param1=value%201&param2=value%232`;

    const result = buildApiUrl(parameters, API_URL);

    expect(result).toEqual(expectedUrl);
  
  });

});
