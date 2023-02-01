import { IIPA } from "src/constants";
import { getBasePath } from "src/utils";

interface Props {
  ipa: IIPA;
  className?: string;
}
const IPA = ({ ipa, className }: Props) => {
  const renderUnderlinedWord = (example: {
    word: string;
    ipaPartIndexes: number[];
  }) => {
    const processedLetters = example.word.split("").map((letter, index) => {
      if (example.ipaPartIndexes.includes(index + 1)) {
        return `<u class="text-red-700">${letter}</u>`;
      }
      return `<span>${letter}</span>`;
    });
    return `<span>${processedLetters.join("")}</span>`;
  };
  return (
    <div
      className={["grid grid-cols-5 gap-2 text-center text-lg", className].join(
        " ",
      )}
    >
      <div className="text-2xl">{ipa.symbol}</div>
      <div
        className="col-span-3 flex items-center justify-center"
        dangerouslySetInnerHTML={{
          __html: ipa.examples
            .map(renderUnderlinedWord)
            .join("<span>, </span>"),
        }}
      ></div>
      <div className="flex justify-center">
        <img
          src={`${getBasePath()}/images/icon-sound.svg`}
          className="w-8 h-8"
          onClick={() =>
            (document.getElementById(ipa.symbol) as HTMLAudioElement).play()
          }
        />
        <audio controls id={ipa.symbol} className="hidden">
          <source
            src={`${getBasePath()}${ipa.exampleSound}`}
            type="audio/mp3"
          ></source>
        </audio>
      </div>
    </div>
  );
};
export default IPA;
