import { IIPA } from "src/constants";
import { getBasePath, playSound } from "src/utils";

interface Props {
  ipa: IIPA;
  className?: string;
}
const IPA = ({ ipa, className }: Props) => {
  return (
    <div
      className={["grid grid-cols-7 gap-2 text-center", className].join(" ")}
    >
      <div>{ipa.symbol}</div>
      <div className="col-span-3">
        {ipa.examples.map((example) => example.word).join(", ")}
      </div>
      <div className="col-span-3 flex justify-center">
        <img
          src={`${getBasePath()}/images/icon-sound.svg`}
          className="w-6 h-6"
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
