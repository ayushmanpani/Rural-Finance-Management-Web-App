import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Profile {
  profileId: string;
  name: string;
  email: string;
  residenceType: "rural" | "urban";
  annualIncome: number;
  age: number;
  numberOfDependants: number;
}

const ProfilePage = () => {
  const { t } = useLanguage();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isEditing, setIsEditing] = useState(false); // to control whether we're in edit mode
  const [formData, setFormData] = useState<Profile>({
    profileId: '',
    name: '',
    email: '',
    residenceType: "rural",
    annualIncome: 0,
    age: 0,
    numberOfDependants: 0,
  });

  const profileId = localStorage.getItem('profileId');
  console.log(profileId);
  if (!profileId) {
    console.error("Profile ID is missing!");
    window.location.href = '/login';
    return;
  }

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/profile/${profileId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setProfile(data);
        setFormData(data);  // Set initial form data with fetched profile data
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [profileId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:5000/profile/${profileId}`, {  // Correct URL with profileId
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setProfile(data);  // Update profile state
      setIsEditing(false);  // Disable editing mode after saving
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);  // Enable editing mode
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('profile.title')}</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">{t('profile.name')}</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                placeholder={t('profile.name')}
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">{t('profile.email')}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                placeholder={t('profile.email')}
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div>
              <label htmlFor="residenceType" className="sr-only">{t('profile.residenceType')}</label>
              <select
                id="residenceType"
                name="residenceType"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                value={formData.residenceType}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option value="urban">{t('profile.urban')}</option>
                <option value="rural">{t('profile.rural')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="annualIncome" className="sr-only">{t('profile.annualIncome')}</label>
              <input
                id="annualIncome"
                name="annualIncome"
                type="number"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                placeholder={t('profile.annualIncome')}
                value={formData.annualIncome}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div>
              <label htmlFor="age" className="sr-only">{t('profile.age')}</label>
              <input
                id="age"
                name="age"
                type="number"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                placeholder={t('profile.age')}
                value={formData.age}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div>
              <label htmlFor="numberOfDependants" className="sr-only">{t('profile.numberOfDependants')}</label>
              <input
                id="numberOfDependants"
                name="numberOfDependants"
                type="number"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                placeholder={t('profile.numberOfDependants')}
                value={formData.numberOfDependants}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Edit Button */}
          {!isEditing && (
            <div>
              <button
                type="button"
                onClick={handleEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {t('button.edit')}
              </button>
            </div>
          )}

          {/* Save Button */}
          {isEditing && (
            <div>
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                {t('button.save')}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
