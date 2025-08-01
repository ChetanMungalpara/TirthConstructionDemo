import React from 'react';

const stats = [
  { value: '100+', label: 'Completed Projects' },
  { value: '97%', label: 'Happy Customers' },
  { value: '90%', label: 'On-Time Delivery' },
  { value: '86', label: 'Years of Combine-Experience' },
];

const Count = () => {
  return (
    <section className="bg-white py-12 w-full">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-auto text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="[font-family:'Roboto-Light',Helvetica] font-light text-black text-[56px] text-center leading-[normal] whitespace-nowrap">{stat.value}</h3>
              <p className="[font-family:'Albert_Sans-Regular',Helvetica] font-normal text-black text-[17px] text-center leading-[20.4px] whitespace-nowrap">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Count;