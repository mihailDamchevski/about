export const Beat = () => (
<>
    <p className="text-amber-50 w-fit mx-auto"> Listen to my mixtape bro </p>
    <audio controls controlsList="nodownload" className="mx-auto mt-4 retro-audio">
      <source src="/audio/break-8.WAV" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <span className="mx-auto w-fit">
      <a
        href="/audio/break-8.WAV"
        download="break-8.WAV"
        className=" text-cyan-400 underline hover:text-white transition mx-auto w-fit"
        onClick={() => alert("⚠️You shouldn't download random files from the internet!⚠️\nThis one's okay though :)\n")}
      >
        Download My Track
      </a>
    </span>
  </>
);
