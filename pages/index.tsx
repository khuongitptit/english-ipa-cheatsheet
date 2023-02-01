import IPA from "@components/IPA";
import React from "react";
import { listIPA } from "src/constants";

const Home: React.FC = () => {
  const renderVowels = () => {
    return (
      <div className="border border-gray-500 rounded-md col-span-2 sm:col-span-1 my-2">
        <div className="border-b border-gray-400 text-center text-xl font-bold bg-green-100 rounded-t-md">
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
      <div className="border border-gray-500 rounded-md col-span-2 sm:col-span-1 my-2">
        <div className="border-b border-gray-400 text-center text-xl font-bold bg-green-100 rounded-t-md">
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
    <div className="p-4 sm:p-10 grid grid-cols-2 gap-5">
      {renderVowels()}
      {renderConsonants()}
    </div>
  );
};

export default Home;
