import {useAuth0} from "@auth0/auth0-react";
import {fetcher} from "../http/fetcher.ts";

export const useJwtFetcher = () => {
    const {getAccessTokenSilently} = useAuth0();

    const jwtFetcher = async (url: RequestInfo | URL) => {
        const jwt = await getAccessTokenSilently();
        return fetcher(url, jwt);
    };

    return jwtFetcher;
};