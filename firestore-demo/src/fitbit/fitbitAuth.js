import React, { useEffect, useState } from 'react';
import { ClientID, ClientSecret, RedirectUri } from "./fitbitConfig";

/************ Change for your app *************/
const clientId = ClientID;
const clientSecret = ClientSecret;
const redirectUri = RedirectUri; // the redirectURL in FitBit app

/*  ------------------------------ Authorization ------------------------------  */

const useFitbitAuth = () => {
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        // Parse for code
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get('code');

        // authenticate user 
        const authenticateFitbit = async () => {
            if (accessToken) {
                return;
            }

            // If authcode present retrieve access token
            // Else initiate auth
            if (authorizationCode) {
                try {
                    const token = await handleAuthorizationCode(authorizationCode);
                    setAccessToken(token);
                } catch (error) {
                    console.error('Error handling authorization code:', error);
                }
            } else {
                initiateAuthentication();
            }
        };

        authenticateFitbit();
    }, [accessToken]);

    return accessToken;
};

// Redirect user to URL to get authentication
const initiateAuthentication = () => {
    const scope = 'activity+cardio_fitness+electrocardiogram+heartrate+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight';
    const authorizationEndpoint = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.href = authorizationEndpoint;
};

// Given auth code, this function aims to retrieve access token
const handleAuthorizationCode = async (code) => {
    const tokenEndpoint = 'https://api.fitbit.com/oauth2/token';
    const body = new URLSearchParams({
        code: code,
        grant_type: 'authorization_code',
        client_id: clientId,
        redirect_uri: redirectUri,
    });

    try {
        const response = await fetch(tokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`, // Base64 encoded client_id:client_secret
            },
            body: body.toString(),
        });

        if (response.ok) {
            const data = await response.json();
            const accessToken = data.access_token;
            return accessToken;
        }
        else {
            console.error('Error exchanging authorization code for access token');
        }
    } catch (error) {
        console.error('Error during token exchange:', error);
    }
};

export { useFitbitAuth, initiateAuthentication, handleAuthorizationCode };