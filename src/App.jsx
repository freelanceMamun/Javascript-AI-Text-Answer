import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './App.css';
import OptionSelections from './components/OptionSelections';
import { arrayItems } from './AiOptions/index';
import Translations from './components/Translations';
function App() {
  const [option, setOption] = useState({});
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const selecOptions = (option) => {
    setOption(option);
  };
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const doStuff = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };

  return (
    <div className="">
      {Object.values(option).length === 0 ? (
        <OptionSelections
          selecOptions={selecOptions}
          arrayItems={arrayItems}
        ></OptionSelections>
      ) : (
        <Translations
          result={result}
          setInput={setInput}
          doStuff={doStuff}
        ></Translations>
      )}
    </div>
  );
}

export default App;
