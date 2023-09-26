export default function Avatar( userId, username, online ) {
    const colors = ['bg-red-200', 'bg-pink-200',
        'bg-green-200', 'bg-yellow-200', 'bg-teal-200',
        'bg-gray-200'];
    const userIdbase10 = parseInt(userId, 16);
    const colorIndex = userIdbase10 % colors.length;
    const color = colors[colorIndex];
    return (
        <div className={"w-9 h-9 relative rounded-full text-center flex items-center " + color}>
            <div className="text-center w-full opacity-70">{username[0]}</div>
            {online &&(
                <div className="absolute w-3 h-3 bg-green-500 bottom-0 right-0 rounded-full border border-white"></div>
            )}
            {!online &&(
                <div className="absolute w-3 h-3 bg-gray-500 bottom-0 right-0 rounded-full border border-white"></div>
            )}
            
        </div>
    );
}