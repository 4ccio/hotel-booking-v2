import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokenCheck } from "@/modules/Authentication";

export function usePageAccess() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);

  const checkAccess = useCallback(async () => {
    setLoading(true);
    setError(null);
    setHasAccess(false);

    if (!isAuthorized) {
      setLoading(false);
      return;
    }

    try {
      const resultAction = await dispatch(tokenCheck());
      if (tokenCheck.rejected.match(resultAction)) {
        throw new Error("Ошибка валидации токена");
      }
      setHasAccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, isAuthorized]);

  useEffect(() => {
    checkAccess();
  }, [checkAccess]);

  return { hasAccess, loading, error };
}
