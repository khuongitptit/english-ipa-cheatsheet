import IPA from "@components/IPA";
import React from "react";
import { listIPA } from "src/constants";

const Home: React.FC = () => {
  const renderVowels = () => {
    return (
      <div className="border border-gray-500 rounded-md">
        <div className="border-b border-gray-300 text-center font-bold">
          Vowels
        </div>
        {listIPA.vowels.map((ipa) => (
          <IPA
            key={ipa.symbol}
            ipa={ipa}
            className="border-b border-gray-300"
          />
        ))}
      </div>
    );
  };
  const renderConsonants = () => {
    return (
      <div className="border border-gray-500 rounded-md">
        <div className="border-b border-gray-300 text-center font-bold">
          Consonants
        </div>
        {listIPA.consonants.map((ipa) => (
          <IPA
            key={ipa.symbol}
            ipa={ipa}
            className="border-b border-gray-300"
          />
        ))}
      </div>
    );
  };
  return (
    <div className="p-10 grid grid-cols-2 gap-5">
      {renderVowels()}
      {renderConsonants()}
    </div>
  );
};

export default Home;
