import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import dbHandler from '../backend/dbHandler';
import FitbitDataComponent from '../fitbit/fitbitDataComponent';
import { useFitbitAuth } from '../fitbit/fitbitAuth';

function BackendDemo() {
    const [fitbitUID, setFitbitUID] = useState("");
    const [firebaseUID, setFirebaseUID] = useState("");
    const [allData, setAllData] = useState("");
    const [UIDData, setUIDData] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [arg1, setArg1] = useState('');
    const [arg2, setArg2] = useState('');
    
    const [fullName, setFullName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatar640, setAvatar640] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [isCoach, setIsCoach] = useState('');
    
    const [activityTimeSeries, setActivityTimeSeries] = useState([]);
    
    const [vo2Max, setVo2Max] = useState([]);

    const [sleepDate, setSleepDate] = useState('');
    const [sleepData, setSleepData] = useState(null);

    const [foodId, setFoodId] = useState('');
    const [foodName, setFoodName] = useState('');
    const [mealTypeId, setMealTypeId] = useState('');
    const [unitId, setUnitId] = useState('');
    const [amount, setAmount] = useState('');
    const [foodDate, setFoodDate] = useState('');
    const [favorite, setFavorite] = useState(false);

    const { getAllData, getDataByDocID, addData } = dbHandler({ collectionName: "users/" });
    const accessToken = useFitbitAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        addData(firebaseUID, { [arg1]: arg2 })
            .then(() => {
                getAllData().then((data) => setAllData(data));
                getDataByDocID(firebaseUID).then((data) => setUIDData(data));
            })
            .catch((error) => {
                console.error('Error adding data:', error);
            });
    }

    useEffect(() => {
        const names = fullName.trim().split(' ');
        if (names.length >= 2) {
            setFirstName(names[0]);
            setLastName(names[names.length - 1]);
        } else if (names.length === 1) {
            setFirstName(names[0]);
            setLastName('');
        } else {
            setFirstName('');
            setLastName('');
        }
    }, [fullName]);


    useEffect(() => {
        if (accessToken) {
            const fetchData = async () => {
                const { getProfile, getUID, getHeartRateTimeSeries, getActivityTimeSeries, getCardioFitness } = FitbitDataComponent({ accessToken });

                try {
                    const auth = getAuth();
                    onAuthStateChanged(auth, async (user) => {
                        if (user) {
                            setUserEmail(user.email);
                            setFirebaseUID(user.uid);

                            const FBUID = await getUID();
                            setFitbitUID(FBUID);

                            const profileData = await getProfile();
                            await addData(FBUID, profileData);
                            await addData(user.uid, profileData);

                            const heartRateData = await getHeartRateTimeSeries('today', '1d');
                            const activityData = await getActivityTimeSeries('today', '1d');
                            const cardioFitnessData = await getCardioFitness('today');

                            await addData(user.uid, heartRateData);
                            await addData(user.uid, activityData);
                            await addData(user.uid, cardioFitnessData);

                            setActivityTimeSeries(activityData);
                            setVo2Max(cardioFitnessData.cardioScore);

                            getDataByDocID(user.uid).then((data) => {
                                setUIDData(data);
                            });

                            getAllData().then((data) => {
                                setAllData(data);

                                // Assuming data[0] contains the relevant user data
                                const userData = data[0].user;
                                setGender(userData?.gender);
                                setWeight(userData?.weight);
                                setFullName(userData?.fullName);
                                setDateOfBirth(userData?.dateOfBirth);
                                setHeight(userData?.height);
                                setAvatar(userData?.avatar);
                                setAvatar640(userData?.avatar640);
                                setDisplayName(userData?.displayName);
                                setIsCoach(userData?.isCoach);
                            });
                        }
                    });

                } catch (error) {
                    console.error('Error in fetching data:', error);
                }
            };

            fetchData();
        }
    }, [accessToken]);

    const handleProfileUpdateSubmit = async (e) => {
        e.preventDefault();
        const updateProfile = FitbitDataComponent({ accessToken });
    
        const userDetails = {
          gender: gender,
          weight: weight,
          fullName: fullName,
          dob: dateOfBirth,
          height: height,
          //avatar: avatar,
          displayName: displayName,
          coach: isCoach
        };
    
        try {
          const response = await updateProfile(userDetails);
          console.log('Update profile:', response);
          alert("Profile successfully updated!");
        } catch (error) {
          console.error('Error updating profile:', error);
          alert("Failed to update profile. Check the console for more details.");
        }
      };

    const handleFoodLogSubmit = async (e) => {
        e.preventDefault();
        const createFoodLog = FitbitDataComponent({ accessToken });
    
        const foodDetails = {
          foodId: foodId || undefined,
          foodName: foodName || undefined,
          mealTypeId: parseInt(mealTypeId),
          unitId: parseInt(unitId),
          amount: parseFloat(amount),
          date: foodDate,
          favorite: favorite
        };
    
        try {
          const response = await createFoodLog(foodDetails);
          console.log('Food logged:', response);
          alert("Food successfully logged!");
        } catch (error) {
          console.error('Error logging food:', error);
          alert("Failed to log food. Check the console for more details.");
        }
      };

    const [foodUnits, setFoodUnits] = useState([]);

    useEffect(() => {
    const loadFoodUnits = async () => {
        const units = await FitbitDataComponent({ accessToken }).getFoodUnits();
        setFoodUnits(units);
    };

    if (accessToken) {
        loadFoodUnits();
    }
    }, [accessToken]);

    const handleFetchSleepData = async () => {
        if (!sleepDate) {
            alert('Please enter a date to fetch sleep data.');
            return;
        }
        const getSleepLogByDate = FitbitDataComponent({ accessToken });
        try {
            const data = await getSleepLogByDate(sleepDate);
            setSleepData(data);
            console.log('Sleep data:', data);
        } catch (error) {
            console.error('Error fetching sleep data:', error);
            alert('Failed to fetch sleep data. Check the console for more details.');
        }
    };


    return (
        <div>
            <h1>Backend Demo</h1>
            <p><b>Firebase Auth UID: </b> {firebaseUID}</p>
            <p><b>FitBit UID: </b> {fitbitUID}</p>
            <p><b>User Email: </b> {userEmail}</p>
            <p><Link to="/login">Log in</Link> <Link to="/register">Register</Link></p>
            <hr />
            <hr />
            <p>Write Data to doc with FireStore UID:
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" placeholder="field name" value={arg1} onChange={(e) => setArg1(e.target.value)} />
                    </label>
                    <label>
                        <input type="text" placeholder="field value" value={arg2} onChange={(e) => setArg2(e.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </p>
            <hr />

            <b>All data from collection: </b><pre>{JSON.stringify(allData, null, 2)}</pre>
            <hr />
            <b>Data From Firestore UID {"(should be your data)"}: </b><pre>{JSON.stringify(UIDData, null, 2)}</pre>
            <b>Welcome </b> {fullName}<br />
            <b>FirstName: </b> {firstName}<br />
            <b>LastName: </b> {lastName}<br />

            <b>Your gender is:</b> {gender}<br />
            <b>Your date of birth is:</b> {dateOfBirth}<br/>
            <b>Your weight is:</b> {weight}<br />
            <b>Your height is:</b> {height} cm<br />
            <b>Email: </b> {userEmail}<br />
            <b>Avatar: </b> {avatar}<br />
            <b>Avatar640: </b> {avatar640}<br />
            <b>Display Name: </b> {displayName}<br />
            <b>VO2 Max: </b> {vo2Max && vo2Max.length > 0 ? vo2Max[0].value.vo2Max : 'No data available'}<br />

            <h2>Update Profile</h2>
            <form onSubmit={handleProfileUpdateSubmit}>
                <input type="text" placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} />
                <input type="text" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)} />
                <input type="text" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
                <input type="text" placeholder="Date of Birth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
                <input type="text" placeholder="Height" value={height} onChange={e => setHeight(e.target.value)} />
                <input type="text" placeholder="Display Name" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                <label>
                Is Coach:
                <input type="checkbox" checked={isCoach} onChange={e => setIsCoach(e.target.checked)} />
                </label>
                <button type="submit">Log Food</button>
            </form>
            
            <h2>Fetch Sleep Data</h2>
            <input
                type="date"
                value={sleepDate}
                onChange={(e) => setSleepDate(e.target.value)}
                placeholder="Select date for sleep data"
            />
            <button onClick={handleFetchSleepData}>Fetch Sleep Data</button>

            {sleepData && (
                <div>
                    <h3>Sleep Data for {sleepDate}</h3>
                    <pre>{JSON.stringify(sleepData, null, 2)}</pre>
                </div>
            )}


            <select value={unitId} onChange={e => setUnitId(e.target.value)}>
            {foodUnits.map(unit => (
                <option key={unit.id} value={unit.id}>{unit.name}</option>
            ))}
            </select>

            <h2>Log Food</h2>
            <form onSubmit={handleFoodLogSubmit}>
                <input type="text" placeholder="Food ID" value={foodId} onChange={e => setFoodId(e.target.value)} />
                <input type="text" placeholder="Food Name" value={foodName} onChange={e => setFoodName(e.target.value)} />
                <input type="text" placeholder="Meal Type ID" value={mealTypeId} onChange={e => setMealTypeId(e.target.value)} />
                <input type="text" placeholder="Unit ID" value={unitId} onChange={e => setUnitId(e.target.value)} />
                <input type="text" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                <input type="date" placeholder="Date" value={foodDate} onChange={e => setFoodDate(e.target.value)} />
                <label>
                Favorite:
                <input type="checkbox" checked={favorite} onChange={e => setFavorite(e.target.checked)} />
                </label>
                <button type="submit">Log Food</button>
            </form>
        
        </div>
    );
}

export default BackendDemo;