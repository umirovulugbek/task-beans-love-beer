import { useDispatch } from "react-redux";

// eslint-disable-next-line no-unused-vars
export const DispatchLoading = (l = false) => {
  const dispatch = useDispatch();
  const dispatchLoading = (l = false) => {
    dispatch({ type: "SET_LOADING", payload: l });
  };
  return dispatchLoading;
};
// eslint-disable-next-line no-unused-vars
export const UserPermissions = (l = false) => {
  const dispatch = useDispatch();
  const userpermissions = (l = false) => {
    dispatch({ type: "USER_PERMISSIONS", payload: l });
  };
  return userpermissions;
};
