import PropTypes from 'prop-types';
import FeatureCard from './FeatureCard';
const Features = ({features}) => {
    
    
    return (
        <div className="my-10">
            <div className="flex justify-center">
               <div>
                <h1 className="text-4xl font-bold text-center mb-4"><span className="text-amber-400">Our</span> Features</h1>
               <h1 className="text-2xl font-bold text-center">You Have an event to plan and <br /> we have <span className="text-amber-400">the solutions</span></h1>
                <p className='text-6xl text-center mb-6 text-amber-400'>......</p>
               </div>
            </div>

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5'>
                {
                  features?.map(feature => <FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                }
             </div>
        </div>
    );
};
Features.propTypes ={
    features:PropTypes.array
}
export default Features;