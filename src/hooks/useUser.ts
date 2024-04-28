import useSWR from "swr";
import {useJwtFetcher} from "./useJwtFetcher.ts";

interface User {
    user_id: string;
    org_id_to_org_member_info: Record<string, unknown>;
    email: string;
    first_name: string | null;
    last_name: string | null;
    username: string | null;
    properties: string | null;
    legacy_user_id: string | null;
    impersonator_user_id: string | null;
    active_org_id: string | null;
    login_method: {
        login_method: string;
    };
}


export const useUser = () => {
    const jwtFetcher = useJwtFetcher();
    const {data: user, isLoading: isUserLoading} = useSWR<User>('/users/me', jwtFetcher);
    const isProfileComplete = user?.username;

    return {user, isUserLoading, isProfileComplete};
}