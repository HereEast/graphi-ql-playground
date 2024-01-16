export interface IContextMock {
  apiEndpoint: string;
  setApiEndpoint: jest.Mock;
}

export interface ILocaleMock {
  playground: {
    saveButton: string;
  };
}
