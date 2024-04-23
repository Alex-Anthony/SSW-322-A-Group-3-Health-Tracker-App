/*  ------------------------------ API Calls ------------------------------  */
const FitbitDataComponent = ({ accessToken }) => {
  const APIRequest = async (endpoint, requestHeaders) => {
      const response = await fetch(endpoint, requestHeaders);
  
      if (!response.ok) {
          console.error('Error fetching Fitbit data', response.status);
          console.log('Request headers:', requestHeaders.headers);
          console.log('Request body:', requestHeaders.body);
      }
  
      const data = await response.json();
      if (response.ok) {
          console.log(data);
          return data;
      } else {
          throw new Error(`Fitbit API responded with status ${response.status}`);
      }
  };

  const getProfile = async () => {
      const profileEndpoint = 'https://api.fitbit.com/1/user/-/profile.json';
      const profileHeaders = {
          headers: { Authorization: `Bearer ${accessToken}` }
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
          headers: { Authorization: `Bearer ${accessToken}` }
      };
  
      return await APIRequest(timeSeriesEndpoint, timeSeriesHeaders);
  };

  const getBreathRateTimeSeries = async (date) => {
      const breathRateEndpoint = `https://api.fitbit.com/1/user/-/br/date/${date}.json`;
      const breathRateHeaders = {
          headers: { Authorization: `Bearer ${accessToken}` }
      };
  
      return await APIRequest(breathRateEndpoint, breathRateHeaders);
  };

  const getActivityTimeSeries = async (date, period) => {
      const activityTimeSeriesEnd = `https://api.fitbit.com/1/user/-/activities/steps/date/${date}/${period}.json`;
      const activityTimeSeriesHeaders = {
          headers: { Authorization: `Bearer ${accessToken}` }
      };
  
      return await APIRequest(activityTimeSeriesEnd, activityTimeSeriesHeaders);
  };


  const getCardioFitness = async (date) => {
      const getCardioFitnessEndpoint = `https://api.fitbit.com/1/user/-/cardioscore/date/${date}.json`;
      const getCardioFitnessHeaders = {
          headers: { Authorization: `Bearer ${accessToken}` }
      };
  
      return await APIRequest(getCardioFitnessEndpoint, getCardioFitnessHeaders);
  };

  
  const createFoodLog = async (foodDetails) => {
    const foodLogEndpoint = `https://api.fitbit.com/1/user/-/foods/log.json`;
    const foodLogHeaders = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodDetails)
    };

    return await APIRequest(foodLogEndpoint, foodLogHeaders);
  };

  const getFoodUnits = async () => {
    const unitsEndpoint = 'https://api.fitbit.com/1/foods/units.json';
    const unitsHeaders = {
      headers: { Authorization: `Bearer ${accessToken}` }
    };
  
    return await APIRequest(unitsEndpoint, unitsHeaders);
  };
  
  const getSleepLogByDate = async (date) => {
    const sleepLogEndpoint = `https://api.fitbit.com/1.2/user/-/sleep/date/${date}.json`;
    const sleepLogHeaders = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };

    return await APIRequest(sleepLogEndpoint, sleepLogHeaders);
};


  return {
      getProfile,
      getUID,
      getHeartRateTimeSeries,
      getBreathRateTimeSeries,
      getActivityTimeSeries,
      getCardioFitness,
      createFoodLog,
      getFoodUnits,
      getSleepLogByDate
  };
};

export default FitbitDataComponent;