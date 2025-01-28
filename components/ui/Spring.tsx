import { useRef, useEffect, useState, ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";

interface AnimatedContentProps {
  /** The children elements to render inside the animated container. */
  children: ReactNode;
  /** The distance to animate from when entering the viewport. */
  distance?: number;
  /** The direction of animation ("vertical" or "horizontal"). */
  direction?: "vertical" | "horizontal";
  /** Whether to reverse the animation direction. */
  reverse?: boolean;
  /** Configuration for the spring animation. */
  config?: { tension: number; friction: number };
  /** Initial opacity of the element before animation starts. */
  initialOpacity?: number;
  /** Whether to animate the opacity. */
  animateOpacity?: boolean;
  /** Initial scale of the element before animation starts. */
  scale?: number;
  /** The intersection observer threshold to trigger the animation. */
  threshold?: number;
  delayTime?: number
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  delayTime,
  distance = 100,
  direction = "vertical",
  reverse = false,
  config = { tension: 50, friction: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  const directions: { [key: string]: string } = {
    vertical: "Y",
    horizontal: "X",
  };

  const springProps = useSpring({
    from: {
      transform: `translate${directions[direction]}(${reverse ? `-${distance}px` : `${distance}px`}) scale(${scale})`,
      opacity: animateOpacity ? initialOpacity : 1,
    },
    to: inView
      ? { transform: "translateY(0px) scale(1)", opacity: 1 }
      : undefined,
    config,
    delay: delayTime
  });

  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};

export default AnimatedContent;
