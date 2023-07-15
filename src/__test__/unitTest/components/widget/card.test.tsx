import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "@/components/widget/card";

import "@testing-library/jest-dom";

describe("card Component", () => {

  let data = {
    title: "Episode 1",
    description: "description",
    id: "1",
    tag: "1",
  };

  beforeEach(() => {

    function changeEpisode() {}
    render(<Card data={data} handelClick={changeEpisode} />);
  
  });

  it("render title", () => {

    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent(data.title);
  
  });

  it("render description", () => {

    const boldElement = screen.getByText(data.description);
    expect(boldElement.tagName).toBe("P");
  
  });

  it("render tag", () => {

    const boldElement = screen.getByText(data.tag);
    expect(boldElement.tagName).toBe("B");
  
  });

});
