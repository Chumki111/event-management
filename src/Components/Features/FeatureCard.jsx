import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const FeatureCard = ({ feature }) => {
   
    const { id, image, name, short_description, price } = feature
    return (
        <div className=''>
            <div className="card card-compact  flex flex-col bg-base-100 shadow-xl">
                <figure><img className='h-52 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p className='flex-grow text-base'>{short_description}</p>
                    <p className='text-2xl font-medium'>${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/feature/${id}`}>
                        <button className="btn bg-amber-400 capitalize">Show details <AiOutlineArrowRight className='text-2xl'></AiOutlineArrowRight></button>
                        
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
FeatureCard.propTypes = {
    feature: PropTypes.object
}
export default FeatureCard;