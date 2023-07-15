import { createSlice } from "@reduxjs/toolkit";

import { Episode, MovieDetail } from "@/types/types";

export interface episodesState {
  episode: Episode | null;
  episodes: Episode[] | null;
  movie: MovieDetail | null;
}

const initialState: episodesState = {
  episode: null,
  episodes: null,
  movie: null,
};

export const episodesSlice = createSlice({
  name: "episodesReducer",
  initialState,
  reducers: {
    setEpisodes: (state, actions) => {

      state.episodes = actions.payload;
      if (!state.episode && actions.payload) state.episode = actions.payload[0];
    
    },
    setEpisode: (state, actions) => {

      state.episode = actions.payload;
    
    },
    setMovie: (state, actions) => {

      state.movie = actions.payload;
      state.episode = null;
      state.episodes = null;
    
    },
  },
});

export const { setEpisodes, setEpisode, setMovie } = episodesSlice.actions;

export default episodesSlice.reducer;
