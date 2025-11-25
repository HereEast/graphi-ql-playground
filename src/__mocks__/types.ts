export interface IContextMock {
  apiEndpoint?: string;
  setApiEndpoint?: jest.Mock;
  setApiResponse?: jest.Mock;
}

export interface ILocaleMock {
  playground?: {
    saveButton: string;
  };
  tooltips?: {
    prettify: string;
    request: string;
  };
}
