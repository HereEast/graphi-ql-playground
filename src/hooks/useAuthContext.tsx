import { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services";

export interface AuthContextProps {
  user: User | null | undefined;
  loading: boolean;
  error: Error | undefined;
}

export function useAuthContext(): AuthContextProps {
  const [user, loading, error] = useAuthState(auth);

  return { user, loading, error };
}
