type User = {
  userId: string;
  AccessToken: string;
  role: string;
  email: string;
};
type SignUpData = {
  name: string;
  email: string;
  password: string;
};

type SignUpResponse = {
  message: string;
};

type SignUpError = {
  message: string;
};

type SignUpResult = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: SignUpError;
  signUp: (data: SignUpData) => void;
};
