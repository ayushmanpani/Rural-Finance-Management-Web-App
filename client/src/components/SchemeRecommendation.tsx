import { useEffect, useState } from 'react';
import axios from 'axios';

interface Scheme {
  name: string;
  description: string;
}

const SchemeRecommendations = () => {
  const [userData, setUserData] = useState<any>(null); // Store user data
  const [schemes, setSchemes] = useState<Scheme[]>([]); // Store recommended schemes
  const profileId = localStorage.getItem('profileId');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/${profileId}`);
        setUserData(response.data);
        recommendSchemes(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [profileId]);

  // Recommend schemes based on user data
  const recommendSchemes = (userData: any) => {
    const recommended: Scheme[] = [];
    
    // Logic to recommend schemes based on the user's data
    if (userData.age > 60) {
      recommended.push({ name: 'Senior Citizens Welfare Scheme', description: 'Scheme for senior citizens.' });
    }

    if (userData.residentType === 'Urban') {
      recommended.push({ name: 'Urban Development Scheme', description: 'Scheme for urban residents.' });
    } else if (userData.residentType === 'Rural') {
      recommended.push({ name: 'Rural Development Scheme', description: 'Scheme for rural residents.' });
    }

    setSchemes(recommended);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Recommended Government Schemes</h1>
      {userData ? (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Resident Type:</strong> {userData.residentType}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Schemes for You:</h2>
        {schemes.length > 0 ? (
          <ul>
            {schemes.map((scheme, index) => (
              <li key={index} className="mt-2">
                <h3 className="font-bold">{scheme.name}</h3>
                <p>{scheme.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No schemes available for your profile.</p>
        )}
      </div>
    </div>
  );
};

export default SchemeRecommendations;
