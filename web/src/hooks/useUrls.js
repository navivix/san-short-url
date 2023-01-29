import { useEffect, useState } from "react";

function useUrls() {
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

  const [loading, setLoading] = useState(true);
  const [urls, setUrls] = useState([]);

  const triggerReload = () => setLoading(true);

  const getUrls = () => fetch(`${apiUrl}`).then((res) => res.json());

  const createUrl = (url) =>
    fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    }).then(triggerReload);

  const deleteUrl = (short) =>
    fetch(`${apiUrl}/${short}`, {
      method: "DELETE",
    }).then(triggerReload);

  useEffect(() => {
    if (loading) {
      getUrls()
        .then((res) => setUrls(res))
        .then(() => setLoading(false));
    }
  }, [loading]);

  return { urls, loading, createUrl, deleteUrl };
}

export default useUrls;
