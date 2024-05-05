import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQData = [
  {
    question: 'Why do you need to Remove the Particulate Filter (DPF)?',
    answer:
      'In simple words, the particulate filter serves as a dust bag, like in a vacuum cleaner, the particulate filter traps particles of the burnt mixture for a while, sensors measure the level of filter clogging, and when the back pressure increases between the sensors, the engine turns on the regeneration mode, this increases by about 25% amount of fuel supplied, which increases the pressure of the exhaust gases, which try, like a stick, to push soot particles through the honeycombs inside the filter. Therefore, after removing the particulate filter, the CO2 level will not increase, but, on the contrary, will become stable and normal, the car will smoke less, the gas dynamics of the engine will improve and the car will reach the required power faster.',
  },
  {
    question: 'How does a Catalyst Work and what is it for?',
    answer:
      'In simple words, this is a component made of a special metal alloy that reacts with particles of the burnt mixture and reduces their number, which reduces CO2 emissions. But there is a nuance: on average, the catalyst begins to work only after reaching 700 degrees Celsius, therefore, when passing the technical inspection, the employee must warm up your engine and catalyst by increasing engine speed.',
  },
  {
    question: 'In what case will my engine CONSUME LESS FUEL?',
    answer:
      'It is generally accepted that increasing power and reducing the environment will jointly reduce your consumption and increase the dynamics of the car, but no. Increasing power means increasing the supply of fuel and air for combustion of the mixture. So, when you want to make a small fire, you consume a small amount of firewood, and when it’s big carnival and it’s customary to make large fires, you need to use a large amount of firewood. The situation is the same with the engine, no one engine will drive like a Ferrari, using the amount of fuel like some Golf with an engine of one and a half liters of juice under the hood. Removing the environment will, in turn, affect your fuel consumption, precisely because without this very environment, the engine begins to breathe with full lungs, and its fuel-air mixture becomes colder if the EGR valve is plugged.',
  },
];

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggleFaq = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="container mx-auto xl:py-28 sm:py-40">
      {FAQData.map((faq, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleFaq(index)}
            className="xl:w-[1330px] bg-slate-800 p-3 text-left rounded-xl font-roboto focus:outline-none 
            focus:bg-gray-700 transition duration-500"
          >
            {faq.question}
          </button>
          <AnimatePresence>
            {selected === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="mt-2 sm:overflow-y-auto sm:max-h-32
                scrollbar-none scrollbar-thumb-accent"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="px-4 py-2 bg-gray-700 rounded-xl xl:w-[1330px]"
                >
                  <p className='text-white'>{faq.answer}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Faq;
