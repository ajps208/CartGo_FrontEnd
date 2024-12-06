import React from 'react';

type Props = {};

export default function RoundSection({}: Props) {
  return (
    <div className="flex justify-center">
     <div className="flex flex-wrap justify-normal w-11/12">
          <div className="flex flex-col items-center m-4 ">
              <div className="bg-red-500 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white ">
                RoundSection
              </div>
              <p>Kids</p>
          </div>
           <div className="flex flex-col items-center m-4 ">
              <div className="bg-red-500 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white ">
                RoundSection
              </div>
              <p>Kids</p>
          </div>
     </div>
    </div>
  );
}
