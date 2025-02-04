
export function ActorCard({actorImage, actorName, characterName}) {
  return (
    <div className="flex items-center">
        <img className="w-11 h-16 rounded-md" src={actorImage} alt={actorName} />
        <div className="font-medium ml-3 dark:text-white">
            <div className="text-sm">{actorName}</div>
            <div className="text-xs text-gray-500 dark:text-gray-300">{characterName}</div>
        </div>
    </div>
  )
}
