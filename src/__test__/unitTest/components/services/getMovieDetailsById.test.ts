import axios from "axios";

import { API_KEY, API_URL } from "@/utils/config";
import { PARAMETER_ID } from "@/utils/parameter";
import { getMovieDetailsById } from "@/utils/service";

jest.mock("axios");

describe("getMovieDetailsById", () => {

  const id = "12345";
  const movieDetailsResponse = {
    Response: "True",
    imdbID: "12345",
    Title: "Movie Title",
    Plot: "Movie plot",
    Poster: "poster-url",
    totalSeasons: "3",
  };

  test("should fetch and return movie details for a given ID", async () => {

    axios.get.mockResolvedValueOnce({ data: movieDetailsResponse });

    const expectedMovieDetails = {
      id: "12345",
      title: "Movie Title",
      plot: "Movie plot",
      poster: "poster-url",
      totalSeasons: "3",
    };

    const result = await getMovieDetailsById(id);

    expect(axios.get).toHaveBeenCalledWith(
      `${API_URL}?apikey=${API_KEY}&${PARAMETER_ID}=${id}`,
    );
    expect(result).toEqual(expectedMovieDetails);
  
  });

  test("should handle errors and return null", async () => {

    const mockError = new Error("Network error");
    axios.get.mockRejectedValueOnce(mockError);

    console.error = jest.fn(); // Mock console.error

    const result = await getMovieDetailsById(id);

    expect(axios.get).toHaveBeenCalledWith(
      `${API_URL}?apikey=${API_KEY}&${PARAMETER_ID}=${id}`,
    );
    expect(console.error).toHaveBeenCalledWith(
      "Error fetching movie details",
      mockError,
    );
    expect(result).toBeNull();
  
  });

});
