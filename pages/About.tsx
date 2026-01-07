
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-black uppercase tracking-widest rounded-full">
              Our Roots Run Deep
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-text-main dark:text-white leading-[0.9] tracking-tighter italic uppercase">
              Born in the <br /> <span className="text-primary not-italic">Florida Sun.</span>
            </h1>
            <p className="text-xl text-text-muted dark:text-gray-300 font-medium leading-relaxed">
              Started as a two-man operation with a push mower and a dream, The Grass Guy has grown into Clearwater's most trusted name in high-performance lawn care. We don't just mow; we maintain the standard for neighborhood excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4">
               <img src="https://picsum.photos/seed/about1/600/800" alt="Work" className="rounded-3xl shadow-xl hover:-rotate-2 transition-transform" />
               <div className="bg-primary p-6 rounded-3xl text-center">
                 <p className="text-3xl font-black text-background-dark">12+</p>
                 <p className="text-[10px] font-bold text-background-dark/70 uppercase tracking-widest">Years Experience</p>
               </div>
             </div>
             <div className="space-y-4 pt-12">
               <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-3xl text-center">
                 <p className="text-3xl font-black text-primary">100%</p>
                 <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Neighbor Approved</p>
               </div>
               <img src="https://picsum.photos/seed/about2/600/800" alt="Work" className="rounded-3xl shadow-xl hover:rotate-2 transition-transform" />
             </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-[4rem] p-12 lg:p-24 mb-32">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: 'INTEGRITY', text: 'We show up when we say we will. We charge what we quoted. No hidden fees, no games.' },
                { title: 'EXPERTISE', text: 'Every technician is trained in soil science and Florida-specific turf management.' },
                { title: 'QUALITY', text: 'We triple-check every edge, every trim, and every square foot before we leave.' },
              ].map(val => (
                <div key={val.title}>
                  <h3 className="text-3xl font-black italic text-primary uppercase tracking-tighter mb-4">{val.title}</h3>
                  <p className="text-text-muted dark:text-gray-400 font-medium leading-relaxed">{val.text}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-32">
           <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Meet the Pros</h2>
           <h3 className="text-4xl sm:text-6xl font-black tracking-tight text-text-main dark:text-white mb-20 uppercase">The Crew Behind the Green.</h3>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Marcus G.', role: 'Chief of Turf', img: 'https://picsum.photos/seed/team1/400/500' },
                { name: 'Sarah L.', role: 'Scheduling Lead', img: 'https://picsum.photos/seed/team2/400/500' },
                { name: 'David K.', role: 'Soil Specialist', img: 'https://picsum.photos/seed/team3/400/500' },
                { name: 'Chris T.', role: 'Senior Tech', img: 'https://picsum.photos/seed/team4/400/500' },
              ].map(person => (
                <div key={person.name} className="group cursor-pointer">
                   <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/5]">
                     <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                   <h4 className="text-xl font-black dark:text-white uppercase italic tracking-tighter">{person.name}</h4>
                   <p className="text-xs font-black text-primary uppercase tracking-widest mt-1">{person.role}</p>
                </div>
              ))}
           </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-24 mb-24">
          <div className="text-center mb-16">
             <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Common Questions</h2>
             <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-text-main dark:text-white uppercase">Good to Know.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { q: "Do I need to be home?", a: "Nope! Just ensure your gates are unlocked. We'll send a text when we're done." },
              { q: "Is it pet safe?", a: "Absolutely. We use eco-conscious products. We suggest waiting 1 hour after treatment before playtime." },
              { q: "Rainy day policy?", a: "If Florida weather acts up, we push your schedule to the next dry day. You'll get an automatic update." }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined font-bold">question_mark</span>
                </div>
                <h4 className="text-xl font-black italic dark:text-white mb-4 uppercase tracking-tight">{faq.q}</h4>
                <p className="text-text-muted dark:text-gray-400 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Policies Section */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-[3rem] p-8 sm:p-12 lg:p-20">
          <div className="mb-16">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Service Agreement</h2>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-text-main dark:text-white uppercase">Terms & Policies</h3>
            <p className="text-text-muted mt-4 max-w-2xl font-medium">Additional information for the best lawn service you can get.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
            
            {/* Scheduling */}
            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase italic dark:text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">calendar_month</span> Scheduling
              </h4>
              <ul className="space-y-4 text-sm font-medium text-text-muted dark:text-gray-400 list-decimal pl-4 marker:font-black marker:text-primary">
                <li>I run a 7 day rotation, meaning your lawn will be mowed the same day each week or every other week for bi-weekly schedules.</li>
                <li>Special requests/changes must be agreed upon prior to your service day. If you call on the day of service and I have already passed your area, I cannot backtrack to complete your request. It will be done on the next service week.</li>
                <li>Switching from a weekly to bi-weekly schedule will incur an extra charge to cover the added time and work as necessary.</li>
                <li>If you wish to restart services after having withdrawn for an extended period of time, there may be an extra charge to return your lawn to proper maintenance condition. An estimate for these charges will be provided at your request.</li>
                <li>If we endure inclement weather during the week, my schedule will run ½ to 1 day behind. I will continue to work until all possible yards are serviced. (I do NOT work on Sunday). Those that are not serviced will be rescheduled for your regular day the following week.</li>
                <li>If after a heavy rain, you think that your yard is too wet to cut, please notify me.</li>
                <li>I observe all national holidays. Yards will be serviced a day earlier or later these weeks.</li>
              </ul>
            </div>

            {/* Payment & Financials */}
            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase italic dark:text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">payments</span> Financial Policy
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-black text-xs uppercase tracking-widest mb-2 dark:text-white">Payment</h5>
                  <ul className="space-y-2 text-sm font-medium text-text-muted dark:text-gray-400 list-disc pl-4">
                    <li>Invoices are sent out at the end of each month and payment is due upon receipt.</li>
                    <li>All accounts over 30 days will begin accruing a $25.00 per month late charge fee.</li>
                    <li>Accounts over 30 days receive a notification letter. At 45 days delinquent, service will be discontinued until paid in full. Service resumption requires a credit card on file or prepayment.</li>
                    <li>If payment is not received within 60 days, a mechanical lien will be placed on the property.</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-black text-xs uppercase tracking-widest mb-2 dark:text-white">Returned Checks</h5>
                  <ul className="space-y-2 text-sm font-medium text-text-muted dark:text-gray-400 list-disc pl-4">
                    <li>Returned checks incur a $35.00 fee. You will receive a courtesy call and notification letter.</li>
                    <li>If unpaid within 10 days of notification, charges will be filed.</li>
                    <li>Checks returned for no signature will incur a $5 fee.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scope of Work */}
            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase italic dark:text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">design_services</span> Scope of Work
              </h4>
              <div className="space-y-6">
                <div>
                   <h5 className="font-black text-xs uppercase tracking-widest mb-2 dark:text-white">Standard Service</h5>
                   <p className="text-sm font-medium text-text-muted dark:text-gray-400">The regular service consists of Mow, Edge, Weed eat & Blow (MEW&B). Anything other than this is considered extra work.</p>
                </div>
                <div>
                   <h5 className="font-black text-xs uppercase tracking-widest mb-2 dark:text-white">Bag Removal & Mulching</h5>
                   <ul className="space-y-2 text-sm font-medium text-text-muted dark:text-gray-400 list-disc pl-4">
                     <li>I do not haul off bags. I mulch your yard when possible to alleviate bagging needs.</li>
                     <li>Grass cannot be mulched when very tall or has heavy leaf debris; it will be bagged and left on the curb unless directed otherwise.</li>
                     <li>If you have a specific place for bags, please let me know in advance.</li>
                   </ul>
                </div>
                <div>
                   <h5 className="font-black text-xs uppercase tracking-widest mb-2 dark:text-white">Extra Work Charges</h5>
                   <ul className="space-y-2 text-sm font-medium text-text-muted dark:text-gray-400 list-disc pl-4">
                     <li>Debris from work not done by The Grass Guy (tree/shrub trimmings, flower bed debris, raked piles) will be picked up for an extra charge.</li>
                     <li>Seasonal debris (heavy leaf fall, downed limbs) clean up and bagging incurs an extra charge.</li>
                     <li>Any requested extra work outside standard service will be charged accordingly.</li>
                   </ul>
                </div>
              </div>
            </div>

            {/* Liability */}
            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase italic dark:text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">gavel</span> Responsibility & Liability
              </h4>
              <ul className="space-y-4 text-sm font-medium text-text-muted dark:text-gray-400 list-decimal pl-4 marker:font-black marker:text-primary">
                <li><strong>Sprinklers:</strong> I do not repair or replace damaged or broken sprinkler heads. Maintaining sprinkler equipment is the responsibility of the homeowner. I am not responsible for sprinkler heads/systems that are not installed properly and are damaged by equipment.</li>
                <li><strong>Wiring:</strong> I will not take responsibility for exposed wires, cables, or electrical lines not installed properly. If damage is caused by my negligence, The Grass Guy will assume responsibility.</li>
                <li><strong>Foreign Objects:</strong> I am not responsible for foreign matter left on the lawn (toys, hoses, paper, etc.).</li>
                <li><strong>Pets:</strong> I am not responsible for containing pets. I will try to close gates but assume no responsibility. If a dog is in the backyard and I feel threatened, I will not mow the backyard.</li>
                <li><strong>Safety:</strong> Please ensure children and pets are inside during service to avoid exposure to thrown debris.</li>
              </ul>
            </div>

            {/* Landscaping Installation Terms */}
            <div className="lg:col-span-2 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
               <h4 className="text-xl font-black uppercase italic dark:text-white mb-6 flex items-center gap-3">
                 <span className="material-symbols-outlined text-primary">landscape</span> Landscaping Installation Terms
               </h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-black text-xs uppercase tracking-widest mb-1 dark:text-white">Payment Terms</h5>
                      <p className="text-sm font-medium text-text-muted dark:text-gray-400">50% down. Balance due and payable when last listed specified labor, plant, and material is installed.</p>
                    </div>
                    <div>
                      <h5 className="font-black text-xs uppercase tracking-widest mb-1 dark:text-white">Modifications</h5>
                      <p className="text-sm font-medium text-text-muted dark:text-gray-400">Landscape modifications may be necessary to maintain aesthetics. Only absolutely necessary changes will deviate from the original proposal.</p>
                    </div>
                    <div>
                      <h5 className="font-black text-xs uppercase tracking-widest mb-1 dark:text-white">Change Orders & Contingencies</h5>
                      <p className="text-sm font-medium text-text-muted dark:text-gray-400">
                        Changes requested by the owner (extra plants, materials, work) not in the proposal will incur a line item charge. All deviations involving extra costs require a written order. Agreements are contingent upon delays beyond our control. Unforeseen problems arising after work starts are not included in the proposal.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h5 className="font-black text-xs uppercase tracking-widest mb-2 text-red-500 flex items-center gap-2">
                           <span className="material-symbols-outlined text-sm">warning</span> Disclaimer
                        </h5>
                        <p className="text-sm font-medium text-text-muted dark:text-gray-400 leading-relaxed">
                          The Grass Guy Lawn & Landscape, Inc. will not be held responsible for any damage to invisible fences, irrigation systems, television cable, electric lines to lamp posts, outdoor lighting, etc. Fees to repair any damage will be the responsibility of the customer. These lines can be marked by the installing contractor (typically for a fee). Relocation costs are the customer's responsibility.
                        </p>
                        <p className="text-xs font-black uppercase tracking-widest text-text-muted mt-4">Note: Proposals may be withdrawn if not accepted within 60 days.</p>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
