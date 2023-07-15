// __mocks__/store.js
export const dispatchMock = jest.fn();
export const getStateMock = jest.fn();

const mockStore = {
  dispatch: dispatchMock,
  getState: getStateMock,
};

export default mockStore;
