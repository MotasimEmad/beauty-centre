import styled, { keyframes, css } from "styled-components";

const Clients = () => {
    const row1 = [
        "https://d2pi0n2fm836iz.cloudfront.net/323767/0117202207413361e51dad6e73c.png",
       "https://d2pi0n2fm836iz.cloudfront.net/323767/0117202207493261e51f8cd16df.png",
       "https://d2pi0n2fm836iz.cloudfront.net/323767/0117202207551861e520e613efd.png",
       "https://d2pi0n2fm836iz.cloudfront.net/323767/0117202207532661e52076e6ea0.png"
      ];
    
  return (
    <div>
        <div class="mt-8 text-center">
            <h3 class="mb-6 text-3xl font-bold text-slate-900">Trusted by</h3>
            <p className="text-slate-700">
            Some of the world’s biggest brands trust us with their services
            </p>
        </div>

        <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </div>
  );
};

export default Clients;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 70%;
  height: 70%;
  /* border: 1px solid black; */
`;
