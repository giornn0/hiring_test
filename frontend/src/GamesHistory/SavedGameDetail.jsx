import { formatGameDate } from "../utils/date.format"
import { formatTime } from "../utils/time.format"

const SavedGameDetail = ({ game }) => {
  return (<div
    key={game.id}
    className="bg-gray-800 rounded-lg p-4 border border-purple-500/30 hover:border-purple-500/50 transition-colors"
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-bold text-lg text-white truncate">{game.difdiculty}</h3>
      <span className={`px-2 py-1 text-xs rounded-full ${game.completed
        ? 'bg-green-500/20 text-green-400'
        : 'bg-yellow-500/20 text-yellow-400'
        }`}>
        {game.completed ? 'Completed' : 'Withdraw'}
      </span>
    </div>

    <div className="text-sm text-gray-300 mb-3">
      <p>Date: {formatGameDate(game.gameDate)}</p>
      <p>Time: {formatTime(game.timeTaken)}seconds</p>
    </div>

  </div>)
}
export default SavedGameDetail
