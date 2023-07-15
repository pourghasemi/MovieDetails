import React from "react";
import { render, screen } from "@testing-library/react";

import { movie } from "@/__test__/__mocks__/data";
import Description from "@/components/episodes/description";

import "@testing-library/jest-dom";

describe("EpisodeDetail Component", () => {

  beforeEach(() => {

    render(<Description movie={movie} />);
  
  });

  it("render title movie in tag H1", () => {

    const movieTitle = screen.getByText(movie.title);
    expect(movieTitle.tagName).toBe("H1");
  
  });
  it("render summery movie in tag p", () => {

    const movieSummery = screen.getByText(movie.plot);
    expect(movieSummery.tagName).toBe("P");
  
  });

  it("render season number in tag H3", () => {

    const movieSummery = screen.getByText("Season");
    console.log(movieSummery);
    expect(movieSummery.tagName).toBe("H3");
  
  });

});
