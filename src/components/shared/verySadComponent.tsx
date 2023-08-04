import { VerySadComponentWrapper, StyledVerySadComponent } from "./styled";

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
  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <VerySadComponentWrapper>
      <StyledVerySadComponent />
      <h1>{message ? message : randomMessage}</h1>
    </VerySadComponentWrapper>
  );
}

export { VerySadComponent };