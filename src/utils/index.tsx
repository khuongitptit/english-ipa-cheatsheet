const playSound = (url: string) => {
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

export { playSound };
