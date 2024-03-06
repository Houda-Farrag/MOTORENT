import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../service/userApi";

const token = localStorage.getItem("token");

export function useUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(token),
  });
  return { data, isLoading, error };
}

export default useUser;
