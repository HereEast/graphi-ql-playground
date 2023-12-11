import { ReactElement, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "../../hooks";
import { Page } from "../../types";

export interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps): ReactElement | null {
  const router = useRouter();

  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.replace(Page.LOGIN);
    }
  }, [router, user]);

  return user ? <>{children}</> : null;
}

export default ProtectedRoute;
