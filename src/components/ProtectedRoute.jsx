import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("Auth state changed:", currentUser); // Debugging
        if (currentUser) {
          if (currentUser.email === "kjarner@me.com") {
            console.log("Admin user detected");
            setUser(currentUser);
          } else {
            console.log("User is not admin");
            setUser(null);
          }
        } else {
          console.log("No user is logged in");
          setUser(null);
        }
        setIsLoading(false);
      });
  
      return () => unsubscribe();
    }, []);
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (!user) {
      console.log("Redirecting to /admin");
      return <Navigate to="/admin" replace />;
    }
  
    return children;
  };
  

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
