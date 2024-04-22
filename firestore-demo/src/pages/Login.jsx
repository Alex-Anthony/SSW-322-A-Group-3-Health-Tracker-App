import workout from "../assests/workout.svg";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect, FormEvent } from "react";
import firebaseConfig from "../backend/firebaseConfig";
import { initializeApp } from "firebase/app";
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential); // demo
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <div className="justify-between">
        <div className="absolute inset-y-0 left-0 right-1/2">
          <img
            src={workout}
            alt="start your fitness journey"
          ></img>
        </div>
        <div className="absolute inset-y-0 right-0 left-1/2 bg-primary">
          <div className="flex justify-center">
            <div className="px-5">
              <div className="hero min-h-screen bg-primary">
                <div className="hero-content flex-col">
                  <div className="text-center w-full max-w-sm">
                    <h1 className="text-5xl font-bold text-primary-content">Login</h1>
                    <p className="py-6 text-primary-content">
                      Enter your credentials or click <Link to={'/register'}>here</Link>
                      to create a new account.
                    </p>
                  </div>
                  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                      <div className="form-control" onSubmit={login}>
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="input input-bordered"
                          required
                        />
                        <label className="label">

                          Forgot password?

                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <Link to={"/user-home"}>
                          <button className="btn btn-primary" type="submit">Login</button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
