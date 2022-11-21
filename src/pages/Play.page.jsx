import React from "react";
import DefaultLayoutHoc from '../Layout (Hoc)/Default.layout';

//Components

import Poster from '../components/Poster/Poster.Component';
import PlayFilters from '../components/PlayFilters/PlayFilters.Component';

const PlayPage = () => {
  return <>

  <div className="container mx-auto px-4 my-10">
    <div className="w-full flex  flex-col-reverse lg:flex-row-reverse gap-4">
      <div className="lg:w-3/4 p-4 bg-white rounded">
        <h2 className="text-2xl font-bold mb-4">Plays in NCR Delhi</h2>
        <div className="flex flex-wrap">

        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
            <Poster 
            isPlay={true}
            src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-royal-enfield-presents-sneakinout-2-0-delhi-0-2022-10-20-t-11-40-12.jpg' 
            title='Royal Enfield presents SneakinOut 2.0 - Delhi' 
            subtitle='Exhibitions | Hindi, English | 21yrs + | 7hrs' 
            />
          </div>

          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
            <Poster 
            isPlay={true}
            src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-royal-enfield-presents-sneakinout-2-0-delhi-0-2022-10-20-t-11-40-12.jpg' 
            title='Royal Enfield presents SneakinOut 2.0 - Delhi' 
            subtitle='Exhibitions | Hindi, English | 21yrs + | 7hrs' 
            />
          </div>

          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
            <Poster 
            isPlay={true}
            src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-royal-enfield-presents-sneakinout-2-0-delhi-0-2022-10-20-t-11-40-12.jpg' 
            title='Royal Enfield presents SneakinOut 2.0 - Delhi' 
            subtitle='Exhibitions | Hindi, English | 21yrs + | 7hrs' 
            />
          </div>


          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
            <Poster 
            isPlay={true}
            src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-royal-enfield-presents-sneakinout-2-0-delhi-0-2022-10-20-t-11-40-12.jpg' 
            title='Royal Enfield presents SneakinOut 2.0 - Delhi' 
            subtitle='Exhibitions | Hindi, English | 21yrs + | 7hrs' 
            />
          </div>


          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
            <Poster 
            isPlay={true}
            src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-royal-enfield-presents-sneakinout-2-0-delhi-0-2022-10-20-t-11-40-12.jpg' 
            title='Royal Enfield presents SneakinOut 2.0 - Delhi' 
            subtitle='Exhibitions | Hindi, English | 21yrs + | 7hrs' 
            />
          </div>


          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
            <Poster 
            isPlay={true}
            src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-royal-enfield-presents-sneakinout-2-0-delhi-0-2022-10-20-t-11-40-12.jpg' 
            title='Royal Enfield presents SneakinOut 2.0 - Delhi' 
            subtitle='Exhibitions | Hindi, English | 21yrs + | 7hrs' 
            />
          </div>


          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
            <Poster 
            isPlay={true}
            src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-royal-enfield-presents-sneakinout-2-0-delhi-0-2022-10-20-t-11-40-12.jpg' 
            title='Royal Enfield presents SneakinOut 2.0 - Delhi' 
            subtitle='Exhibitions | Hindi, English | 21yrs + | 7hrs' 
            />
          </div>

          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
            <Poster 
            isPlay={true}
            src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-royal-enfield-presents-sneakinout-2-0-delhi-0-2022-10-20-t-11-40-12.jpg' 
            title='Royal Enfield presents SneakinOut 2.0 - Delhi' 
            subtitle='Exhibitions | Hindi, English | 21yrs + | 7hrs' 
            />
          </div>




        </div>
      </div>

      <div className='lg:w-1/4 p-4 bg-white rounded'>
        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
        <div>
          <PlayFilters
          title="Date"
          tags={["Today", "Tomorrow", "This Weekend"]}
          />
        </div>
        <div>
          <PlayFilters
          title="Language"
          tags={["English", "Hindi", "Tamil"]}
          />
        </div>
      </div>
    </div>

{/* //For using Map */}

    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d28042.562617766904!2d77.220047!3d28.53009!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMxJzQ4LjMiTiA3N8KwMTMnMTIuMiJF!5e0!3m2!1sen!2sus!4v1668986583545!5m2!1sen!2sus" 
    width="600"
     height="450" 
     style={{ border: "0" }} 
     allowFullScreen="" 
     loading="lazy" 
     referrerPolicy="no-referrer-when-downgrade">
     title="play loacation"

     </iframe>
  </div>
  
  </>;
};

export default DefaultLayoutHoc(PlayPage);