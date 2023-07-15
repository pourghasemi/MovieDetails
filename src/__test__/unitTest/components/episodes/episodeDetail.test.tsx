import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { episodes } from "@/__test__/__mocks__/data";
import { store } from "@/app/store";
import EpisodeDetail from "@/components/episodes/episodeDetail";
import { setEpisodes } from "@/slices/episodesSlice";

import "@testing-library/jest-dom";

describe("EpisodeDetail Component", () => {

  store.dispatch(setEpisodes(episodes));

  beforeEach(() => {

    render(
      <Provider store={store}>
        <EpisodeDetail />
      </Provider>,
    );
  
  });

  it("render title", () => {

    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent(episodes[0].title);
  
  });

  it("render summery", () => {

    const summery = episodes[0].plot;
    if (summery) {

      const summeryEL = screen.getByText(summery);
      expect(summeryEL.tagName).toBe("P");
    
    }
  
  });
  it("render Released", () => {

    const EpisodeEL = screen.getByText(episodes[0].released);
    expect(EpisodeEL.tagName).toBe("SPAN");
  
  });

  it("render Episode number", () => {

    const EpisodeEL = screen.getByText("Episode 1 -");
    expect(EpisodeEL.tagName).toBe("SPAN");
  
  });

});
