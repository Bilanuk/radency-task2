import { FaSadTear } from "react-icons/fa";

interface VerySadComponentProps {
  message?: string;
}

const funnyMessages = [
  "Ooops... Nothing to show here!",
  "Nothing is here, not even unicorns or rainbows.",
  "Why so sad? The funny cat videos are on their way!",
  "Did you hear the one about the sad computer? It had too many bugs!",
  "Don't worry, be happy! It's just a sad component.",
  "I'm sorry. I tried to find something to show you, but I couldn't.",
  "Best design ever! But there is nothing to show here.",
];

const VerySadComponent = ({ message }: VerySadComponentProps) => {
  const randomMessage =
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <FaSadTear className="text-secondary text-9xl mb-2" />
      <h1 className="text-xl">{message ? message : randomMessage}</h1>
    </div>
  );
};

export { VerySadComponent };
