import { useState } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Indikerer om login er i gang
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Successfully signed in!", userCredential.user);
      navigate("/admin/dashboard"); // Navigér til dashboard
    } catch (err) {
      console.error("Login failed:", err.message);
      alert("Login failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const checkLogIn = () => {
    console.log("Current User:", auth.currentUser); // Debugging af login-status
  };

  return (
    <div className="max-w-md mx-auto mt-20 mb-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Login</h1>

      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={checkLogIn}
          className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Check Log In
        </button>
        <button
          onClick={signIn}
          disabled={loading}
          className={`bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logger ind..." : "Log ind"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
