import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineering',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Data Science and Analytics',
        1000,
        'Product Management',
        1000,
        'Full-Stack IOS App Dev',
        1000
      ]}
      speed={50}
      className='text-[2rem] md:text-[2rem] text-sky-200 font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;