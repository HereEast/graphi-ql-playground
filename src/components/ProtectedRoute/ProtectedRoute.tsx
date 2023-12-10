import { ReactElement, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { Page } from "../../types";

import { auth } from "../../services";
import { useAuthState } from "react-firebase-hooks/auth";

export interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps): ReactElement | null {
  const router = useRouter();

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      router.replace(Page.LOGIN);
    }
  }, [router, user]);

  return user ? <>{children}</> : null;
}

export default ProtectedRoute;
