import { Link } from "react-router-dom";



const LatestDestinationCard = ({ hotel }) => {
console.log('✌️hotel --->', hotel);
  return (
 
        <Link 
                to={`/detail/${hotel._id}`}

        className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg"
          src={hotel.imageUrls[0]}     
               alt=""
        />
      </div>
      <div className="p-6">
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          {hotel.description}
        </p>
      </div>
    </Link>
    
  );
};

export default LatestDestinationCard;