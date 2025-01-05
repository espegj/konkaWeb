import { useEffect } from "react";

export const OAuthCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const oauthToken = params.get("oauth_token");
    const oauthVerifier = params.get("oauth_verifier");
    if (oauthToken && oauthVerifier) {
      const appUrl = `konka://oauth-callback/garmin?oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`;
      window.location.href = appUrl;
    } else {
      console.error("Missing OAuth parameters.");
    }
  }, []);
  return <div>Redirecting...</div>;
};
