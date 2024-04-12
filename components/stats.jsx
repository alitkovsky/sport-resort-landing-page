const Stats = () => {
   return (
      <section className="stats mt-[80px] xl:mt-[150px] relative z-20 bg-beige py-[80px] xl:py-[150px]">
         <div className="container mx-auto">
            <div className="grid grid-col-1 xl:grid-col-4 gap-12">
               <div className="stats__item text-center xl:border-r xl:border-accent">
                  <h3 className="h1 font-primary text-accent">12</h3>
                  <p>Years Of Eperiments</p>
               </div>
               <div className="stats__item text-center xl:border-r xl:border-accent">
                  <h3 className="h1 font-primary text-accent">85</h3>
                  <p>Projects Completed</p>
               </div>
               <div className="stats__item text-center xl:border-r xl:border-accent">
                  <h3 className="h1 font-primary text-accent">15</h3>
                  <p>Active Projects</p>
               </div>
               <div className="stats__item text-center xl:border-r xl:border-accent">
                  <h3 className="h1 font-primary text-accent">95</h3>
                  <p>Happy Customers</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Stats;