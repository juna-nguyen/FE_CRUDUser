import { useEffect, useState } from "react";
import { UsersListPage } from "@/pages/UsersListPage";
import { UserDetailPage } from "@/pages/UserDetailPage";
import { users, createUserDetail } from "@/data/users";
import { getUser } from "@/services/api/apiUser";

function getUserFromPath(pathname) {
  const match = pathname.match(/^\/users\/([^/]+)\/?$/);
  if (!match) {
    return null;
  }

  const userId = decodeURIComponent(match[1]);
  const user = users.find((item) => item._id === userId);
  return user ? createUserDetail(user) : null;
}

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const [remoteUser, setRemoteUser] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const routeMatch = pathname.match(/^\/users\/([^/]+)(\/edit)?\/?$/);

  useEffect(() => {
    const match = pathname.match(/^\/users\/([^/]+)(\/edit)?\/?$/);
    if (!match) {
      setRemoteUser(null);
      return;
    }
    getUser(decodeURIComponent(match[1]))
      .then(setRemoteUser)
      .catch(() => setRemoteUser(null));
  }, [pathname]);

  const user = remoteUser || getUserFromPath(pathname);

  if (user) {
    return (
      <UserDetailPage user={user} isEditRoute={Boolean(routeMatch?.[2])} />
    );
  }

  return <UsersListPage />;
}

export default App;
