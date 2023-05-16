import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut
} from "react-scroll-motion";

export default function StoreRecommendScrollMotion() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div>
      <ScrollContainer snap="proximity">
        <ScrollPage position="relative">
            <div>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            {/* <span style={{ fontSize: "30px" }}>
              Let me show you scroll animation 😀
            </span> */}
          </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}
          >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={batch(MoveIn(-500, 0), FadeUp)}>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b562caba-2fdd-4643-9738-f61ec855c287.__CR0,0,1464,600_PT0_SX1464_V1___.png" />
                Hello Guys 👋🏻
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>
                Nice to meet you 🙋🏻‍♀️
              </Animator>
              - I'm Dante Chun -
              <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
              <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Done</span>
            <br />
            <span style={{ fontSize: "30px" }}>
              There's FadeAnimation, MoveAnimation, StickyAnimation,
              ZoomAnimation
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
