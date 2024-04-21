import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import { Link } from "react-router-dom";
import dbHandler from '../backend/dbHandler';
import FitbitDataComponent from '../fitbit/fitbitDataComponent';
import { useFitbitAuth } from '../fitbit/fitbitAuth'

    const [fitbitUID, setFitbitUID] = useState("");
    const [firebaseUID, setFirebaseUID] = useState("");
    const [allData, setAllData] = useState("");
    const [UIDData, setUIDData] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const [arg1, setArg1] = useState('');
    const [arg2, setArg2] = useState('');

    // ADDED
    // New state variables to store gender and heart rate
    const [fullName, setfullName] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setdateOfBirth] = useState('');
    const [weight, setWeight] = useState('');



    // instance of dbHandler for the collections "users"
    const { getAllData, getDataByDocID, addData } = dbHandler({ collectionName: "users/" });

    // Use the useFitbitAuth hook to get the access token
    const accessToken = useFitbitAuth();

    useEffect(() => {


        // Check if accessToken is available and fetch user data only if it's available
        if (accessToken) {
            const fetchData = async () => {
                const { getProfile, getUID, getHeartRateTimeSeries } = FitbitDataComponent({ accessToken });

                try {
                    const auth = getAuth();
                    onAuthStateChanged(auth, async (user) => {
                        if (user) {
                            // set states with Firebase user email and UID
                            setUserEmail(user.email);
                            setFirebaseUID(user.uid);

                            // set FitBit UID state
                            const FBUID = await getUID();
                            setFitbitUID(FBUID);

                            const sampleData = {
                                heartrate: 123,
                                test: "test string",
                            };

                            // set doc ID with Fitbit UID to getProfile and sampleData
                            await addData(FBUID, await getProfile());
                            await addData(FBUID, sampleData);

                            // THIS CODE HERE IS TO MAKE HTTPS REQUESTS NOT TO EXTRACT VALUES FROM THE REQUESTS
                            // set doc ID with Firebase UID to getProfile
                            await addData(user.uid, await getProfile());
                            await addData(user.uid, await getHeartRateTimeSeries('2024-03-29', '1d'));


                            getDataByDocID(user.uid).then((data) => {
                                console.log('Data by UID:', data);
                                setUIDData(data);
                            });

                            getAllData().then((data) => {
                                console.log('All data from collection:', data);
                                setAllData(data);
                            });
                        }
                    });

                } catch (error) {
                    console.error('Error in fetching data:', error);
                }
            };

            fetchData();
        }


        // ADDED
        // THIS CODE IS MEANT TO EXTRACT DATA FROM THE REQUESTS
        getAllData().then((data) => {
            console.log('All data from collection:', data);
            setAllData(data);

            // Assuming data[0] contains the relevant user data what
            const userData = data[0].user;

            // Update state with gender and heart rate
            setGender(userData?.gender);
            setWeight(userData?.weight);
            setfullName(userData?.fullName);
            setdateOfBirth(userData?.dateOfBirth);

        });
    }, [accessToken]);


    // submit button for write data fields
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

export {fullName, dateOfBirth, gender, weight, handleSubmit}