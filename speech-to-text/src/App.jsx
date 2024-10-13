import React, { useState } from "react"
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";


function App() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);
  // const startListening =  SpeechRecognition.startListening({ continuous: true , language: 'en-US'});
  const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Browser does not support speech recognition.</p>;
  }
  
  // Event handler to start listening
  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
  };

  return (
    <>
      <div className='container'>
        <h2>Speech to Text Converter</h2>
        <br/>
        <p>A React hook that Converts Speech from the microphone to text and makes it available to your React Component.</p>
        <div className="main-content">
            {transcript}
        </div>
        <div className='btn-style'>
          <button onClick={() =>setCopied()}>Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}</button>
          <button onClick={handleStartListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>
      </div>
    </>
  );
};

export default App
