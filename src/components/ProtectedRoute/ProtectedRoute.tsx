import { ReactElement, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { IS_AUTH } from "../../constants";
import { Page } from "../../types";

export interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps): ReactElement | null {
  const router = useRouter();

  useEffect(() => {
    if (!IS_AUTH) {
      router.replace(Page.LOGIN);
    }
  }, [router]);

  return IS_AUTH ? <>{children}</> : null;
}

export default ProtectedRoute;
