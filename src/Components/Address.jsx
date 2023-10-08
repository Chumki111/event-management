import { GrLocation} from 'react-icons/gr';
import { BsTelephone} from 'react-icons/bs';
import { MdOutlineWatchLater} from 'react-icons/md';
import { BiRectangle} from 'react-icons/bi';

const Address = () => {
    return (
        <div className='my-10 py-7'>
            <div className="flex justify-center items-center">
                  <div className='space-y-6'>
                    <h1 className="text-4xl font-bold text-center">Contact Us</h1>
                    <p className='text-2xl font-medium text-center'>We always here to help you.</p>
                    <p className="text-4xl font-bold text-center mb-7">.....</p>
                    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                    <div className=" w-64 bg-[#FBBF24] shadow-lg p-6 space-y-3 rounded-md hover:bg-slate-50 00gap-3">
                           
                           <div className="flex items-center justify-center ">
                          <div className='text-center space-y-3'>
                          <p className='ml-14'><GrLocation className='text-4xl'></GrLocation></p>
                                <h2 className='text-xl font-bold'>Postal Address</h2>
                                <p className='text-lg font-medium'>Event master</p>
                                <p className='text-lg font-medium'>85, Sholua</p>
                                <p className='text-xl font-semibold'>Rajshahi,On 7265</p>
                          </div>


                           </div>
                        </div>
                    <div className=" w-64 bg-[#FBBF24] shadow-lg p-6 space-y-3 rounded-md hover:bg-slate-50 00gap-3">
                           
                           <div className="flex items-center justify-center ">
                          <div className='text-center space-y-3'>
                          <p className='ml-14'><BsTelephone className='text-4xl'></BsTelephone></p>
                                <h2 className='text-xl font-bold'>Phone & Email</h2>
                                <p className='text-lg font-medium'>Phone : 11-22343-3</p>
                                <p className='text-lg font-medium'>fax :1-23243-43</p>
                                <p className='text-xl font-semibold'>office@event.com</p>
                          </div>


                           </div>
                        </div>
                    <div className=" w-64 bg-[#FBBF24] shadow-lg p-6 space-y-3 rounded-md hover:bg-slate-50 00gap-3">
                           
                           <div className="flex items-center justify-center ">
                          <div className='text-center space-y-3'>
                          <p className='ml-14'><MdOutlineWatchLater className='text-4xl'></MdOutlineWatchLater></p>
                                <h2 className='text-xl font-bold'>Open Hours</h2>
                                <p className='text-lg font-medium'>Monday-Friday</p>
                                <p className='text-lg font-medium'>8.00am-5.00pm</p>
                                <p className='text-xl font-semibold'>weekend close</p>
                          </div>


                           </div>
                        </div>
                    <div className=" w-64 bg-[#FBBF24] shadow-lg p-6 space-y-3 rounded-md hover:bg-slate-50 00gap-3">
                           
                           <div className="flex items-center justify-center ">
                          <div className='text-center space-y-3'>
                          <p className='ml-14'><BiRectangle className='text-4xl'></BiRectangle></p>
                                <h2 className='text-xl font-bold'>Sessions</h2>
                                <p className='text-lg font-medium'>Morning, 8 am-12 noon</p>
                                <p className='text-lg font-medium'>Afternoon, 1 pm-5 pm</p>
                                <p className='text-xl font-semibold'>full day 8 am-5 pm</p>
                          </div>


                           </div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    );
};

export default Address;