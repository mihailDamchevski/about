export const Beat = () => (
<>
    <p className="text-amber-50 w-fit mx-auto"> Listen to a beat I've made </p>
    <audio controls controlsList="nodownload" className="mx-auto mt-4 retro-audio">
      <source src="/audio/beat.mp3" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
      <a
        href="/audio/beat.mp3"
        download="beat.mp3"
        className=" text-cyan-400 underline hover:text-white transition flex justify-center"
        onClick={() => alert("⚠️You shouldn't download random files from the internet!⚠️\nThis one's okay though :)\n")}
      >
        Download beat
      </a>
  </>
);
