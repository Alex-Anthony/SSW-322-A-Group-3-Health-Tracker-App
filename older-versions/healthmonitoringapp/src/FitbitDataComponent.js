
import React, { useEffect, useState } from 'react';


const FitbitDataComponent = () => {
    const [profile, setProfile] = useState('');
    const [heartrate, setHeartrate] = useState('');

/************ Change for your app *************/
const clientId = '23RTL2';
const clientSecret = 'e26fc818e7efa937210c4cc96aec4008';
const redirectUri = 'https://healthmonitoringapp-152ca.web.app'; // the redirectURL in FitBit app

    /*  ------------------------------ Authorization ------------------------------  */

    useEffect(() => {
        // Check if the authorization code is present in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get('code');

        if (authorizationCode) {
            // Authorization code is present, handle it
            handleAuthorizationCode(authorizationCode);
        } else {
            // Authorization code is not present, initiate the authentication flow
            initiateAuthentication();
        }
    }, []);

    const initiateAuthentication = () => {
        const scope = 'activity+cardio_fitness+electrocardiogram+heartrate+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight'; /************* Add other scopes as needed *************/
        // Construct the Fitbit authorization URL
        const authorizationEndpoint = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

        // Redirect the user to the Fitbit authorization page
        window.location.href = authorizationEndpoint;
    };

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

                // Now you can use the access token to make requests to the Fitbit API
                functionsRan(accessToken);
            }
            else {
                console.error('Error exchanging authorization code for access token');
            }
        } catch (error) {
            console.error('Error during token exchange:', error);
        }
    };

    /*  ------------------------------ API Calls ------------------------------  */

    // functions called after the authorization is complete
    const functionsRan = async (accessToken) => {
        getProfile(accessToken);
        getHeartRateTimeSeries(accessToken, '2024-03-28', '1d'); // Adjust the date range as needed
    }

    const APIRequest = async (endpoint, requestHeaders) => {
        const response = await fetch(endpoint, requestHeaders);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            console.error('Error fetching Fitbit data');
        }
    }

    const getProfile = async (accessToken) => {
        const profileEndpoint = 'https://api.fitbit.com/1/user/-/profile.json';
        const profileHeaders = { 
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        };

        setProfile(await APIRequest(profileEndpoint, profileHeaders));

    };

    const getHeartRateTimeSeries = async (accessToken, date, period) => {
        // const timeSeriesEndpoint = `https://api.fitbit.com/1/user/-/activities/heart/date/${date}/${period}.json`;    
        const timeSeriesEndpoint = `https://api.fitbit.com/1/user/-/activities/heart/date/${date}/${period}.json`;    

        const timeSeriesHeaders = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        };

        setHeartrate(await APIRequest(timeSeriesEndpoint, timeSeriesHeaders));
    };


    return (
        <div>
            <h2>
                Hi {profile ? profile.user.fullName : "World"}!
                {heartrate && (
                    <span>
                        On {heartrate['activities-heart'][0]?.dateTime || "a specific date"}, 
                        you burned {heartrate['activities-heart'][0]?.value.heartRateZones[0].caloriesOut || "a certain number of"} calories.
                    </span>
                )}
            </h2>
            <p>{JSON.stringify(profile)}</p>
            <hr />
            <p>{JSON.stringify(heartrate)}</p>
        </div>
    )
};

export default FitbitDataComponent;
