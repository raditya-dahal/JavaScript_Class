import { useState, useEffect } from "react";
import { fetchData } from "./lib/fetchData";

export default function Home() {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      // fetch media from JSON or API
      const media = await fetchData("test.json"); // replace with API if needed

      // add username to each media item
      const mediaWithUsername = media.map(item => ({
        ...item,
        username: "binaya_maharjan"
      }));

      setMediaArray(mediaWithUsername);
    } catch (err) {
      console.error("Error fetching media:", err);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <div>
      <h1>Media Items</h1>
      {mediaArray.map(item => (
        <div key={item.media_id} style={{ marginBottom: "1rem" }}>
          <p><strong>Title:</strong> {item.title}</p>
          <p><strong>Owner:</strong> {item.username}</p>
        </div>
      ))}
    </div>
  );
}
