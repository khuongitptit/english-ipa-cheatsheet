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
      <div
        className="col-span-3 flex justify-center"
        onClick={() => {
          console.log("getBasePath", getBasePath());
          console.log("GITHUB_ACTIONS", process.env.GITHUB_ACTIONS);
          console.log("GITHUB_REPOSITORY", process.env.GITHUB_REPOSITORY);
          playSound(`${getBasePath()}/sounds/badlab.mp3`);
        }}
      >
        <img
          src={`${getBasePath()}/images/icon-sound.svg`}
          className="w-6 h-6"
        />
      </div>
    </div>
  );
};
export default IPA;
