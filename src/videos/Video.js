import { useRef } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";

function Video(ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return (
    <iframe
      ref={videoRef}
      width="640"
      height="360"
      src="https://www.youtube.com/embed/J3RhbVkVdbU?list=RDJ3RhbVkVdbU"
      title="Em Là Nhất - kis x Hoàng KayLee x Yahy「Cukak Remix 」/ Audio Lyrics Video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
export default forwardRef(Video);
