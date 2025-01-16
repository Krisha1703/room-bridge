import { useEffect } from "react"

const TextOutline = () => {
    useEffect(() => {
        const letters = document.querySelectorAll('.text-outline span');
        letters.forEach((letter, index) => {
          letter.style.transitionDelay = `${index * 0.1}s`;
        });
      }, []);

  return (
    <div className='absolute top-[460vh] left-10 z-10'>
        <h3 className="flex gap-2 font-bold text-3xl lg:text-8xl xlllll:text-[10rem] mb-4 ">
            {'ROOM'.split('').map((char, index) => (
                <span key={index} className="text-outline" data-text={char}>
                {char}
                </span>
            ))}
        </h3>
        <h3 className="flex gap-2 font-bold text-3xl lg:text-8xl xlllll:text-[10rem] mb-4">
            {'BRIDGE'.split('').map((char, index) => (
                <span key={index} className="text-outline" data-text={char}>
                {char}
                </span>
            ))}
        </h3>
    </div>
  )
}

export default TextOutline