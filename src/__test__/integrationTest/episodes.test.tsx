import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";

import { episodes, movie } from "@/__test__/__mocks__/data";
import { store } from "@/app/store";
import Episodes from "@/components/episodes/episodes";
import { setEpisodes, setMovie } from "@/slices/episodesSlice";

import "@testing-library/jest-dom";

describe("EpisodeDetail Component", () => {

  store.dispatch(setMovie(movie));
  store.dispatch(setEpisodes(episodes));

  beforeEach(() => {

    render(
      <Provider store={store}>
        <Episodes />
      </Provider>,
    );

    const titleEl = screen.getByTestId(`card_${episodes[1].id}`);
    console.log(titleEl);
    fireEvent.click(titleEl);

  });

  it("render Title Episode after Select", () => {

    const selectedEpisode = screen.getByTestId("episodeTitle");
    expect(selectedEpisode).toHaveTextContent(episodes[1].title);

  });

  it("render Plot Episode after Select", () => {

    const selectedEpisode = screen.getByTestId("episodePlot");
    if (episodes[1].plot)
      expect(selectedEpisode).toHaveTextContent(episodes[1].plot);
    else expect(selectedEpisode).toHaveTextContent("");

  });

});
