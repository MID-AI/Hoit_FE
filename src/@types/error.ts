export interface HTTPErrorInfo {
  statusCode: number;
  payload: {
    SERVER_MESSAGE: string;
    BODY: string;
    BUTTON: string;
    REDIRECT_URL?: string;
  };
}

export interface ErrorDialogType {
  isOpen: boolean;
  heading: string;
  body: string;
  button: string;
  redirectUrl?: string;
}
