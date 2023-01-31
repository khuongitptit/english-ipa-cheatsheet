const playSound = (url: string) => {
  console.log("sound", url);
  const context = new AudioContext();
  const source = context.createBufferSource();
  source.connect(context.destination);
  const request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";
  request.onload = function () {
    context.decodeAudioData(request.response, function (response) {
      source.buffer = response;
      source.start(0);
    });
  };
  request.send();
};

const getBasePath = () => {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY!.replace(/.*?\//, "");
    return "/" + repo;
  }
  return "";
};

export { playSound, getBasePath };
