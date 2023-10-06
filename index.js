async function postJSON(data) {
    try {
      const response = await fetch("https://api.noroff.dev/api/v1", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const data = { username: "https://api.noroff.dev/api/v1" };
  postJSON(data);