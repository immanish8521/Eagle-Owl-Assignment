import React from 'react';
import InfoCircel from './infoCircel';


export const InfoCardWithCircle = ({ title, recipies }) => {
	return (
		<div className="bg-white h-62 border rounded">
                  <div className=" bg-gray-200 px-2 py-3 text-center font-medium text-md">
                        <p>{title}</p>
                  </div>
                  <div className="flex justify-between">
                        {recipies?.map(recipie => {
                 
                              return (
                                    <div className="flex justify-between mx-auto">
                                          <InfoCircel recipie={recipie}/>
                                    </div>
                              )
                        })}
                  
                  
            </div>
          

		</div>
	);
};


export const InfoCardWithArrow = ({ title, recipies }) => {
	return (
		<div className="bg-white h-60 border rounded mx-auto">
                  <div className=" bg-gray-200 px-2 py-3 text-center font-medium text-md">
                        <p>{title}</p>
                  </div>
                  <div className="flex justify-between">
                    
                        {recipies?.map(recipie => {
                              return (
                                    <div className="mx-6 my-2">
                                          <p>{recipie.name}</p>
                                          <p className="pt-4">{recipie.fluctuation}!</p>
                                    </div>
                              )
                        })}
                         
                 </div>
            </div>
          

		
	);
};

