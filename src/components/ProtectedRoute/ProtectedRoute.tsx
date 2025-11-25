import { ReactElement, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "../../hooks";
import { Page } from "../../types";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps): ReactElement | null {
  const router = useRouter();

  const { user, loading } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.replace(Page.LOGIN);
    }
  }, [router, user]);

  return user && !loading ? <>{children}</> : null;
}

export default ProtectedRoute;
