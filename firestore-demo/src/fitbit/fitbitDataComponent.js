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

  
    const createFoodLog = async (accessToken, foodDetails) => {
        const foodLogEndpoint = `https://api.fitbit.com/1/user/-/foods/log.json`;
        const requestBody = JSON.stringify(foodDetails);
        const contentLength = new TextEncoder().encode(requestBody).length;
        const foodLogHeaders = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Content-Length': contentLength
        },
        body: requestBody
        };

        try {
        const response = await APIRequest(foodLogEndpoint, foodLogHeaders);
        return response;
        } catch (error) {
        throw new Error(`Error creating food log: ${error}`);
        }
    };

    const getFoodLog = async (date) => {
        const foodsLogEndpoint = `https://api.fitbit.com/1/user/-/foods/log/date/${date}.json`;
        const foodsLogHeaders = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };

        return await APIRequest(foodsLogEndpoint, foodsLogHeaders);
    };

    const deleteFoodLog = async (logID) => {
        const foodsLogEndpoint = `https://api.fitbit.com/1/user/-/foods/log/${logID}.json`;
        const foodsLogHeaders = {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${accessToken}` }
        };
    
        return await APIRequest(foodsLogEndpoint, foodsLogHeaders);
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

    const getDailyActivitySummary = async (date) => {
        const dailyActivitySummaryEndpoint = `https://api.fitbit.com/1/user/-/activities/date/${date}.json`;
        const dailyActivitySummaryHeaders = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
    
        return await APIRequest(dailyActivitySummaryEndpoint, dailyActivitySummaryHeaders);
    };

    const getActivityLog = async (date) => {
        const activityLogEndpoint = `https://api.fitbit.com/1/user/-/activities/list.json?afterDate=${date}&sort=asc&offset=0&limit=10`;
        const activityLogHeaders = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
    
        return await APIRequest(activityLogEndpoint, activityLogHeaders);
    };

    const createActivityLog = async (accessToken, activityDetails) => {
        const activityLogEndpoint = `https://api.fitbit.com/1/user/-/activities.json`;
        const requestBody = JSON.stringify(activityDetails);
        const contentLength = new TextEncoder().encode(requestBody).length;
        const activityLogHeaders = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Content-Length': contentLength
        },
        body: requestBody
        };
    
        try {
        const response = await APIRequest(activityLogEndpoint, activityLogHeaders);
        return response;
        } catch (error) {
        throw new Error(`Error creating activity log: ${error}`);
        }
    };

    const deleteActivityLog = async (logID) => {
        const activityLogEndpoint = `https://api.fitbit.com/1/user/-/activities/${logID}.json`;
        const activityLogHeaders = {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${accessToken}` }
        };
    
        return await APIRequest(activityLogEndpoint, activityLogHeaders);
    };

    const createActivityGoal = async (accessToken, activityGoals) => {
        const activityGoalsEndpoint = `https://api.fitbit.com/1/user/-/activities/goals.json`;
        const requestBody = JSON.stringify(activityGoals);
        const contentLength = new TextEncoder().encode(requestBody).length;
        const activityGoalsHeaders = {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Content-Length': contentLength
            },
            body: requestBody
        };
    
        try {
            const response = await APIRequest(activityGoalsEndpoint, activityGoalsHeaders);
            return response;
        } catch (error) {
            throw new Error(`Error creating activity goal: ${error}`);
        }
    };

    const getActivityGoals = async (period) => {
        const activityGoalsEndpoint = `https://api.fitbit.com/1/user/-/activities/goals/${period}.json`;
        const activityGoalsHeaders = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
    
        return await APIRequest(activityGoalsEndpoint, activityGoalsHeaders);
    };

    const createWaterLog = async (accessToken, waterDetails) => {
        const waterLogEndpoint = `https://api.fitbit.com/1/user/-/foods/log/water.json`;
        const requestBody = JSON.stringify(waterDetails);
        const contentLength = new TextEncoder().encode(requestBody).length;
        const waterLogHeaders = {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Content-Length': contentLength
            },
            body: requestBody
        };
    
        try {
            const response = await APIRequest(waterLogEndpoint, waterLogHeaders);
            return response;
        } catch (error) {
            throw new Error(`Error creating water log: ${error}`);
        }
        };

    const getWaterLog = async (date) => {
        const waterLogEndpoint = `https://api.fitbit.com/1/user/-/foods/log/water/date/${date}.json`;
        const waterLogHeaders = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
    
        return await APIRequest(waterLogEndpoint, waterLogHeaders);
    };

    const deleteWaterLog = async (logID) => {
        const waterLogEndpoint = `https://api.fitbit.com/1/user/-/foods/log/water/${logID}.json`;
        const waterLogHeaders = {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${accessToken}` }
        };
    
        return await APIRequest(waterLogEndpoint, waterLogHeaders);
    };

    const createSleepGoal = async (accessToken, sleepDetails) => {
        const sleepGoalEndpoint = `https://api.fitbit.com/1.2/user/-/sleep/goal.json`;
        const requestBody = JSON.stringify(sleepDetails);
        const contentLength = new TextEncoder().encode(requestBody).length;
        const sleepGoalHeaders = {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Content-Length': contentLength
            },
            body: requestBody
        }; 

        try {
            const response = await APIRequest(sleepGoalEndpoint, sleepGoalHeaders);
            return response;
            } catch (error) {
            throw new Error(`Error creating sleep goal: ${error}`);
            }
    };

    const getSleepGoals = async () => {
        const sleepGoalsEndpoint = `https://api.fitbit.com/1/user/-/sleep/goal.json`;
        const sleepGoalsHeaders = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
    
        return await APIRequest(sleepGoalsEndpoint, sleepGoalsHeaders);
    };

    const updateProfile = async (accessToken, userDetails) => {
        const profileDetailsEndpoint = `https://api.fitbit.com/1/user/-/profile.json`;
        const requestBody = JSON.stringify(userDetails);
        const contentLength = new TextEncoder().encode(requestBody).length;
        const profileDetailsHeaders = {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Content-Length': contentLength
            },
            body: requestBody
        }; 

        try {
            const response = await APIRequest(profileDetailsEndpoint, profileDetailsHeaders);
            return response;
            } catch (error) {
            throw new Error(`Error updating profile: ${error}`);
            }
    };
  


  return {
      getProfile,
      getUID,
      getHeartRateTimeSeries,
      getBreathRateTimeSeries,
      getActivityTimeSeries,
      getCardioFitness,
      createFoodLog,
      getFoodLog,
      getFoodUnits,
      deleteFoodLog,
      getSleepLogByDate,
      getDailyActivitySummary,
      getActivityLog,
      createActivityLog,
      deleteActivityLog,
      createActivityGoal,
      getActivityGoals,
      createWaterLog,
      getWaterLog,
      deleteWaterLog,
      createSleepGoal,
      getSleepGoals,
      updateProfile
  };
};

export default FitbitDataComponent;