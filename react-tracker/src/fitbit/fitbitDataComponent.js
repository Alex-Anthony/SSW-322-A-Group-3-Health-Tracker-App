/*  ------------------------------ API Calls ------------------------------  */

const FitbitDataComponent = ({ accessToken }) => {
    const APIRequest = async (endpoint, requestHeaders) => {
      const response = await fetch(endpoint, requestHeaders);
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.error('Error fetching Fitbit data');
      }
    };
  
    const getProfile = async () => {
      const profileEndpoint = 'https://api.fitbit.com/1/user/-/profile.json';
      const profileHeaders = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      };
  
      return await APIRequest(profileEndpoint, profileHeaders);
    };
  
    const getUID = async () => {
      try {
        const profileData = await getProfile();
        const fitbitUserID = profileData.user?.encodedId;
  
        if (fitbitUserID) {
          console.log('Fitbit User ID:', fitbitUserID);
          return fitbitUserID;
        } else {
          console.error('Fitbit User ID not found in profile data.');
          return null;
        }
      } catch (error) {
        console.error("Error fetching Fitbit profile data: ", error);
        return null;
      }
    };
  
    const getHeartRateTimeSeries = async (date, period) => {
      const timeSeriesEndpoint = `https://api.fitbit.com/1/user/-/activities/heart/date/${date}/${period}.json`;
      const timeSeriesHeaders = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      };
  
      return await APIRequest(timeSeriesEndpoint, timeSeriesHeaders);
    };

    const getBreathRateTimeSeries = async (date) => {
        const breathRateEndpoint = `https://api.fitbit.com/1/user/-/br/date/${date}.json`;
        const breathRateHeaders = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        };
    
        return await APIRequest(breathRateEndpoint, breathRateHeaders);
    };


    return {
      getProfile,
      getUID,
      getHeartRateTimeSeries,
      getBreathRateTimeSeries, 
    };
  };
  
  export default FitbitDataComponent;