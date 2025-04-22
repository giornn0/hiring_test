
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../constants';
import SavedGameDetail from './SavedGameDetail';

const SavedGamesList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchSavedGames = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/api/memory`);
        setGames(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load saved games');
      } finally {
        setLoading(false);
      }
    };

    fetchSavedGames();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
        <p>{error}</p>
      </div>
    );
  }

  if (games?.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No saved games found</p>
      </div>
    );
  }


  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">Your Saved Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map ?? games.map((game) => (<SavedGameDetail key={game.id} game={game} />))}
      </div>
    </div>
  );
}

export default SavedGamesList;
