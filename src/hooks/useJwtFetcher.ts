import {fetcher} from "../http/fetcher.ts";
import {useAuthInfo} from "@propelauth/react";

export const useJwtFetcher = () => {
    const authInfo = useAuthInfo()

    const jwtFetcher = (url: RequestInfo | URL) => {
        const jwt = authInfo.accessToken;
        return fetcher(url, jwt ?? '');
    };

    return jwtFetcher;
};