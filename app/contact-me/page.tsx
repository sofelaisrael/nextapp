// import Comments from "./comments/Comments";
"use client"
import Comments from "@/components/comments/Comments";
import { useEffect, useState } from "react";

const App = () => {

  useEffect(() => {
  const visitorName = localStorage.getItem("visitorName");
    const visitorId = localStorage.getItem("visitorId");

    if (!visitorName || !visitorId) {
      const uniqueId = Math.random().toString(36).substr(2, 9)
      console.log(uniqueId);
      

      // const d = `user-${Date.now()}`; // Generate a unique ID
      const name = prompt("Please enter your name:") || "Anonymous" + uniqueId; // Default to "Anonymous"
      localStorage.setItem("visitorName", name);
      localStorage.setItem("visitorId", uniqueId);
    }
  }, []);

  const currentUserId = localStorage.getItem("visitorId") || "";
  
    const [user, setUser] = useState<string>("")
    const userid = localStorage.getItem("id")
    // setUser(userid)
    // console.log(user);
  
  return (
    <div>
      <h1>Hello Monsterlessons</h1>
      <Comments
        commentsUrl="http://localhost:3000/comments" // Replace with a real API URL in production
        currentUserId={currentUserId} // Simulated user ID
      />
    </div>
  );
};

export default App;
